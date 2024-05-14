import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Title from "components/Title/Title";

describe("Title component", () => {
	test("renders Title component", () => {
		const testid: string = "title";

		render(<Title />);

		expect(screen.getByTestId(testid)).toBeInTheDocument();
		expect(screen.getByTestId(testid)).toHaveTextContent("Memo");
	});
});
