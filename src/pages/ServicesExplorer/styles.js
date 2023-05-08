import styled from "styled-components";

export const Container = styled.View`
	height: 100%;
	width: 100%;
	background-color: #F0F0F0;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 9%;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
	justify-content: space-between;
`;

export const TitleArea = styled.View`
	padding-top: 15%;
`

export const Title = styled.View`
	display: flex;
	flex-direction: row;
`

export const TitleText = styled.Text`
	padding-right: 5px;
	font-size: 22px;
	font-family: DMSans_500Medium;
`

export const Subtitle = styled.Text`
	color: #989898;
	font-family: DMSans_400Regular;
	font-size: 12px;
`

export const SearchArea = styled.View`
	margin-top: 10%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const SkillCardArea = styled.View`
	margin-top: 5%;
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`

export const JobsArea = styled.ScrollView`
`

export const SearchInput = styled.TextInput`
    width: 93%;
    height: 50px;
    background-color: #FFFFFF;
    font-family: DMSans_400Regular;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const SvgController = styled.View`
    background-color: #FFFFFF;
    
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    align-items: center;
    justify-content: center;
    padding-left: 4px;
    padding-right: 6px;
`

export const InputContainer = styled.View`
    width: 75%;
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
`;

export const SearchButton = styled.TouchableOpacity`
	width: 22%;
	height: 50px;
	background-color: #FF6601;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	align-items: center;
	justify-content: center;
`

export const SearchButtonText = styled.Text`
	color: #FFFFFF;
	font-family: DMSans_500Medium;
	font-size: 14px;
`

