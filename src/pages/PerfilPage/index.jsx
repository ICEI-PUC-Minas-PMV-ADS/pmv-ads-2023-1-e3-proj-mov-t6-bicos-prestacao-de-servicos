import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import PerfilImage from "../../assets/perfilImage";

import EditPerfilIcon from "../../assets/editPerfil";
import MailIcon from "../../assets/mail";
import BigBirdIcon from "../../assets/bigbird";
import BigLocateIcon from "../../assets/bigLocate";
import PhoneIcon from "../../assets/phone";
import SpaceIcon from "../../assets/space";
import StarIcon from "../../assets/star";

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";
import SkillCard from "../../components/SkillCard";
import Footer from "../../components/Footer";
import BackOptions from "../../components/BackOptions";

import { 
	Name,
	Title,
	Text,
	Container, 
	Header,
	Orange,
	ContentPerfil,
	PerfilPhoto,
	SvgController,
	DataPerfil,
	PerfilHeader,
	Info,
	Rate,
	Skills,
	InfoDetail,
	SkillInfo,
	SkillText,
} from "./styles";


const PerfilPage = () => {

    const navigation = useNavigation();
	
	const handleToHome = useCallback(() => {
		navigation.navigate("Home");
	}, []);

	return (
		<>
    <Container>
		<Header>
			<Pressable onPress={handleToHome}>
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
				<EditPerfilIcon />
			</PerfilHeader>
			<DataPerfil>
				<Name>Gabriel Almeida</Name>
				<SpaceIcon />
				<Info>
					<InfoDetail>
						<PhoneIcon /><Text>(31) 998765543</Text>
					</InfoDetail>
					<InfoDetail>
						<MailIcon /><Text>meuemail@gmail.com</Text>
					</InfoDetail>
					<InfoDetail>
						<BigLocateIcon /><Text>Niterói, RJ</Text>
					</InfoDetail>
				</Info>
				<SpaceIcon />
				<Rate>
					<Title>Avaliação do Usuário</Title>
					<StarIcon />
				</Rate>
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

export default PerfilPage;