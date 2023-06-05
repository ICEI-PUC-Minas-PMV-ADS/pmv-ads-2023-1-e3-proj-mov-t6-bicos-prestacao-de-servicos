import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import MailIcon from "../../assets/mail";
import BigPenguin from "../../assets/bigPenguin";
import PhoneIcon from "../../assets/phone";
import NameIcon from "../../assets/name";
import LockerIcon from "../../assets/locker";

import HeaderOptions from "../../components/HeaderOptions";
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
	SaveButton,
	Text
} from "./styles";


 
const PerfilEditPageHire = () => {

    const navigation = useNavigation();
	
	const handleToPerfilPage = useCallback(() => {
		navigation.navigate("PerfilPageHire");
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
						<BigPenguin />
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
			</DataPerfil>
			<SaveButton onPress={handleToPerfilPage}>
				<Text>Salvar</Text>
			</SaveButton>
		</ContentPerfil>
		<Footer startSelection={1} isContractorFooter={true}/>
    </Container>
	</>
	);
};

export default PerfilEditPageHire;