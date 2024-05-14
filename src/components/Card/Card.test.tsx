import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ListItem } from "components/Card/styled";
import TCard from "types/TCard";

describe("Card component", () => {
	test("click Card component", () => {
		const card: TCard = {
			color: "blue",
			id: 0,
			isVisible: false,
		};
		const handleClick = jest.fn();

		render(
			<ListItem
				$color={card.color}
				data-testid="card"
				$isClickable={false}
				$isVisible={card.isVisible}
				onClick={handleClick}
			/>
		);

		const cardElement: HTMLElement = screen.getByTestId("card");

		cardElement.click();
		expect(handleClick).toHaveBeenCalled();
	});
});
