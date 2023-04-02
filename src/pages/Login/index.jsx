import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
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
	const navigation = useNavigation();
	const handleToSignUp = useCallback(() => {
		navigation.navigate("SignUp");
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
					<Button>
						<TextButton>Entrar</TextButton>
					</Button>
					<SignUpDescription>
						<SignUpText>Novo Aqui?</SignUpText>
						<SignUpLink onPress={handleToSignUp}>Cadastre-se</SignUpLink>
					</SignUpDescription>
				</ContainerForm>
			</Container>
		</BackgroundImage>
	);
};

export default Login;
