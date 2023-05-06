import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable } from "react-native";
import EyeIcon from "../../assets/eyeicon";
import IdIcon from "../../assets/id";
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
	Container,
	SignUpDescription,
	SignUpLink,
	SignUpText,
	TextButton,
} from "./styles";

const Sign = () => {
	const navigation = useNavigation();
	const handleToSignUp = useCallback(() => {
		navigation.navigate("Login");
	}, []);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSign = useCallback(() => {
		const body = {
			name,
			lastName,
			email,
			password,
		};

		axios
			.post("http://10.0.2.2:3000/users", body)
			.then((res) => {
				handleToSignUp();
			})
			.catch((err) => {
				console.log(JSON.stringify(err));
			});
	}, [name, lastName, email, password]);

	return (
		<BackgroundImage>
			<Container>
				<Slogan text="Cadastre-se e aproveite os serviços da Bicos" />
				<ContainerForm>
					<Fields>
						<FieldBox>
							<Box>
								<IdIcon />
							</Box>
							<BoxInput>
								<Input placeholder="Nome" onChangeText={setName} />
							</BoxInput>
						</FieldBox>
						<FieldBox>
							<Box>
								<IdIcon />
							</Box>
							<BoxInput>
								<Input placeholder="Sobrenome" onChangeText={setLastName} />
							</BoxInput>
						</FieldBox>
						<FieldBox>
							<Box>
								<MailIcon />
							</Box>
							<BoxInput>
								<Input placeholder="Email" onChangeText={setEmail} />
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
									onChangeText={setPassword}
								/>
								<BoxIcon>
									<EyeIcon />
								</BoxIcon>
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
					<Pressable onPress={handleSign}>
						<TextButton>Cadastrar</TextButton>
					</Pressable>
					<SignUpDescription>
						<SignUpText>Já é cadastrado?</SignUpText>
						<Pressable onPress={handleToSignUp}>
							<SignUpLink>Entre</SignUpLink>
						</Pressable>
					</SignUpDescription>
				</ContainerForm>
			</Container>
		</BackgroundImage>
	);
};

export default Sign;
