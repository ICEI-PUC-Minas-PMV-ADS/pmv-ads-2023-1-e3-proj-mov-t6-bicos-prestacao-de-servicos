import React, { useState } from "react";

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

    function filterSelection(topic) {
        if(topic.key != isSelected) {
            setIsSelected(topic.key)
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