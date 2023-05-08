import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable } from "react-native";
import EyeIcon from "../../assets/eyeicon";
import LockerIcon from "../../assets/locker";
import MailIcon from "../../assets/mail";
import BackgroundImage from "../../components/BackgroundImage";
import Slogan from "../../components/Slogan";

import {
	Box,
	BoxInput,
	ContainerForm,
	FieldBox,
	Fields,
	Input,
} from "../../components/FormStyles/FormStyles";

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
	const navigation = useNavigation();
	const handleToSignUp = useCallback(() => {
		navigation.navigate("Sign");
	}, []);

	const handleToHome = useCallback(() => {
		navigation.navigate("Home");
	}, []);

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
								<Input placeholder="Email" />
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
								/>
								<BoxIcon>
									<EyeIcon />
								</BoxIcon>
							</BoxInput>
						</FieldBox>
					</Fields>
					<LoginText>Esqueceu a senha?</LoginText>
					<Button onPress={handleToHome}>
						<TextButton
							
						>
							Entrar
						</TextButton>
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