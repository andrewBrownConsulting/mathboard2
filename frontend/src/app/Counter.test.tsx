import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {
    it("starts at 0", () => {
        render(<Counter />);
        expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("increments the count when the button is clicked", async () => {
        render(<Counter />);
        const button = screen.getByRole("button", { name: "Increment" });

        await userEvent.click(button);
        expect(screen.getByText("1")).toBeInTheDocument();

        await userEvent.click(button);
        expect(screen.getByText("2")).toBeInTheDocument();
    });
});
