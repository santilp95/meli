import { render, fireEvent } from "@testing-library/react";

import { CardDetail } from "./CardDetail";

describe("CardDetail", () => {
    it("renders all sections correctly", () => {
        const { getByText, getByAltText } = render(
            <CardDetail
                image="/path/to/image.jpg"
                alt="Product image"
                state="Nuevo - 234 vendidos"
                title="Deco Reverse Sombrero Oxford"
                price={1980}
                buttonText="Comprar"
                description="This is a detailed product description."
            />
        );

        expect(getByAltText("Product image")).toBeInTheDocument();
        expect(getByText("Nuevo - 234 vendidos")).toBeInTheDocument();
        expect(getByText("Deco Reverse Sombrero Oxford")).toBeInTheDocument();
        expect(getByText("$ 1.980")).toBeInTheDocument();
        expect(getByText("Comprar")).toBeInTheDocument();
        expect(getByText("This is a detailed product description.")).toBeInTheDocument();
    });

    it("handles button click", () => {
        const onButtonClickMock = jest.fn();
        const { getByText } = render(
            <CardDetail
                image="/path/to/image.jpg"
                alt="Product image"
                state="Nuevo - 234 vendidos"
                title="Deco Reverse Sombrero Oxford"
                price={1980}
                buttonText="Comprar"
                onButtonClick={onButtonClickMock}
                description="This is a detailed product description."
            />
        );

        const button = getByText("Comprar");
        fireEvent.click(button);

        expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    });
});