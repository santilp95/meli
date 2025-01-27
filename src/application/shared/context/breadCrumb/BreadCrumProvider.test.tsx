import { FC } from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import { useBreadContext, BreadCrumbProvider } from "./BreadCrumbProvider";

const TestComponent: FC = () => {
    const { categories, setCategories } = useBreadContext();

    return (
        <div>
            <button onClick={() => setCategories(["Category 1", "Category 2"])}>
                Set Categories
            </button>
            <ul>
                {categories.map((category, index) => (
                    <li key={`${index}-${category}`}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

describe("BreadCrumbProvider", () => {
    it("provides categories and setCategories function", async () => {
        render(
            <BreadCrumbProvider>
                <TestComponent />
            </BreadCrumbProvider>
        );

        expect(screen.queryByText("Category 1")).not.toBeInTheDocument();
        expect(screen.queryByText("Category 2")).not.toBeInTheDocument();

        await act(async () => {
            screen.getByText("Set Categories").click();
        });

        await waitFor(() => {
            expect(screen.getByText("Category 1")).toBeInTheDocument();
            expect(screen.getByText("Category 2")).toBeInTheDocument();
        });
    });

    it("throws an error when useBreadContext is used outside of BreadCrumbProvider", async () => {

        render(<TestComponent />)


        await act(async () => {
            screen.getByText("Set Categories").click();
        });

        await waitFor(() => {
            expect(screen.queryByText("Category 1")).not.toBeInTheDocument();
            expect(screen.queryByText("Category 2")).not.toBeInTheDocument();
        });
    });
});
