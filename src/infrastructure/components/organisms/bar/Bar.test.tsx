import { render, fireEvent } from "@testing-library/react";
import { Bar } from "./Bar";
import { useBreadContext } from '../../../../application/shared/context/breadCrumb/BreadCrumbProvider';



jest.mock('../../../../application/shared/context/breadCrumb/BreadCrumbProvider', () => ({
    useBreadContext: jest.fn(),
}));

describe("Bar", () => {
    const placeholder = "Search here";
    const handleSearch = jest.fn();
    const handleClickIcon = jest.fn();
    const mockCategories = ["Category 1", "Category 2"];

    beforeEach(() => {
        (useBreadContext as jest.Mock).mockReturnValue({
            categories: mockCategories,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders the SearchBar with the correct placeholder", () => {
        const { getByPlaceholderText } = render(
            <Bar
                placeholder={placeholder}
                onSearch={handleSearch}
                onClickIcon={handleClickIcon}
            />
        );
        const searchBarInput = getByPlaceholderText(placeholder);
        expect(searchBarInput).toBeInTheDocument();
    });

    it("calls onSearch when the SearchBar button is clicked", () => {
        const { getByPlaceholderText, getByRole } = render(
            <Bar
                placeholder={placeholder}
                onSearch={handleSearch}
                onClickIcon={handleClickIcon}
            />
        );
        const searchBarInput = getByPlaceholderText(placeholder);
        const searchBarButton = getByRole("button", { name: /search/i });

        fireEvent.change(searchBarInput, { target: { value: "search value" } });
        fireEvent.click(searchBarButton);

        expect(handleSearch).toHaveBeenCalledTimes(1);
        expect(handleSearch).toHaveBeenCalledWith("search value");
    });

    it("calls onClickIcon when the icon is clicked", () => {
        const { getByTestId } = render(
            <Bar
                placeholder={placeholder}
                onSearch={handleSearch}
                onClickIcon={handleClickIcon}
            />
        );
        const iconButton = getByTestId('logo-icon');

        fireEvent.click(iconButton);

        expect(handleClickIcon).toHaveBeenCalledTimes(1);
    });

    it("renders the TextCategories with the correct categories", () => {
        const { getByText } = render(
            <Bar
                placeholder={placeholder}
                onSearch={handleSearch}
                onClickIcon={handleClickIcon}
            />
        );

        mockCategories.forEach(category => {
            expect(getByText(category)).toBeInTheDocument();
        });
    });
});