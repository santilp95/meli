import { render } from "@testing-library/react";

import { ProductImage } from "./ProductImage";

describe("ProductImage", () => {
    const imageUrl = "/path/to/image.jpg";

    it("renders the image with the correct src and alt attributes", () => {
        const { getByAltText } = render(<ProductImage image={imageUrl} />);
        const img = getByAltText("Product image");

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "/_next/image?url=%2Fpath%2Fto%2Fimage.jpg&w=1920&q=75");
        expect(img).toHaveAttribute("alt", "Product image");
    });

});