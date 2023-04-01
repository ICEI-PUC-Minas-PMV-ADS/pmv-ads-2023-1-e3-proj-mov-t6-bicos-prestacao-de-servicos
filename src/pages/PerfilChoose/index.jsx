import { Text, View } from "react-native";
import { useCallback } from "react/cjs/react.production.min";
import BackgroundImage from "../../components/BackgroundImage";
import BirdsButton from "../../components/BirdsButton";
import Slogan from "../../components/Slogan";
import styles from "./styles";

const PerfilChoose = ({ navigation }) => {
	const handleToLogin = useCallback(() => {
		navigation.navigate("login");
	}, []);

	return (
		<BackgroundImage>
			<View style={styles.container}>
				<Slogan text="A melhor plataforma para prestação e contratação de serviços" />
				<Text style={styles.questionText}>O que você busca?</Text>

				<View style={styles.buttonAlign}>
					<BirdsButton title="Trabalhar" onPress={handleToLogin} />
					<BirdsButton title="Contratar" contractButton={true} />
				</View>
			</View>
		</BackgroundImage>
	);
};

export default PerfilChoose;
