import { View } from "react-native";
import BackgroundImage from "../../components/BackgroundImage";

const Login = () => {
	return (
		<BackgroundImage>
			<View style={styles.container}>
				<Slogan text="A melhor plataforma para prestação e contratação de serviços" />
				<View style={styles.SignContainer}></View>
				<View style={styles.buttonAlign}>
					<BirdsButton title="Trabalhar" />
					<BirdsButton title="Contratar" contractButton={true} />
				</View>
			</View>
		</BackgroundImage>
	);
};

export default Login;
