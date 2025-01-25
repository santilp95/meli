import { render, fireEvent } from "@testing-library/react";

import { ProductInfo } from "./ProductInfo";

describe("ProductInfo", () => {
    it("renders all components with correct props", () => {
        const { getByText } = render(
            <ProductInfo
                state="Nuevo - 234 vendidos"
                title="Deco Reverse Sombrero Oxford"
                price={1980}
                buttonText="Comprar"
            />
        );

        expect(getByText("Nuevo - 234 vendidos")).toBeInTheDocument();
        expect(getByText("Deco Reverse Sombrero Oxford")).toBeInTheDocument();
        expect(getByText("$ 1.980")).toBeInTheDocument();
        expect(getByText("Comprar")).toBeInTheDocument();
    });

    it("calls the button click handler when clicked", () => {
        const onButtonClickMock = jest.fn();
        const { getByText } = render(
            <ProductInfo
                state="Nuevo - 234 vendidos"
                title="Deco Reverse Sombrero Oxford"
                price={1980}
                buttonText="Comprar"
                onButtonClick={onButtonClickMock}
            />
        );

        const button = getByText("Comprar");
        fireEvent.click(button);
        expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    });

});