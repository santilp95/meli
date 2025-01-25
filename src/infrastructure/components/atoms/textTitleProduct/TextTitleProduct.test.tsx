import { render } from "@testing-library/react";

import { TextTitleProduct } from "./TextTitleProduct";

describe("TextTitleProduct", () => {
  it("renders with the provided text", () => {
    const text = "Deco Reverse Sombrero Oxford";
    const { getByText } = render(<TextTitleProduct text={text} />);
    const title = getByText(text);

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-title-product");
  });

  it("applies the correct styles from the CSS file", () => {
    const text = "Deco Reverse Sombrero Oxford";
    const { getByText } = render(<TextTitleProduct text={text} />);
    const title = getByText(text);

    expect(title).toHaveStyle("color: var(--foreground)");
  });
});