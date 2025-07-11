import React from "react";
import { render, screen } from "@testing-library/react";
import { MenuContent } from "./MenuContent";

describe("MenuContent", () => {
    it("renders ", () => {
        render(<MenuContent />);
        const menuContent = screen.getByText("This is menu content");
        expect(menuContent).toBeInTheDocument();
    });
});
