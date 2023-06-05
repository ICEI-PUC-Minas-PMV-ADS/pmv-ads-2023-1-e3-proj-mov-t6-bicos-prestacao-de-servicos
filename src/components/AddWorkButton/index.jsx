import { useCallback } from "react";
import Briefcase from "../../assets/briefcase"

import { useNavigation } from "@react-navigation/native";

import {
	Container,
    Text
} from "./styles";


const AddWorkButton = (props) => {

	const navigation = useNavigation();

	const handleToCreateService = useCallback(() => {
		navigation.navigate("CreateEditServices");
	}, []);

	return (
		<Container onPress={() => handleToCreateService()}>
            <Briefcase />
            <Text>{props.text}</Text>
		</Container>
	);
};

export default AddWorkButton;
