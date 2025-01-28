import { render } from "@testing-library/react";
import { TextStateProduct } from "./TextStateProduct";

describe("TextStateProduct", () => {
  it("renders with the provided text", () => {
    const text = "Nuevo - 234 vendidos";
    const { getByText } = render(<TextStateProduct text={text} />);
    const paragraph = getByText(text);

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass("text-state-product");
  });

  it("applies the correct styles from the CSS module", () => {
    const text = "Nuevo - 234 vendidos";
    const { getByText } = render(<TextStateProduct text={text} />);
    const paragraph = getByText(text);

    expect(paragraph).toHaveStyle("color: var(--black)");
  });
});