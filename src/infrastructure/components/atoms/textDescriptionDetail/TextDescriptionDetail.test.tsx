import { render } from "@testing-library/react";
import { TextDescriptionDetail } from "./TextDescriptionDetail";

describe("TextDescriptionDetail", () => {
    it("renders with the provided text", () => {
        const text = "This is a detailed product description.";
        const { getByText } = render(<TextDescriptionDetail text={text} />);
        const paragraph = getByText(text);

        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveStyle("color: #EEEEEE");
        expect(paragraph).toHaveStyle("font-size: 16px");
    });

    it("applies the default maxWidth when not provided", () => {
        const text = "This is a detailed product description.";
        const { getByText } = render(<TextDescriptionDetail text={text} />);
        const paragraph = getByText(text);

        expect(paragraph).toHaveStyle("max-width: 60%");
    });

    it("applies the provided maxWidth", () => {
        const text = "This is a detailed product description.";
        const customMaxWidth = "50%";
        const { getByText } = render(
            <TextDescriptionDetail text={text} maxWidth={customMaxWidth} />
        );
        const paragraph = getByText(text);

        expect(paragraph).toHaveStyle(`max-width: ${customMaxWidth}`);
    });

    it("renders without additional margins", () => {
        const text = "This is a detailed product description.";
        const { getByText } = render(<TextDescriptionDetail text={text} />);
        const paragraph = getByText(text);

        expect(paragraph).toHaveStyle("margin: 0");
    });
});