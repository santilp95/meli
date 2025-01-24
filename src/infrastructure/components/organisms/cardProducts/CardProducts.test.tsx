import { render } from "@testing-library/react";

import { CardProducts } from "./CardProducts";
import { IProduct } from "@/domain";
import { sampleProducts } from "@/utils";

const sampleProductsMock: IProduct[] = sampleProducts;

describe("CardProducts", () => {
    it("renders a list of products", () => {
        const { getByText } = render(
            <CardProducts products={sampleProductsMock} />
        );

        expect(getByText("Product 1")).toBeInTheDocument();
        expect(getByText("Product 2")).toBeInTheDocument();
        expect(getByText("Product 3")).toBeInTheDocument();
        expect(getByText("Product 4")).toBeInTheDocument();

        expect(() => getByText("Product 5")).toThrow();
    });
});
