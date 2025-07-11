import React from "react";
import { render, screen } from "@testing-library/react";
import { CreditCardForm } from "./CreditCardForm";
import { User } from "./types";

describe("CreditCardForm", () => {
    const mockUser: User = {
        firstName: "Smith",
    };

    it("displays welcome message with user's first name", () => {
        render(<CreditCardForm user={mockUser} />);
        expect(screen.getByText("Welcome Smith")).toBeInTheDocument();
    });

    it("renders all form inputs", () => {
        render(<CreditCardForm user={mockUser} />);

        expect(
            screen.getByPlaceholderText("Credit card number")
        ).toBeInTheDocument();
        expect(screen.getByPlaceholderText("CVC")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("expiry")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Submit" })
        ).toBeInTheDocument();
    });

    it("has correct form attributes", () => {
        render(<CreditCardForm user={mockUser} />);
        const form = screen.getByText("Welcome Smith").closest("form");
        expect(form).toHaveAttribute("autoComplete", "off");
    });

    it("has correct input attributes for credit card number", () => {
        render(<CreditCardForm user={mockUser} />);
        const ccInput = screen.getByPlaceholderText("Credit card number");

        expect(ccInput).toHaveAttribute("type", "text");
        expect(ccInput).toHaveAttribute("name", "cc");
        expect(ccInput).toHaveAttribute("autoComplete", "cc-number");
        expect(ccInput).toHaveAttribute("inputMode", "numeric");
        expect(ccInput).toHaveAttribute("pattern", "[0-9 ]*");
    });

    it("has correct input attributes for CVC", () => {
        render(<CreditCardForm user={mockUser} />);
        const cvcInput = screen.getByPlaceholderText("CVC");

        expect(cvcInput).toHaveAttribute("type", "password");
        expect(cvcInput).toHaveAttribute("name", "cvc");
        expect(cvcInput).toHaveAttribute("autoComplete", "cc-csc");
        expect(cvcInput).toHaveAttribute("inputMode", "numeric");
        expect(cvcInput).toHaveAttribute("pattern", "[0-9]*");
        expect(cvcInput).toHaveAttribute("maxLength", "4");
    });

    it("has correct input attributes for expiry", () => {
        render(<CreditCardForm user={mockUser} />);
        const expiryInput = screen.getByPlaceholderText("expiry");

        expect(expiryInput).toHaveAttribute("type", "month");
        expect(expiryInput).toHaveAttribute("name", "expiry");
        expect(expiryInput).toHaveAttribute("autoComplete", "cc-exp");
    });

    it("has submit button with correct attributes", () => {
        render(<CreditCardForm user={mockUser} />);
        const submitButton = screen.getByRole("button", { name: "Submit" });

        expect(submitButton).toHaveAttribute("type", "submit");
    });

    it("renders inputs in a row container", () => {
        render(<CreditCardForm user={mockUser} />);
        const cvcInput = screen.getByPlaceholderText("CVC");
        const expiryInput = screen.getByPlaceholderText("expiry");

        // Both inputs should be in the same row container
        const rowContainer = cvcInput.parentElement;
        expect(rowContainer).toContainElement(expiryInput);
    });

    it("handles different user names", () => {
        const differentUser: User = {
            firstName: "Jane",
        };

        render(<CreditCardForm user={differentUser} />);
        expect(screen.getByText("Welcome Jane")).toBeInTheDocument();
    });

    it("allows form submission", () => {
        render(<CreditCardForm user={mockUser} />);
        const form = screen.getByText("Welcome Smith").closest("form");
        const submitButton = screen.getByRole("button", { name: "Submit" });

        expect(form).toContainElement(submitButton);
    });
});
