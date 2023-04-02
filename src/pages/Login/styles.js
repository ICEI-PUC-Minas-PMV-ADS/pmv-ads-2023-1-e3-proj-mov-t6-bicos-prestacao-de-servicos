import styled from "styled-components/native";

export const Container = styled.View`
	height: 100%;
	justify-content: center;
`;
export const LoginTitle = styled.Text`
	margin-top: 100px;
	margin-bottom: 30px;
	color: white;
	font-size: 18px;
	text-align: center;
	font-family: DMSans_400Regular;
`;

export const Button = styled.Pressable`
	margin: 10px;
	display: flex;
	align-items: center;
	padding: 10px;
	margin-top: 15px;
	border-radius: 10px;
	border: none;
	background-color: #fe7216;
`;

export const TextButton = styled.Text`
	color: white;
	font-size: 14px;
	font-weight: 800;
	text-align: center;
`;
