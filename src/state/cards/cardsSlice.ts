import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import setCards from "utils/setCards";
import TCardsState from "types/TCardsState";

const initialState: TCardsState = {
	cards: [],
	ignoreCard: false,
	pair: [],
	status: "NIP",
	timeout: false,
	timer: 30,
	width: 0,
};

const cardsSlice = createSlice({
	initialState,
	name: "cards",
	reducers: {
		checkGame: (state) => {
			if (state.cards.every((card) => card.isVisible)) {
				state.status = "WIN";
			}
		},
		checkPair: (state, action: PayloadAction<number>) => {
			if (!state.ignoreCard) {
				if (state.pair[0] !== undefined) {
					if (
						state.pair[0] === action.payload ||
						state.cards[state.pair[0]].color !== state.cards[action.payload].color
					) {
						state.pair[1] = action.payload;
						state.timeout = true;
					} else {
						state.pair = [];
					}
				} else {
					state.pair[0] = action.payload;
				}
			} else {
				state.ignoreCard = false;
			}
		},
		decrementTimer: (state) => {
			state.timer--;

			if (state.timer === 0) {
				state.status = "LOSE";
			}
		},
		flipCard: (state, action: PayloadAction<number>) => {
			if (state.cards[action.payload].isVisible) {
				state.ignoreCard = true;
			} else {
				state.cards[action.payload].isVisible = true;
			}
		},
		hidePair: (state) => {
			state.cards[state.pair[0]].isVisible = false;
			state.cards[state.pair[1]].isVisible = false;
			state.pair = [];
			state.timeout = false;
		},
		setTimer: (state, action: PayloadAction<number>) => {
			state.timer = action.payload;
		},
		startGame: (state) => {
			state.cards = setCards();
			state.ignoreCard = false;
			state.pair = [];
			state.status = "IP";
			state.timeout = false;
			if (state.timer === 0) {
				state.timer = 30;
			}
			state.width = 100 / state.timer;
		},
	},
});

export const { checkGame, checkPair, decrementTimer, flipCard, hidePair, setTimer, startGame } =
	cardsSlice.actions;

export default cardsSlice.reducer;
