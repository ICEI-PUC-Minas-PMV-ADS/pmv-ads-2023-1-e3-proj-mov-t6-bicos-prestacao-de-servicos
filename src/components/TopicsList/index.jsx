import React, { useState } from "react";

import {
    Container,
    TopicText,
    TopicContent,
    TopicTextSelected
} from "./styles";


const TopicsList = (props) => {

    const [isSelected, setIsSelected] = useState(props.topics.length - 1);

    function filterSelection(topic) {
        if(topic.key != isSelected) {
            setIsSelected(topic.key)
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
                                <TopicText>
                                    {topic.text}
                                </TopicText>
                        </TopicContent>
                    }
                })
            }

        </Container> 

    );
};

export default TopicsList;