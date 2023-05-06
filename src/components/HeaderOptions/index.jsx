import {BoxShadow} from 'react-native-shadow'

import BellIcon from "../../assets/bell";
import LogoffIcon from "../../assets/logoff";

import shadowOpt from "./shadow"


import {
  Container,
} from "./styles";


const HeaderOptions = () => {

	return (
        <BoxShadow setting={shadowOpt}>
            <Container>
                <BellIcon />
                <LogoffIcon />
            </Container>
        </BoxShadow>

	);
};

export default HeaderOptions;
