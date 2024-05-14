import styled from "styled-components";

export const Button = styled.button`
	background-color: #005b96;
	border-radius: 10px;
	border: 2px solid black;
	color: white;
	display: block;
	font-size: 20px;
	height: 50px;
	margin: 30px auto;
	width: 150px;

	&:hover {
		background-color: #4287f5;
		cursor: pointer;
	}
`;

export const Result = styled.h1`
	font-size: 70px;
	margin: 70px 0px;
	text-align: center;
`;

export const Time = styled.select`
	border-radius: 10px;
	border: 2px solid black;
	display: block;
	font-size: 20px;
	height: 50px;
	margin: 50px auto 0px;
	text-align: center;
	width: 250px;

	&:hover {
		background-color: #4287f5;
		cursor: pointer;
	}
`;

export const Option = styled.option`
	font-size: 20px;
`;

export const Wrapper = styled.div`
	background-color: #b3cde0;
	border: 2px solid black;
	border-radius: 10px;
	height: 780px;
	margin: 20px auto;
	width: 80%;
`;
