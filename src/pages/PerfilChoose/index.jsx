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

	//PROVISORIO(AINDA NAO EXISTE REGISTER PRO CONTRATANTE)
	const handleToHome2 = useCallback(() => {
		navigation.navigate("HomeContractor");
	}, []);

	return (
		<BackgroundImage imagePath={"../../assets/backgroundOrange.png"}>
			<Container>
				<Slogan text="A melhor plataforma para prestação e contratação de serviços" />
				<QuestionText>O que você busca?</QuestionText>

				<ContainerButton>
					<BirdsButton title="Trabalhar" onPress={handleToLogin} />
					<BirdsButton title="Contratar" onPress={handleToHome2} contractButton={true} />
				</ContainerButton>
			</Container>
		</BackgroundImage>
	);
};

export default PerfilChoose;
