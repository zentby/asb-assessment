import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TopBar } from "./TopBar";

describe("TopBar", () => {
    const mockOnToggleMenu = jest.fn();

    beforeEach(() => {
        mockOnToggleMenu.mockClear();
    });

    it("shows menu icon when showMenu is false", () => {
        render(<TopBar showMenu={false} onToggleMenu={mockOnToggleMenu} />);
        expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
        expect(screen.queryByLabelText("Back")).not.toBeInTheDocument();
    });

    it("shows arrow left icon when showMenu is true", () => {
        render(<TopBar showMenu={true} onToggleMenu={mockOnToggleMenu} />);
        expect(screen.getByLabelText("Back")).toBeInTheDocument();
        expect(screen.queryByLabelText("Open menu")).not.toBeInTheDocument();
    });

    it("displays correct title based on showMenu state", () => {
        const { rerender } = render(
            <TopBar showMenu={false} onToggleMenu={mockOnToggleMenu} />
        );
        expect(screen.getByText("Register card form")).toBeInTheDocument();

        rerender(<TopBar showMenu={true} onToggleMenu={mockOnToggleMenu} />);
        expect(screen.getByText("Menu")).toBeInTheDocument();
    });

    it("calls onToggleMenu when button is clicked", () => {
        render(<TopBar showMenu={false} onToggleMenu={mockOnToggleMenu} />);
        const button = screen.getByLabelText("Open menu");

        fireEvent.click(button);
        expect(mockOnToggleMenu).toHaveBeenCalledTimes(1);
    });
});
