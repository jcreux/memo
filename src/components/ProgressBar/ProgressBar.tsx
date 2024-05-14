import { useSelector } from "react-redux";

import TCardsState from "types/TCardsState";
import TRootState from "types/TRootState";

import {
	FilledProgressBar,
	StyledProgressBar,
	Timer,
	Wrapper,
} from "components/ProgressBar/styled";

const ProgressBar = (): JSX.Element => {
	const { timer, width }: TCardsState = useSelector((state: TRootState) => state.cards);

	return (
		<Wrapper data-testid="progress-bar">
			<StyledProgressBar>
				<FilledProgressBar $timer={timer} $width={width} />
				<Timer>{timer}</Timer>
			</StyledProgressBar>
		</Wrapper>
	);
};

export default ProgressBar;
