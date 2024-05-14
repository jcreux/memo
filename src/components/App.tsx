import { useSelector } from "react-redux";

import Grid from "components/Grid/Grid";
import Menu from "components/Menu/Menu";
import ProgressBar from "components/ProgressBar/ProgressBar";
import Title from "components/Title/Title";
import TRootState from "types/TRootState";

const App = (): JSX.Element => {
	const status: "NIP" | "IP" | "WIN" | "LOSE" = useSelector(
		(state: TRootState) => state.cards.status
	);

	return (
		<>
			{status === "IP" ? (
				<>
					<Title />
					<Grid />
					<ProgressBar />
				</>
			) : (
				<>
					<Title />
					<Menu />
				</>
			)}
		</>
	);
};

export default App;
