import { render, screen, fireEvent } from "@testing-library/react";
import { useSearchParams, useRouter } from "next/navigation";

import SearchResultPage from "./page";

import { useBreadContext } from "../../adapters/shared/context/breadCrumb";
import { useGetQuery } from "../../adapters/hooks";
import { CardProductsProps } from "@/infrastructure/components/organisms/cardProducts/CardProducts";

jest.mock("next/navigation", () => ({
    useSearchParams: jest.fn(),
    useRouter: jest.fn(),
}));

jest.mock("../../adapters/hooks", () => ({
    useGetQuery: jest.fn(),
}));

jest.mock("../../adapters/shared/context/breadCrumb", () => ({
    useBreadContext: jest.fn(),
}));

jest.mock("../../infrastructure/components", () => ({
    CardProducts: ({ products, onProductClick }: CardProductsProps) => (
        <div data-testid="card-products">
            {products.map((product, index) => (
                <button
                    key={`${product.id}-${index}`}
                    onClick={() => onProductClick && onProductClick(product.id)}
                >
                    {product.detail}
                </button>
            ))}
        </div>
    ),
    Loading: () => <div>Loading...</div>,
}));

describe("SearchResultPage", () => {
    const mockRouterPush = jest.fn();
    const mockSetCategories = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
        (useBreadContext as jest.Mock).mockReturnValue({
            setCategories: mockSetCategories,
        });
    });

    it("renders loading state when data is loading", () => {
        (useSearchParams as jest.Mock).mockReturnValue({
            get: () => "test-search",
        });
        (useGetQuery as jest.Mock).mockReturnValue({
            categories: [],
            products: [],
            loading: true,
            error: null,
        });

        render(<SearchResultPage />);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders error message when there is an error", () => {
        (useSearchParams as jest.Mock).mockReturnValue({
            get: () => "test-search",
        });
        (useGetQuery as jest.Mock).mockReturnValue({
            categories: [],
            products: [],
            loading: false,
            error: "Something went wrong",
        });

        render(<SearchResultPage />);

        expect(screen.getByText("Error: Something went wrong")).toBeInTheDocument();
    });

    it("renders products when data is loaded", () => {
        const mockProducts = [
            { id: "1", detail: "Product 1" },
            { id: "2", detail: "Product 2" },
        ];

        (useSearchParams as jest.Mock).mockReturnValue({
            get: () => "test-search",
        });
        (useGetQuery as jest.Mock).mockReturnValue({
            categories: ["Category 1", "Category 2"],
            products: mockProducts,
            loading: false,
            error: null,
        });

        render(<SearchResultPage />);

        expect(screen.getByTestId("card-products")).toBeInTheDocument();
        expect(screen.getByText("Product 1")).toBeInTheDocument();
        expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    it("calls setCategories when categories are updated", () => {
        const mockCategories = ["Category 1", "Category 2"];

        (useSearchParams as jest.Mock).mockReturnValue({
            get: () => "test-search",
        });
        (useGetQuery as jest.Mock).mockReturnValue({
            categories: mockCategories,
            products: [],
            loading: false,
            error: null,
        });

        render(<SearchResultPage />);

        expect(mockSetCategories).toHaveBeenCalledWith(mockCategories);
    });

    it("navigates to product detail page when a product is clicked", () => {
        const mockProducts = [
            { id: "1", detail: "Product 1" },
            { id: "2", detail: "Product 2" },
        ];

        (useSearchParams as jest.Mock).mockReturnValue({
            get: () => "test-search",
        });
        (useGetQuery as jest.Mock).mockReturnValue({
            categories: [],
            products: mockProducts,
            loading: false,
            error: null,
        });

        render(<SearchResultPage />);

        fireEvent.click(screen.getByText("Product 1"));
        expect(mockRouterPush).toHaveBeenCalledWith("/items/1");

        fireEvent.click(screen.getByText("Product 2"));
        expect(mockRouterPush).toHaveBeenCalledWith("/items/2");
    });
});
