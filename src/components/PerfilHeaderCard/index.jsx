import WorkerPerfilImage from "../../assets/workerPerfilImage";
import ContractorPerfilImage from "../../assets/contractorPerfilImage";

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
        {props.isContractor ? (
            <ContractorPerfilImage />
        ) : (
            <WorkerPerfilImage />
        )}

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
