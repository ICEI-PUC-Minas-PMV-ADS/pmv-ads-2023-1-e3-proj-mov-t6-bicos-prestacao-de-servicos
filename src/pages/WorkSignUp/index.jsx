import BackgroundImage from "../../components/BackgroundImage";
import Slogan from "../../components/Slogan";

import SignUpForm from "../../components/SignUpForm";
import { Container } from "./styles";
const WorkSignUp = () => {
	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Cadastre-se e aproveite os serviços da Bicos" />
				<SignUpForm client="Work" />
			</Container>
		</BackgroundImage>
	);
};

export default WorkSignUp;
