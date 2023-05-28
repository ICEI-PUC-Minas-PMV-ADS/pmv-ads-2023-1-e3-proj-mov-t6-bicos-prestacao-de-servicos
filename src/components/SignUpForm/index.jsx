import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import { Alert, Pressable } from "react-native";
import EyeIcon from "../../assets/eyeicon";
import IdIcon from "../../assets/id";
import LockerIcon from "../../assets/locker";
import MailIcon from "../../assets/mail";
import {
	Box,
	BoxInput,
	ContainerForm,
	FieldBox,
	Fields,
	Input,
} from "../FormStyles/FormStyles";
import {
	BoxIcon,
	Button,
	SignUpDescription,
	SignUpLink,
	SignUpText,
	TextButton,
} from "./styles";

const SignUpForm = ({ client }) => {
	const navigation = useNavigation();

	const handleToSignUp = useCallback(() => {
		if (client === "Work") {
			navigation.navigate("WorkLogin");
		} else if (client === "Hire") {
			navigation.navigate("HireLogin");
		}
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
				Alert.alert("Usuário ou senha incorretos.");
				console.log(JSON.stringify(err));
			});
	}, [name, lastName, email, password]);

	return (
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
			<Button onPress={handleSign}>
				<TextButton>Cadastrar</TextButton>
			</Button>
			<SignUpDescription>
				<SignUpText>Já é cadastrado?</SignUpText>
				<Pressable onPress={handleToSignUp}>
					<SignUpLink>Entre</SignUpLink>
				</Pressable>
			</SignUpDescription>
		</ContainerForm>
	);
};

export default SignUpForm;
