import styled from "styled-components/native";

export const Container = styled.Pressable`
    width: 16%;
    height: 50px;
    margin-bottom: 4%;
`;

export const Content = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 10px;

`

export const ContentSelected = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #FF6601;
`

export const Text = styled.Text`
    font-family: DMSans_400Regular;
    font-size: 8px;
    color: #989898;
    padding-top: 2px;
`

export const TextSelected = styled.Text`
    font-family: DMSans_400Regular;
    font-size: 8px;
    color: #FFFFFF;
    padding-top: 2px;
`

