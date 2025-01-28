import { render } from "@testing-library/react";

import Home from "./page";

import { useBreadContext } from '../adapters/shared/context/breadCrumb/BreadCrumbProvider';


jest.mock("../adapters/shared/context/breadCrumb/BreadCrumbProvider", () => ({
    useBreadContext: jest.fn(),
}));

describe("Home", () => {
    it("calls setCategories once with an empty array on initial render", () => {
        const setCategoriesMock = jest.fn();
        (useBreadContext as jest.Mock).mockReturnValue({
            setCategories: setCategoriesMock,
        });

        render(<Home />);


        expect(setCategoriesMock).toHaveBeenCalledTimes(1);
        expect(setCategoriesMock).toHaveBeenCalledWith([]);
    });

    it("does not call setCategories again on re-render", () => {
        const setCategoriesMock = jest.fn();
        (useBreadContext as jest.Mock).mockReturnValue({
            setCategories: setCategoriesMock,
        });

        const { rerender } = render(<Home />);

        rerender(<Home />);

        expect(setCategoriesMock).toHaveBeenCalledTimes(1);
    });
});