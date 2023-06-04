import BackgroundImage from "../../components/BackgroundImage";
import LoginForm from "../../components/LoginForm";
import Slogan from "../../components/Slogan";
import { Container, LoginTitle } from "./styles";

const WorkLogin = () => {
	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Seja bem-vindo de volta!" />
				<LoginTitle> Faça login na sua conta </LoginTitle>
				<LoginForm client="Work" />
			</Container>
		</BackgroundImage>
	);
};

export default WorkLogin;
