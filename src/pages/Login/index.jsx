import EyeIcon from "../../assets/eyeicon";
import BackgroundImage from "../../components/BackgroundImage";
import { ContainerForm, Fields } from "../../components/FormStyles/FormStyles";
import Slogan from "../../components/Slogan";
import { Button, Container, LoginTitle, TextButton } from "./styles";
const Login = () => {
	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Seja bem-vindo de volta!" />
				<LoginTitle> Faça login na sua conta </LoginTitle>
				<ContainerForm>
					<Fields placeholder="Email" />
					<Fields
						placeholder="Senha"
						autoCorrect={false}
						secureTextEntry={true}
						textContentType="password"
					/>
					<EyeIcon />
					<Button>
						<TextButton>Entrar</TextButton>
					</Button>
				</ContainerForm>
			</Container>
		</BackgroundImage>
	);
};

export default Login;
