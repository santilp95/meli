/* eslint-disable @next/next/no-img-element */
import { render, screen } from "@testing-library/react";
import { useParams } from "next/navigation";

import DetailProductPage from "./page";
import { useGetDataByID } from "../../../adapters/hooks";
import { CardDetailProps } from "@/infrastructure/components/organisms/cardDetail/CardDetail";

jest.mock("next/navigation", () => ({
    useParams: jest.fn(),
}));

jest.mock("../../../adapters/hooks", () => ({
    useGetDataByID: jest.fn(),
}));

jest.mock("../../../infrastructure/components", () => ({
    CardDetail: ({ title, description, price, image }: CardDetailProps) => (
        <div data-testid="card-detail">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <img src={image} alt={title} />
        </div>
    ),
    Loading: () => <div>Loading...</div>,
}));

describe("DetailProductPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders loading state when data is loading", () => {
        (useParams as jest.Mock).mockReturnValue({ id: "1" });
        (useGetDataByID as jest.Mock).mockReturnValue({
            data: null,
            error: null,
            loading: true,
        });

        render(<DetailProductPage />);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders error message when there is an error", () => {
        (useParams as jest.Mock).mockReturnValue({ id: "1" });
        (useGetDataByID as jest.Mock).mockReturnValue({
            data: null,
            error: "Something went wrong",
            loading: false,
        });

        render(<DetailProductPage />);

        expect(screen.getByText("Error: Something went wrong")).toBeInTheDocument();
    });

    it("renders CardDetail when data is loaded", () => {
        const mockData = {
            alt: "Product Alt",
            image: "/path/to/image.jpg",
            buttonText: "Comprar",
            description: "Product Description",
            price: 100,
            state: "New",
            title: "Product Title",
        };

        (useParams as jest.Mock).mockReturnValue({ id: "1" });
        (useGetDataByID as jest.Mock).mockReturnValue({
            data: mockData,
            error: null,
            loading: false,
        });

        render(<DetailProductPage />);

        expect(screen.getByTestId("card-detail")).toBeInTheDocument();
        expect(screen.getByText("Product Title")).toBeInTheDocument();
        expect(screen.getByText("Product Description")).toBeInTheDocument();
        expect(screen.getByText("100")).toBeInTheDocument();
    });

    it("sets document title based on data title", () => {
        const mockData = {
            alt: "Product Alt",
            image: "/path/to/image.jpg",
            buttonText: "Comprar",
            description: "Product Description",
            price: 100,
            state: "New",
            title: "Product Title",
        };

        (useParams as jest.Mock).mockReturnValue({ id: "1" });
        (useGetDataByID as jest.Mock).mockReturnValue({
            data: mockData,
            error: null,
            loading: false,
        });

        render(<DetailProductPage />);

        expect(document.title).toBe("Product Title");
    });
});
