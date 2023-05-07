import WalletIcon from '../../../assets/walletIcon'

import {
	Container,
	Content,
	Title,
	Price,
	Date
} from "./styles";

const JobCard = (props) => {

	return (
			<Content>
				<WalletIcon />
				<Title>{props.descricao}</Title>
				<Price>R$ {props.preco} p/ hora</Price>
				<Date>{props.created_at}</Date>
			</Content>
	);
};

export default JobCard;
