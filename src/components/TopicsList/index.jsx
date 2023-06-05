import React, { useCallback, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CompassIcon from "../../assets/compassIcon"
import HouseIcon from "../../assets/houseIcon"
import PersonIcon from "../../assets/personIcon"

import {
    Container,
    TopicText,
    TopicContent,
    TopicTextSelected
} from "./styles";


const TopicsList = (props) => {

    const [isSelected, setIsSelected] = useState(props.startSelection);

    //Em caso de utilizar navegação com as opções do Topiclist//
    
    const navigation = useNavigation();

	const handleToServiceExplore = useCallback(() => {
		navigation.navigate("ServicesExplorer");
	}, []);

    const handleToHome = useCallback(() => {
        if(props.isContractor == true) {
            navigation.navigate("HomeContractor");

        } else {
            navigation.navigate("Home");
        }

	}, []);

    const handleToPerfil = useCallback(() => {
		
        if(props.isContractor == true) {
           navigation.navigate("PerfilPageHire");

        } else {
            navigation.navigate("PerfilPage");
        }
	}, []);


    function filterSelection(topic) {
        if(topic.key != isSelected) {

            let topicSelected = props.topics[topic.key];

            if(topicSelected.isNavigator === true) {
                
                switch(topicSelected.text) {
    
                    case "Explorar": handleToServiceExplore();
                    break;
                    case "Perfil": handleToPerfil();
                    break;
                    default: handleToHome();
                }
            } else {
                setIsSelected(topic.key)
                props.onActive(topic.key)
            }

        }
    }


    function iconValidator(iconName) {
        switch(iconName) {
            case "Home":
                return <HouseIcon />
                break;
            case "Explorar":
                return <CompassIcon />
                break;
            default: 
                return <PersonIcon />
        }
    }


    return (
        
        <Container>
            
            {
                
                props.topics.map((topic) => {
                    if(topic.key === isSelected) {

                        return <TopicContent
                            key={topic.key}
                            onPress={() => filterSelection(topic)}
                        >
                                <TopicTextSelected >
                                    {topic.text} 
                                </TopicTextSelected>
                                <TopicTextSelected>•</TopicTextSelected>
                        </TopicContent>

                    } else {

                        return <TopicContent
                            key={topic.key}
                            onPress={() => filterSelection(topic)}
                        >
                            {
                                topic.isIcon ? iconValidator(topic.text) :

                                <TopicText>
                                    {topic.text}
                                </TopicText>
                            }

                        </TopicContent>
                    }
                })
            }

        </Container> 

    );
};

export default TopicsList;