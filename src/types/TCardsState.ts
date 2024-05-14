import TCard from "types/TCard";

type TCardsState = {
	cards: TCard[];
	ignoreCard: boolean;
	pair: number[];
	status: "NIP" | "IP" | "WIN" | "LOSE";
	timeout: boolean;
	timer: number;
	width: number;
};

export default TCardsState;
