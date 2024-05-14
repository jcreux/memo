import styled, { css } from "styled-components";

import TFilledProgressBarProps from "types/TFilledProgressBarProps";

export const FilledProgressBar = styled.div<TFilledProgressBarProps>`
	background-color: #005b96;
	border-radius: 7px;
	height: 30px;
	position: absolute;
	transition: width 0.5 ease-out;
	z-index: 1;

	${({ $timer, $width }) =>
		css`
			width: ${$timer * $width}%;
		`}
`;

export const StyledProgressBar = styled.div`
	background-color: #b3cde0;
	border: 2px solid black;
	border-radius: 10px;
	height: 30px;
	position: relative;
	width: 100%;
`;

export const Timer = styled.p`
	color: white;
	font-size: 30px;
	position: relative;
	text-align: center;
	z-index: 2;
`;

export const Wrapper = styled.div`
	margin: auto;
	width: 80%;
`;
