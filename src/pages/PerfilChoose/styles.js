import styled from "styled-components";

export const Container = styled.View`
	height: 100%;
	width: 100%;
	justify-content: center;
	box-sizing: border-box;
`;

export const QuestionText = styled.Text`
	color: white;
	font-size: 20px;
	text-align: center;
	padding-top: 25px;
	font-family: DMSans_700Bold;
`;

export const ContainerButton = styled.View`
	width: 35%;
	margin-top: 200px;
	margin-left: 100px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const BirdImageContent = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: space-evenly;
	align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
	border-radius: 10;
	background-color: #fe7216;
`;

export const Text = styled.Text`
	padding: 10px;
	text-align: center;
	font-size: 15px;
	font-family: DMSans_700Bold;
	color: white;
`;

export const WorkContent = styled.View``;

export const HireContent = styled.View``;
