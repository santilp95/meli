import { render } from "@testing-library/react";

import { ProductDetail } from "./ProductDetail";

describe("ProductDetail", () => {
    it("renders the title and description with the correct props", () => {
        const title = "Custom Title";
        const description = "This is a detailed description.";
        const { getByText } = render(
            <ProductDetail title={title} description={description} />
        );

        const titleElement = getByText(title);
        const descriptionElement = getByText(description);

        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });

    it("uses the default title if none is provided", () => {
        const description = "This is a detailed description.";
        const { getByText } = render(<ProductDetail description={description} />);
        const defaultTitle = "Descripción del producto";

        expect(getByText(defaultTitle)).toBeInTheDocument();
    });
});
