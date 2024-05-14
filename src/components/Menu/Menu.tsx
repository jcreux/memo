import { useDispatch, useSelector } from "react-redux";

import { setTimer, startGame } from "state/cards/cardsSlice";
import TAppDispatch from "types/TAppDispatch";
import TRootState from "types/TRootState";

import { Button, Option, Result, Time, Wrapper } from "components/Menu/styled";

const Menu = (): JSX.Element => {
	const dispatch: TAppDispatch = useDispatch();
	const status: "NIP" | "IP" | "WIN" | "LOSE" = useSelector(
		(state: TRootState) => state.cards.status
	);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		dispatch(setTimer(parseInt(e.target.value)));
	};

	return (
		<Wrapper>
			{status === "WIN" ? (
				<Result>Congratulations!</Result>
			) : status === "LOSE" ? (
				<Result>Try again...</Result>
			) : null}
			<Time onChange={handleChange}>
				<Option value="30">30 seconds</Option>
				<Option value="45">45 seconds</Option>
				<Option value="60">60 seconds</Option>
			</Time>
			<Button onClick={() => dispatch(startGame())}>PLAY</Button>
		</Wrapper>
	);
};

export default Menu;
