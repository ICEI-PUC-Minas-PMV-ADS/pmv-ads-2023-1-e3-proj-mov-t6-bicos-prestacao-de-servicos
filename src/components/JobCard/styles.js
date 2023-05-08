import styled from "styled-components/native";

export const Container = styled.Pressable`
    display: flex;
    width: 47%;
    margin-bottom: 15px;
    height: 205px;
`;

export const Content = styled.View`
    padding-top: 5px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.6);;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    justify-content: space-evenly;
`

export const Title = styled.Text`
    color: #EAEAEA;
    font-size: 13px;
    font-family: DMSans_400Regular;
    margin-left: 5px;
    flex-wrap: wrap;
`

export const TitleArea = styled.View`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    padding-bottom: 5px;
`

export const Price = styled.Text`
    color: #ABABAB;
    font-size: 11px;
    font-family: DMSans_400Regular;
`

export const Locate = styled.Text`
    color: #EB910B;
    font-size: 11px;
    font-family: DMSans_400Regular;
    margin-left: 3px;
`

export const LocateArea = styled.View`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    padding-bottom: 5px;
`



