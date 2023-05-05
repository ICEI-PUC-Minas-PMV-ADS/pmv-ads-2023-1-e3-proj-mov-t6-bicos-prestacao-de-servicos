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
                            isIcon: true
                        },
                        {
                            key: 1,
                            text: "Explorar",
                            isIcon: true
                        },
                        {
                            key: 2,
                            text: "Perfil",
                            isIcon: true
                        }
                    ]
                }
            
            />
		</Container>
	);
};

export default Footer;
