import {BoxShadow} from 'react-native-shadow'

import BackIcon from "../../assets/back";

import shadowOpt from "./shadow"


import {
  Container,
} from "./styles";


const BackOptions = () => {

	return (
        <BoxShadow setting={shadowOpt}>
            <Container>
              <BackIcon />
            </Container>
        </BoxShadow>

	);
};

export default BackOptions;