import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home", () => {
    it("displays the Mathboard title and subheading", () => {
        render(<Home />);

        expect(
            screen.getByRole("heading", {
                name: "Mathboard",
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByText("The new age of mathematics input"),
        ).toBeInTheDocument();
    });
});
