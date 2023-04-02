import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import HireBirds from "../../assets/hireBirds";
import WorkBirds from "../../assets/workBirds";
import BackgroundImage from "../../components/BackgroundImage";
import Slogan from "../../components/Slogan";
import {
	BirdImageContent,
	Button,
	Container,
	ContainerButton,
	HireContent,
	QuestionText,
	Text,
	WorkContent,
} from "./styles";

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
					<WorkContent>
						<BirdImageContent>
							<WorkBirds />
						</BirdImageContent>
						<Button onPress={handleToLogin}>
							<Text>Trabalhar</Text>
						</Button>
					</WorkContent>

					<HireContent>
						<BirdImageContent>
							<HireBirds />
						</BirdImageContent>
						<Button>
							<Text>Contratar</Text>
						</Button>
					</HireContent>
				</ContainerButton>
			</Container>
		</BackgroundImage>
	);
};

export default PerfilChoose;
