import { ImageBackground, SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import WalletIcon from '../../assets/walletIcon'
import LocateIcon from '../../assets/locateIcon'
import VerifiedIcon from '../../assets/verified'

import {
	IconArea,
	Container,
	Content,
	Title,
	Price,
	Locate,
	LocateArea,
	TitleArea
} from "./styles";

import stylesImage from "./stylesImage";

const JobCard = (props) => {

	const navigation = useNavigation();
	const handleToService = useCallback(() => {
		if(props.isContractor === true) {
			navigation.navigate("AdmService", { setData: props});
		} else {
			navigation.navigate("ServicesPage", { setData: props});
		}
	}, []);

	function virtualOrPresencial() {
		if(props.kmDistance === "virtual") {
			return <Locate>Á distância (Virtual)</Locate>
		} else {
			return <Locate>{props.kmDistance} KM de distância</Locate>
		}
	}


	function verifiedValidator() {
		if(props.verified === "sim") {
			return <IconArea>
						<VerifiedIcon />
					</IconArea>
		}
	}


	const image = {uri: props.imageUrl};

	return (
		<Container
			key={props.id}
			onPress={() => handleToService()}
		>
			<SafeAreaView>
				<ImageBackground
					source={image}
					resizeMode="cover"
					style={stylesImage.image}
					imageStyle={{ borderRadius: 6 }}
				>

					{verifiedValidator()}

					<Content>
						<TitleArea>
							<WalletIcon />
							<Title>{props.title}</Title>
						</TitleArea>

							<Price>R$ {props.price} p/ hora</Price>

						<LocateArea>
							<LocateIcon />

							{virtualOrPresencial()}

						</LocateArea>
					</Content>

				</ImageBackground>
			</SafeAreaView>
		</Container>

	);
};

export default JobCard;
