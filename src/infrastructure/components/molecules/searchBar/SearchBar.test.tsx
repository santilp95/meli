import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
    it("renders with placeholder text", () => {
        const { getByPlaceholderText } = render(
            <SearchBar placeholder="Search here" />
        );
        const inputElement = getByPlaceholderText("Search here");
        expect(inputElement).toBeInTheDocument();
    });

    it("updates the input value when typing", () => {
        const { getByPlaceholderText } = render(
            <SearchBar placeholder="Search here" />
        );
        const inputElement = getByPlaceholderText("Search here");
        fireEvent.change(inputElement, { target: { value: "new value" } });
        expect(inputElement).toHaveValue("new value");
    });

    it("calls onSearch with the input value when the button is clicked", () => {
        const handleSearch = jest.fn();
        const { getByPlaceholderText, getByRole } = render(
            <SearchBar placeholder="Search here" onSearch={handleSearch} />
        );
        const inputElement = getByPlaceholderText("Search here");
        const buttonElement = getByRole("button");

        fireEvent.change(inputElement, { target: { value: "search value" } });
        fireEvent.click(buttonElement);

        expect(handleSearch).toHaveBeenCalledTimes(1);
        expect(handleSearch).toHaveBeenCalledWith("search value");
    });
});
