import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

import RootLayout from "./layout";

import { BarProps } from "@/infrastructure/components/organisms/bar/Bar";
import { Bar } from '../infrastructure/components';
import { ChangeEvent } from "react";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

jest.mock("../infrastructure/components", () => ({
    __esModule: true,
    Bar: jest.fn(),
}));

describe("RootLayout", () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        (Bar as unknown as jest.Mock).mockImplementation(
            ({ onSearch, onClickIcon, placeholder }: BarProps) => {
                const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value, 'hi');
                    if (onSearch) {
                        onSearch(e.target.value);
                    }
                }
                return (
                    <div data-testid="bar">
                        <input
                            data-testid="search-input"
                            placeholder={placeholder}
                            onChange={handleChange}
                        />
                        <button data-testid="icon-button" onClick={onClickIcon}>
                            Icon
                        </button>
                    </div>)
            }
        )
    });

    it("renders the layout with Bar and children", () => {
        render(
            <RootLayout>
                <div data-testid="child">Child Content</div>
            </RootLayout>
        );


        expect(screen.getByTestId("bar")).toBeInTheDocument();
        expect(screen.getByTestId("child")).toBeInTheDocument();
    });



    it.skip("handles icon button click correctly", () => {
        render(
            <RootLayout>
                <div />
            </RootLayout>
        );

        const iconButton = screen.getByTestId("icon-button");
        fireEvent.click(iconButton);

        expect(mockPush).toHaveBeenCalledWith("/");
    });
});
