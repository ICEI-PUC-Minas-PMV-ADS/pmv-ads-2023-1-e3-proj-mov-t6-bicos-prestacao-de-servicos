import BackgroundImage from "../../components/BackgroundImage";
import LoginForm from "../../components/LoginForm";
import Slogan from "../../components/Slogan";
import { Container, LoginTitle } from "./styles";

const HireLogin = () => {
	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Seja bem-vindo de volta!" />
				<LoginTitle>
					Faça login e contrate um trabalhador para seu serviço
				</LoginTitle>
				<LoginForm client="Hire" />
			</Container>
		</BackgroundImage>
	);
};

export default HireLogin;
