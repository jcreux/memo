import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Card from "components/Card/Card";
import { checkGame, decrementTimer, hidePair } from "state/cards/cardsSlice";
import TAppDispatch from "types/TAppDispatch";
import TCardsState from "types/TCardsState";
import TRootState from "types/TRootState";

import { List, Wrapper } from "components/Grid/styled";

const Grid = (): JSX.Element => {
	const { cards, timeout }: TCardsState = useSelector((state: TRootState) => state.cards);
	const dispatch: TAppDispatch = useDispatch();

	useEffect(() => {
		const timer = setInterval(() => {
			dispatch(decrementTimer());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (timeout) {
			setTimeout(() => {
				dispatch(hidePair());
			}, 1000);
		}
	}, [cards]);

	useEffect(() => {
		dispatch(checkGame());
	}, [cards]);

	return (
		<Wrapper>
			<List>
				{cards.map((card) => (
					<Card card={card} key={card.id} />
				))}
			</List>
		</Wrapper>
	);
};

export default Grid;
