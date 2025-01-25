import { render } from "@testing-library/react";

import { TextDescriptionTitle } from "./TextDescriptionTitle";

describe("TextDescriptionTitle", () => {
    it("renders with the default text", () => {
        const { getByText } = render(<TextDescriptionTitle />);
        const title = getByText("Descripción del producto");
        expect(title).toBeInTheDocument();
        expect(title).toHaveStyle("color: #333333");
        expect(title).toHaveStyle("font-size: 28px");
    });

    it("renders with the provided text", () => {
        const customText = "Custom Title";
        const { getByText } = render(<TextDescriptionTitle text={customText} />);
        const title = getByText(customText);
        expect(title).toBeInTheDocument();
        expect(title).toHaveStyle("color: #333333");
        expect(title).toHaveStyle("font-size: 28px");
    });

    it("renders without additional margins", () => {
        const { getByText } = render(<TextDescriptionTitle />);
        const title = getByText("Descripción del producto");
        expect(title).toHaveStyle("margin: 0");
    });
});