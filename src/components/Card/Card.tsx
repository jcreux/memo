import { useDispatch, useSelector } from "react-redux";

import { checkPair, flipCard } from "state/cards/cardsSlice";
import TAppDispatch from "types/TAppDispatch";
import TCardProps from "types/TCardProps";
import TRootState from "types/TRootState";

import { ListItem } from "components/Card/styled";

const Card = ({ card }: TCardProps): JSX.Element => {
	const dispatch: TAppDispatch = useDispatch();
	const timeout: boolean = useSelector((state: TRootState) => state.cards.timeout);

	const handleClick = (): void => {
		dispatch(flipCard(card.id));
		dispatch(checkPair(card.id));
	};

	return (
		<ListItem
			$color={card.color}
			data-testid="card"
			$isClickable={timeout}
			$isVisible={card.isVisible}
			onClick={handleClick}
		/>
	);
};

export default Card;
