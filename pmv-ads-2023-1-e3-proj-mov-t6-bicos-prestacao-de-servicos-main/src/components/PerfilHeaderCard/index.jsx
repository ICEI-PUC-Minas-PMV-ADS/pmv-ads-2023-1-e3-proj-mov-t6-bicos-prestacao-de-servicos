import PerfilImage from "../../assets/perfilImage";

import {
	Container,
  PerfilCard,
  TextArea,
  Subtitle,
  Title,
  SvgController
} from "./styles";


const PerfilHeaderCard = (props) => {

	return (
		<Container>
      
      <PerfilCard>
        <SvgController>
          <PerfilImage />
        </SvgController>
      </PerfilCard>

      <TextArea>
        <Title>Olá, {props.title} </Title>
        <Subtitle>Bem vindo!</Subtitle>
      </TextArea>

		</Container>
	);
};

export default PerfilHeaderCard;
