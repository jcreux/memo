import TCard from "types/TCard";
import TColor from "types/TColor";

const setCards = (): TCard[] => {
	const cards: TCard[] = [];
	const colors: TColor[] = [
		"blue",
		"blue",
		"brown",
		"brown",
		"cyan",
		"cyan",
		"green",
		"green",
		"orange",
		"orange",
		"pink",
		"pink",
		"red",
		"red",
		"yellow",
		"yellow",
	];

	for (let i: number = 0; colors.length > 0; i++) {
		const colorIndex: number = Math.floor(Math.random() * colors.length);

		cards.push({ color: colors[colorIndex], id: i, isVisible: false });
		colors.splice(colorIndex, 1);
	}

	return cards;
};

export default setCards;
