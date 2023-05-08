import {BoxShadow} from 'react-native-shadow'
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import BellIcon from "../../assets/bell";
import LogoffIcon from "../../assets/logoff";

import shadowOpt from "./shadow"


import {
  Container,
} from "./styles";




const HeaderOptions = () => {

  const navigation = useNavigation();

	const handleToLogin = useCallback(() => {
		navigation.navigate("Login");
	}, []);

	return (
        <BoxShadow setting={shadowOpt}>
            <Container onPress={()=>handleToLogin()}>
                <BellIcon />
                <LogoffIcon />
            </Container>
        </BoxShadow>

	);
};

export default HeaderOptions;
