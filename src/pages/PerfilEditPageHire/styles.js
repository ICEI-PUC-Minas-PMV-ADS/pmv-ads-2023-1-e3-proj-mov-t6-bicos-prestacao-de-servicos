import styled from "styled-components";

export const Container = styled.View`
	height: 100%;
	width: 100%;
	background-color: #F0F0F0;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 9%;
	display: flex;
	justify-content: space-between;
`

export const Header = styled.View`
    display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 5%;
`;

export const Orange = styled.View`
	background-color: #FFB55E;
	width: 100%;
	height: 25px;
	margin-bottom: 5%;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`

export const ContentPerfil = styled.View`
	font-weight: bold;
	background-color: #FFF;
	height: 70%;
	width: 100%;
	border-radius: 10px;
	margin-bottom: 3%;
	align-self: center;
`

export const PerfilHeader = styled.View`
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 85%;
	align-self: center;
	
`

export const PerfilPhoto = styled.View`
    width: 90px;
    height: 90px;
    background-color: #E7E7E7;
    border-radius: 45px;    
    align-items: center;
	margin-bottom: 5%;
	padding-bottom: 20%;
	position: relative;
	left: 0;
`;

export const SvgController = styled.View`
    padding-left: 11px;
	padding-right: 3px;
	padding-top: 15px;
`;

export const DataPerfil = styled.View`
	background-color: #F1F1F1;
	align-self: center;
	height: 55%;
	width: 85%;
	border-radius: 10px;
	padding: 5%;
	
`;

export const Fields = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: 8%;
	padding-right: 8%;
	padding-bottom: 4%;
`;
export const FieldBox = styled.View`
	display: flex;
	flex-direction: row;
`;
export const Box = styled.View`
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	border: 1px solid #e6e6e6;
	padding-left: 5%;
	padding-right: 5%;
`;

export const BoxInput = styled.View`
	display: flex;
	flex-direction: row;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border: 1px solid #e6e6e6;
	background-color: #fff;
`;
export const Input = styled.TextInput`
	width: 100%;
	padding: 4% 5% 4% 5%;
`;

export const Skills = styled.View`
	padding-top: 3%;
`

export const SkillText = styled.View`
	align-self: center;	
`

export const SkillInfo = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	padding-top: 5%;
`

export const Title = styled.Text`
    font-family: DMSans_700Bold;
    font-size: 16px;
    color: black;
    padding-top: 2px;
`;

export const SaveButton = styled.Pressable`
	margin-top: 10%;
	height: 6%;
	width: 85%;
	align-self: center;
	background-color: #FFB55E;
	border-radius: 10px;
	justify-content: center;
`;

export const Text = styled.Text`
    font-size: 16px;
	border-radius: 10px;
	color: white;

	text-align: center;
	font-family: DMSans_700Bold;
`