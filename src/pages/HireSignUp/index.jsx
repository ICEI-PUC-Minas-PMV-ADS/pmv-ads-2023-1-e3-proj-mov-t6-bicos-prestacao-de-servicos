import BackgroundImage from "../../components/BackgroundImage";
import SignUpForm from "../../components/SignUpForm";
import Slogan from "../../components/Slogan";
import { Container } from "./styles";

const HireSignUp = () => {
	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Cadastre-se e contrate o trabalhadores" />
				<SignUpForm client="Hire" />
			</Container>
		</BackgroundImage>
	);
};

export default HireSignUp;
