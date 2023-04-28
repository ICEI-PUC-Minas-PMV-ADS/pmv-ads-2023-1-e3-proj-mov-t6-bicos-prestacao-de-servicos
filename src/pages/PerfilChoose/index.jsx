import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import BirdsButton from "../../components/BirdsButton";
import Slogan from "../../components/Slogan";
import { Container, ContainerButton, QuestionText } from "./styles";

const PerfilChoose = () => {
	const navigation = useNavigation();
	const handleToLogin = useCallback(() => {
		navigation.navigate("Login");
	}, []);

	const handleToService = useCallback(() => {
		navigation.navigate("ServicePage");
	})



	return (
		<BackgroundImage>
			<Container>
				<Slogan text="A melhor plataforma para prestação e contratação de serviços" />
				<QuestionText>O que você busca?</QuestionText>

				<ContainerButton>
					<BirdsButton title="Trabalhar" onPress={handleToLogin} />
					<BirdsButton title="Home" onPress={handleToService}/>
					<BirdsButton title="Contratar" contractButton={true} />
				</ContainerButton>
			</Container>
		</BackgroundImage>
	);
};

export default PerfilChoose;
