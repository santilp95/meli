import { render, fireEvent } from "@testing-library/react";

import { Bar } from "./Bar";

describe("Bar", () => {
    const placeholder = "Search here";
    const categories = ["Category 1", "Category 2", "Category 3"];
    const handleSearch = jest.fn();

    it("renders the SearchBar with the correct placeholder", () => {
        const { getByPlaceholderText } = render(
            <Bar
                placeholder={placeholder}
                categories={categories}
                onSearch={handleSearch}
            />
        );
        const searchBarInput = getByPlaceholderText(placeholder);
        expect(searchBarInput).toBeInTheDocument();
    });

    it("calls onSearch when the SearchBar button is clicked", () => {
        const { getByPlaceholderText, getByRole } = render(
            <Bar
                placeholder={placeholder}
                categories={categories}
                onSearch={handleSearch}
            />
        );
        const searchBarInput = getByPlaceholderText(placeholder);
        const searchBarButton = getByRole("button");

        fireEvent.change(searchBarInput, { target: { value: "search value" } });
        fireEvent.click(searchBarButton);

        expect(handleSearch).toHaveBeenCalledTimes(1);
        expect(handleSearch).toHaveBeenCalledWith("search value");
    });

    it("renders the TextCategories with the correct categories", () => {
        const { getByText } = render(
            <Bar
                placeholder={placeholder}
                categories={categories}
                onSearch={handleSearch}
            />
        );
        categories.forEach((category) => {
            expect(getByText(category)).toBeInTheDocument();
        });
    });
});
