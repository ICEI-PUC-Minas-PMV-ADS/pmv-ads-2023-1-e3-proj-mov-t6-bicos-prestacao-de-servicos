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

	return (
		<BackgroundImage>
			<Container>
				<Slogan text="A melhor plataforma para prestação e contratação de serviços" />
				<QuestionText>O que você busca?</QuestionText>

				<ContainerButton>
					<BirdsButton title="Trabalhar" pressOn={handleToLogin} />

					<BirdsButton title="Contratar" contractButton={true} />
				</ContainerButton>
			</Container>
		</BackgroundImage>
	);
};

export default PerfilChoose;
