import { render } from "@testing-library/react";

import { TextDescriptionTitle } from "./TextDescriptionTitle";

describe("TextDescriptionTitle", () => {
    it("renders with the default text", () => {
        const { getByText } = render(<TextDescriptionTitle />);
        const title = getByText("Descripción del producto");
        expect(title).toBeInTheDocument();
    });

    it("renders with the provided text", () => {
        const customText = "Custom Title";
        const { getByText } = render(<TextDescriptionTitle text={customText} />);
        const title = getByText(customText);
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass("text-description-title");
    });

});