import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import EditPerfilIcon from "../../assets/editPerfil";
import MailIcon from "../../assets/mail";
import BigPenguin from "../../assets/bigPenguin";
import BigLocateIcon from "../../assets/bigLocate";
import PhoneIcon from "../../assets/phone";
import SpaceIcon from "../../assets/space";

import HeaderOptions from "../../components/HeaderOptions";
import Footer from "../../components/Footer";
import BackOptions from "../../components/BackOptions";

import { 
	Name,
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
	InfoDetail,
} from "./styles";


const PerfilPageHire = () => {

    const navigation = useNavigation();
	
	const handleToHomeContractor = useCallback(() => {
		navigation.navigate("HomeContractor");
	}, []);

	const handleToPerfilEditPage = useCallback(() => {
		navigation.navigate("PerfilEditPageHire");
	}, []);

	return (
		<>
    <Container>
		<Header>
			<Pressable onPress={handleToHomeContractor}>
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
				<Pressable onPress={handleToPerfilEditPage}>
					<EditPerfilIcon />
				</Pressable>
			</PerfilHeader>
			<DataPerfil>
				<Name>João Silva</Name>
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
			</DataPerfil>
		</ContentPerfil>
		<Footer startSelection={1} isContractorFooter={true}/>
    </Container>
	</>
	);
};

export default PerfilPageHire;