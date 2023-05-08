import styled from "styled-components/native";

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #FF6601;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    color: #EAEAEA;
    font-size: 25px;
    font-family: DMSans_700Bold;
    margin-left: 5px;
    flex-wrap: wrap;
    text-align: center;
`

export const Price = styled.Text`
    color: #1ed760;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
`
export const Date = styled.Text`
    color: #EAEAEA;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
`