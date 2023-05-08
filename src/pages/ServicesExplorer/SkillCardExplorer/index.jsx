import React, { useState } from "react";

import GreyCar from "../../../assets/greyCar"
import WhiteCar from "../../../assets/whiteCar"
import GreyBuild from "../../../assets/greyBuild"
import WhiteBuild from "../../../assets/whiteBuild"
import GreyBook from "../../../assets/greyBook"
import WhiteBook from "../../../assets/whiteBook"
import GreyScreen from "../../../assets/greyScreen"
import WhiteScreen from "../../../assets/whiteScreen"
import GreyCake from "../../../assets/greyCake"
import WhiteCake from "../../../assets/whiteCake"

import {
    Container,
    Text,
    Content
} from "./styles";
import { useNavigation } from '@react-navigation/native';


const SkillCardExplorer = (props) => {
    const navigation = useNavigation();

    function IconGreySelector(typeButton) {

        switch (typeButton) {

            case "build":
                return <GreyBuild />
            case "car":
                return <GreyCar />
            case "book":
                return <GreyBook />
            case "cake":
                return <GreyCake />
            default:
                return <GreyScreen />
        }
    }

    return (

        <Container
            onPress={() => {
                navigation.navigate('SkillExplorer', { setFilter: props });
            }}

        >
            <Content>
                {IconGreySelector(props.iconType)}
                <Text>{props.text}</Text>
            </Content>

        </Container>

    );
};

export default SkillCardExplorer;
