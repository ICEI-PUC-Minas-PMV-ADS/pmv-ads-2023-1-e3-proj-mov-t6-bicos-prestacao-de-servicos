import styled from "styled-components/native";

export const Button = styled.Pressable`
	margin: 10px;
	display: flex;
	align-items: center;
	padding: 10px;
	margin: 15px;
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

export const SignUpContainer = styled.View`
	display: flex;
	flex-direction: row;
	margin-top: 60px;
	margin-bottom: 30px;
`;

export const BoxIcon = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: -40px;
`;
export const LoginText = styled.Text`
	margin: 10px 20px 10px 0;
	color: #777;
	font-size: 15px;
	text-align: right;
	font-family: DMSans_400Regular;
`;
export const SignUpText = styled.Text`
	color: #777;
	font-size: 15px;
	font-family: DMSans_400Regular;
`;
export const SignUpDescription = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 5px;
`;
export const SignUpLink = styled.Text`
	color: black;
	font-size: 15px;
	font-family: DMSans_700Bold;
`;
