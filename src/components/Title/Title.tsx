import { Text, Wrapper } from "components/Title/styled";

const Title = (): JSX.Element => {
	return (
		<Wrapper data-testid="title">
			<Text>Memo</Text>
		</Wrapper>
	);
};

export default Title;
