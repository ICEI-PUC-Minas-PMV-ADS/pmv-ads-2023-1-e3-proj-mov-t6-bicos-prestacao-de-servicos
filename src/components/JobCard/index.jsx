import WalletIcon from '../../assets/walletIcon'
import LocateIcon from '../../assets/locateIcon'
import { ImageBackground, SafeAreaView} from "react-native";

import {
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

	const image = {uri: props.imageUrl};

	return (
		<Container>
			<SafeAreaView>
				<ImageBackground
					source={image}
					resizeMode="cover"
					style={stylesImage.image}
					imageStyle={{ borderRadius: 6 }}
				>
					<Content>
						<TitleArea>
							<WalletIcon />
							<Title>{props.title}</Title>
						</TitleArea>

							<Price>R$ {props.price} p/ hora</Price>

						<LocateArea>
							<LocateIcon />
							<Locate>{props.kmDistance} KM de distância</Locate>
						</LocateArea>
					</Content>

				</ImageBackground>
			</SafeAreaView>
		</Container>

	);
};

export default JobCard;
