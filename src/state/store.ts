import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "state/cards/cardsSlice";

const store = configureStore({
	reducer: {
		cards: cardsReducer,
	},
});

export default store;
