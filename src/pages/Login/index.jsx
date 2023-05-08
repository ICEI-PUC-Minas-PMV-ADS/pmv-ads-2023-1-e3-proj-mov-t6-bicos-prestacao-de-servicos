import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import { Alert, Pressable } from "react-native";
import EyeIcon from "../../assets/eyeicon";
import LockerIcon from "../../assets/locker";
import MailIcon from "../../assets/mail";
import BackgroundImage from "../../components/BackgroundImage";
import {
	Box,
	BoxInput,
	ContainerForm,
	FieldBox,
	Fields,
	Input,
} from "../../components/FormStyles/FormStyles";
import Slogan from "../../components/Slogan";

import {
	BoxIcon,
	Button,
	Container,
	LoginText,
	LoginTitle,
	SignUpDescription,
	SignUpLink,
	SignUpText,
	TextButton,
} from "./styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();
	const handleToSignUp = useCallback(() => {
		navigation.navigate("Sign");
	}, []);

	const handleToHome = useCallback(() => {
		navigation.navigate("Home");
	}, []);

	const handleLogin = useCallback(() => {
		const body = {
			email,
			password,
		};

		handleToHome();

		// axios
		// 	.post("http://10.0.2.2:3000/login", body)
		// 	.then((res) => {
		// 		handleToHome();
		// 	})
		// 	.catch((err) => {
		// 		Alert.alert("Usuário ou senha incorretos.");
		// 		console.log(JSON.stringify(err));
		// 	});
	}, [email, password]);

	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Seja bem-vindo de volta!" />
				<LoginTitle> Faça login na sua conta </LoginTitle>
				<ContainerForm>
					<Fields>
						<FieldBox>
							<Box>
								<MailIcon />
							</Box>
							<BoxInput>
								<Input placeholder="Email" onChangeText={setEmail} />
							</BoxInput>
						</FieldBox>
						<FieldBox>
							<Box>
								<LockerIcon />
							</Box>
							<BoxInput>
								<Input
									placeholder="Senha"
									autoCorrect={false}
									secureTextEntry={true}
									textContentType="password"
									onChangeText={setPassword}
								/>
								<BoxIcon>
									<EyeIcon />
								</BoxIcon>
							</BoxInput>
						</FieldBox>
					</Fields>
					<LoginText>Esqueceu a senha?</LoginText>
					<Button onPress={handleLogin}>
						<TextButton>Entrar</TextButton>
					</Button>
					<SignUpDescription>
						<SignUpText>Novo Aqui?</SignUpText>
						<Pressable onPress={handleToSignUp}>
							<SignUpLink>Cadastre-se</SignUpLink>
						</Pressable>
					</SignUpDescription>
				</ContainerForm>
			</Container>
		</BackgroundImage>
	);
};

export default Login;
