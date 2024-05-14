import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { FilledProgressBar } from "components/ProgressBar/styled";

describe("ProgressBar component", () => {
	test("renders FilledProgressBar component with width and 30s timer", () => {
		const timer: number = 25;
		const width: number = 100 / 30;

		render(<FilledProgressBar data-testid="progress-bar" $timer={timer} $width={width} />);

		expect(screen.getByTestId("progress-bar")).toHaveStyle(`width: ${timer * width}%`);
	});

	test("renders FilledProgressBar component with with width and 45s timer", () => {
		const timer: number = 10;
		const width: number = 100 / 45;

		render(<FilledProgressBar data-testid="progress-bar" $timer={timer} $width={width} />);

		expect(screen.getByTestId("progress-bar")).toHaveStyle(`width: ${timer * width}%`);
	});
});
