import { useCallback } from "react";
import Briefcase from "../../assets/briefcase"

import { useNavigation } from "@react-navigation/native";

import {
	Container,
    Text
} from "./styles";


const AddWorkButton = (props) => {

	const navigation = useNavigation();
    
	const handleToService = useCallback(() => {
		navigation.navigate("ServicesPage", { setData: props});
	}, []);

	return (
		<Container onPress={() => handleToService()}>
            <Briefcase />
            <Text>{props.text}</Text>
		</Container>
	);
};

export default AddWorkButton;
