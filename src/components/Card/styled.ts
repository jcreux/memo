import styled, { css } from "styled-components";

import TListItemProps from "types/TListItemProps";

export const ListItem = styled.li<TListItemProps>`
	background-color: darkgrey;
	border: 2px solid black;
	border-radius: 10px;
	display: inline-flex;
	height: 160px;
	list-style: none;
	margin: 10px;
	width: 160px;

	&:hover {
		border: 2px solid white;
		cursor: pointer;
	}

	${({ $isClickable }) =>
		$isClickable &&
		css`
			pointer-events: none;

			&:hover {
				cursor: progress;
			}
		`}

	${({ $isVisible, $color }) =>
		$isVisible &&
		css`
			background-color: ${$color};
		`}
`;
