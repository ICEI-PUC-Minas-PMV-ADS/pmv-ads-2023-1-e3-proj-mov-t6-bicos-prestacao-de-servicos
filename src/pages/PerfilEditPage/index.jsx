import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import EditPerfilIcon from "../../assets/editPerfil";
import MailIcon from "../../assets/mail";
import BigBirdIcon from "../../assets/bigbird";
import BigLocateIcon from "../../assets/bigLocate";
import PhoneIcon from "../../assets/phone";
import SpaceIcon from "../../assets/space";
import NameIcon from "../../assets/name";
import LockerIcon from "../../assets/locker";

import HeaderOptions from "../../components/HeaderOptions";
import SkillCard from "../../components/SkillCard";
import Footer from "../../components/Footer";
import BackOptions from "../../components/BackOptions";

import { 
	Container, 
	Header,
	Orange,
	ContentPerfil,
	PerfilPhoto,
	SvgController,
	DataPerfil,
	PerfilHeader,
	Box,
	BoxInput,
	FieldBox,
	Fields,
	Input,
	Skills,
	SkillText,
	SkillInfo,
	Title,
} from "./styles";


 
const PerfilEditPage = () => {

    const navigation = useNavigation();
	
	const handleToPerfilPage = useCallback(() => {
		navigation.navigate("PerfilPage");
	}, []);

	return (
		<>
    <Container>
		<Header>
			<Pressable onPress={handleToPerfilPage}>
				<BackOptions />
			</Pressable>
			<HeaderOptions />
		</Header>
		<ContentPerfil>
			<Orange />
			<PerfilHeader>
				<PerfilPhoto>
					<SvgController>
						<BigBirdIcon />
					</SvgController>
				</PerfilPhoto>

			</PerfilHeader>
			<DataPerfil>
				<Fields>
					<FieldBox>
						<Box>
							<NameIcon />
						</Box>
						<BoxInput>
							<Input placeholder="Nome" />
						</BoxInput>
					</FieldBox>
				</Fields>
				<Fields>
					<FieldBox>
						<Box>
							<NameIcon />
						</Box>
						<BoxInput>
							<Input placeholder="Sobrenome" />
						</BoxInput>
					</FieldBox>
				</Fields>
				<Fields>
					<FieldBox>
						<Box>
							<MailIcon />
						</Box>
						<BoxInput>
							<Input placeholder="Email" />
						</BoxInput>
					</FieldBox>
				</Fields>
				<Fields>
					<FieldBox>
						<Box>
							<PhoneIcon />
						</Box>
						<BoxInput>
							<Input placeholder="nº de Celular" />
						</BoxInput>
					</FieldBox>
				</Fields>
				<Fields>
					<FieldBox>
						<Box>
							<LockerIcon />
						</Box>
						<BoxInput>
							<Input placeholder="Senha" />
						</BoxInput>
					</FieldBox>
				</Fields>
				<Fields>
					<FieldBox>
						<Box>
							<LockerIcon />
						</Box>
						<BoxInput>
							<Input placeholder="Confirme a Senha" />
						</BoxInput>
					</FieldBox>
				</Fields>
				<SpaceIcon />
				<Skills>
					<SkillText><Title>Especialidades</Title></SkillText>
					<SkillInfo>
						<SkillCard iconType={"build"} text={"Pedreiro"} />
						<SkillCard iconType={"car"} text={"Motorista"} />
						<SkillCard iconType={"book"} text={"Professor"} />
					</SkillInfo>
				</Skills>
			</DataPerfil>
		</ContentPerfil>
		<Footer startSelection={2} />
    </Container>
	</>
	);
};

export default PerfilEditPage;