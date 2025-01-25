import { render, screen } from "@testing-library/react";

import { TextCategories } from "./TextCategories";

describe("TextCategories", () => {
    it("renders the correct number of categories", () => {
        const categories = [
            "Electrónica, Audio y Video",
            "iPod",
            "Reproductores",
            "iPod touch",
            "32 GB",
        ];
        render(<TextCategories categories={categories} />);

        categories.forEach((category) => {
            expect(screen.getByText(category)).toBeInTheDocument();
        });
    });

    it("renders separators between categories", () => {
        const categories = ["Electrónica, Audio y Video", "iPod", "Reproductores"];
        render(<TextCategories categories={categories} />);

        const separators = screen.getAllByText(">");
        expect(separators).toHaveLength(categories.length - 1);
    });

    it("renders the last category in bold", () => {
        const categories = ["Electrónica, Audio y Video", "iPod", "Reproductores"];
        render(<TextCategories categories={categories} />);

        const lastCategory = screen.getByText("Reproductores");
        expect(lastCategory).toHaveStyle("font-weight: bold");
    });

    it.skip("applies padding correctly", () => {
        const categories = ["Electrónica, Audio y Video", "iPod"];
        const { container } = render(<TextCategories categories={categories} />);

        // Verifica que el contenedor principal tiene el padding definido
        expect(container.firstChild).toHaveStyle("padding: 16px 0");
    });
});
