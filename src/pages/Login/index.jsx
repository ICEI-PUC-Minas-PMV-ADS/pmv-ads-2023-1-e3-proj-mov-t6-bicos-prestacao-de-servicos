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
	SignUpLink,
	SignUpText,
	TextButton,
} from "./styles";
const Login = () => {
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
					<SignUpText>
						<SignUpText>Novo Aqui?</SignUpText>{" "}
						<SignUpLink>Cadastre-se</SignUpLink>
					</SignUpText>
				</ContainerForm>
			</Container>
		</BackgroundImage>
	);
};

export default Login;
