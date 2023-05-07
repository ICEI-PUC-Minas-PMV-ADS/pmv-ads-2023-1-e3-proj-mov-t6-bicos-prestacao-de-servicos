import styled from "styled-components/native";

export const ContainerForm = styled.View`
	margin: 15px;
	justify-content: center;
	background-color: #f8f8f8;
	border-radius: 15px;
	min-height: 40%;
`;
export const Fields = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 40px;
	gap: 10px;
`;
export const FieldBox = styled.View`
	display: flex;
	flex-direction: row;
	margin: 10px;
`;
export const Box = styled.View`
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: #fff;
	display: flex;
	padding: 15px;
	justify-content: center;
	border: 1px solid #e6e6e6;
`;

export const BoxInput = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border: 1px solid #e6e6e6;
	background-color: #fff;
`;
export const Input = styled.TextInput`
	width: 100%;
	padding: 15px;
`;
