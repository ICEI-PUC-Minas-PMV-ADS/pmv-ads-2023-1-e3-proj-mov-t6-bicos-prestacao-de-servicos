import React, { useState } from "react";

import GreyCar from "../../assets/greyCar"
import WhiteCar from "../../assets/whiteCar"
import GreyBuild from "../../assets/greyBuild"
import WhiteBuild from "../../assets/whiteBuild"
import GreyBook from "../../assets/greyBook"
import WhiteBook from "../../assets/whiteBook"
import GreyScreen from "../../assets/greyScreen"
import WhiteScreen from "../../assets/whiteScreen"
import GreyCake from "../../assets/greyCake"
import WhiteCake from "../../assets/whiteCake"

import {
    Container,
    Text,
    TextSelected,
    Content,
    ContentSelected
} from "./styles";


const SkillCard = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    function IconGreySelector(typeButton) {

        switch (typeButton) {

            case "build":
                return <GreyBuild />
                break;
            case "car":
                return <GreyCar />
                break;
            case "book":
                return <GreyBook />
                break;
            case "cake":
                return <GreyCake />
                break;
            default:
                return <GreyScreen />
        }
    }

    function IconWhiteSelector(typeButton) {

        switch (typeButton) {

            case "build":
                return <WhiteBuild />
                break;
            case "car":
                return <WhiteCar />
                break;
            case "book":
                return <WhiteBook />
                break;
            case "cake":
                return <WhiteCake />
                break;
            default:
                return <WhiteScreen />
        }
    }

    return (

        <Container
            onPress={() => {
                console.log(props.withoutClick)
                if(props.withoutClick !== true)  {
                    props.onClick(!isSelected);
                    setIsSelected(!isSelected);
                }

            }}
            
        >

            {isSelected ?    

                <ContentSelected>
                    {IconWhiteSelector(props.iconType)}
                    <TextSelected>{props.text}</TextSelected>
                </ContentSelected>

                :

                <Content>
                    {IconGreySelector(props.iconType)}
                    <Text>{props.text}</Text>
                </Content>

            }

        </Container> 

    );
};

export default SkillCard;
