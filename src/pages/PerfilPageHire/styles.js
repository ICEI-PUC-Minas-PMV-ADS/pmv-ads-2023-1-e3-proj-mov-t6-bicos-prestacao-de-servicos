import styled from "styled-components";

export const Container = styled.View`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #F0F0F0;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 9%;
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
	height: 50%;
	width: 100%;
	border-radius: 10px;
	margin-bottom: 15%;
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
	padding-top: 10px;
`;

export const DataPerfil = styled.View`
	background-color: #F1F1F1;
	display: flex;
	align-self: center;
	height: 55%;
	width: 85%;
	border-radius: 10px;
	padding: 5%;
`;

export const Text = styled.Text`
    font-family: DMSans_400Regular;
    font-size: 15px;
    color: black;
    padding-top: 2px;
	padding-left: 12px;
`;

export const Name = styled.Text`
    font-family: DMSans_700Bold;
    font-size: 22px;
    color: black;
	padding-bottom: 5px;
`;

export const Title = styled.Text`
    font-family: DMSans_700Bold;
    font-size: 16px;
    color: black;
    padding-top: 2px;
`;

export const Info = styled.View`
`

export const InfoDetail = styled.View`
	flex-direction: row;
	padding: 2%;
	margin-top: 4px;
	margin-bottom: 5px;
`
