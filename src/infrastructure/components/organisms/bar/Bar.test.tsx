import { render, fireEvent } from "@testing-library/react";

import { Bar } from "./Bar";

describe("Bar", () => {
    const placeholder = "Search here";

    const handleSearch = jest.fn();

    it("renders the SearchBar with the correct placeholder", () => {
        const { getByPlaceholderText } = render(
            <Bar
                placeholder={placeholder}
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

});
