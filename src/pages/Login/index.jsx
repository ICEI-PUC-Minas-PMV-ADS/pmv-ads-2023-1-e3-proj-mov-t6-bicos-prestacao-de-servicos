import BackgroundImage from "../../components/BackgroundImage";
import Slogan from "../../components/Slogan";
import { Container } from "./styles";

const Login = () => {
	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Seja bem-vindo de volta!" />
			</Container>
		</BackgroundImage>
	);
};

export default Login;
