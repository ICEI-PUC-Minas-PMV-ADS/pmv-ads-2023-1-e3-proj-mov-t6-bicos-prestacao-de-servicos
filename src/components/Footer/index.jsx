import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import TopicsList from "../TopicsList";


import {
	Container,
} from "./styles";


const Footer = (props) => {
    
	return (
		<Container>

            {props.isContractorFooter ? (
                <TopicsList 
                    startSelection={props.startSelection}
                    isContractor={props.isContractorFooter}
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
                                text: "Perfil",
                                isIcon: true,
                                isNavigator: true
                            }
                        ]
                    }
                        
                />
            ) : (
                <TopicsList 
                    startSelection={props.startSelection}
                    isContractor={props.isContractorFooter}
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
            )}
		</Container>
	);
};

export default Footer;
