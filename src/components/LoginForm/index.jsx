import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import { Alert, Pressable } from "react-native";
import EyeIcon from "../../assets/eyeicon";
import LockerIcon from "../../assets/locker";
import MailIcon from "../../assets/mail";

import {
	Box,
	BoxInput,
	ContainerForm,
	FieldBox,
	Fields,
	Input,
} from "../FormStyles/FormStyles";

import {
	BoxIcon,
	Button,
	LoginText,
	SignUpDescription,
	SignUpLink,
	SignUpText,
	TextButton,
} from "./styles";

const LoginForm = ({ client }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();
	const handleToSignUp = useCallback(() => {
		if (client === "Work") {
			navigation.navigate("WorkSignUp");
		} else if (client === "Hire") {
			navigation.navigate("HireSignUp");
		}
	}, []);

	const handleToHome = useCallback(() => {
		navigation.navigate("Home");
	}, []);

	const handleToHireHome = useCallback(() => {
		navigation.navigate("HomeContractor");
	}, []);

	const handleLogin = useCallback(() => {
		const body = {
			email,
			password,
		};
		if (client === "Work") {
			axios
				.post("http://10.0.2.2:3000/login", body)
				.then((res) => {
					handleToHome();
				})
				.catch((err) => {
					Alert.alert("Usuário ou senha incorretos.");
					console.log(JSON.stringify(err));
				});
		} else {
			axios
				.post("http://10.0.2.2:3000/login", body)
				.then((res) => {
					handleToHireHome();
				})
				.catch((err) => {
					Alert.alert("Usuário ou senha incorretos.");
					console.log(JSON.stringify(err));
				});
		}
	}, [email, password]);

	return (
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
	);
};

export default LoginForm;