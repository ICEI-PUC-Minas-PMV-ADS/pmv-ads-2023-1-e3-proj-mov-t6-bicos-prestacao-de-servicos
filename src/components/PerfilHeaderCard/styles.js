import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
`;

export const PerfilCard = styled.View`
    padding-right: 8px;
    width: 45px;
    height: 45px;
    background-color: #E5E5E5;
    border-radius: 45px;

    justify-items: center;
    align-items: center;
`;

export const TextArea = styled.View`
    justify-content: center;
    padding-left: 4px;
`;

export const SvgController = styled.View`
    padding-left: 11px;
    padding-top: 8px;
`;

export const Title = styled.Text`
    font-family: DMSans_700Bold;
    font-size: 15px;
    line-height: 18px;
    display: flex;
`;

export const Subtitle = styled.Text`
    align-self: center;
    color: #989898;
    font-size: 12px;
    font-family: DMSans_400Regular;
`;


