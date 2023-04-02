import BackgroundImage from "../../components/BackgroundImage";
import { ContainerForm } from "../../components/FormStyles/FormStyles";
import Slogan from "../../components/Slogan";
import { Container } from "./styles";

const Login = () => {
	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Seja bem-vindo de volta!" />
			</Container>
			<ContainerForm></ContainerForm>
		</BackgroundImage>
	);
};

export default Login;
