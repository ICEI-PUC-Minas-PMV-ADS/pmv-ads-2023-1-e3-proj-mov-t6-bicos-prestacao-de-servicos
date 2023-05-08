import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import TopicsList from "../TopicsList";


import {
	Container,
} from "./styles";


const Footer = (props) => {
    
	return (
		<Container>
            <TopicsList 
                startSelection={props.startSelection}
                topics={
                    [
                        {
                            key: 0,
                            text: "Home",
                            isIcon: true,
                            isNavigator: true
                        },
                        {
                            key: 1,
                            text: "Explorar",
                            isIcon: true,
                            isNavigator: true
                        },
                        {
                            key: 2,
                            text: "Perfil",
                            isIcon: true,
                            isNavigator: true
                        }
                    ]
                }
            
            />
		</Container>
	);
};

export default Footer;
