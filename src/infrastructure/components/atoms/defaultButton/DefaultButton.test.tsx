import { render, fireEvent } from "@testing-library/react";

import { DefaultButton } from "./DefaultButton";

describe("DefaultButton", () => {
    it("renders the button with the correct text", () => {
        const text = "Comprar";
        const { getByText } = render(<DefaultButton text={text} />);
        const button = getByText(text);

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("default-button");
    });

    it("calls the onClick handler when clicked", () => {
        const onClickMock = jest.fn();
        const text = "Comprar";
        const { getByText } = render(
            <DefaultButton text={text} onClick={onClickMock} />
        );
        const button = getByText(text);

        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
