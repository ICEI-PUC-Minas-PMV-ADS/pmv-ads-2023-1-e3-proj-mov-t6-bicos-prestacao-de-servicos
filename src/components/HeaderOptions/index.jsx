import {BoxShadow} from 'react-native-shadow'
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import BellIcon from "../../assets/bell";
import LogoffIcon from "../../assets/logoff";

import shadowOpt from "./shadow"


import {
  Container,
} from "./styles";




const HeaderOptions = (props) => {

  const navigation = useNavigation();

	const handleToLogin = useCallback(() => {
    if(props.isContractor === true) {
		  navigation.navigate("HireLogin");
    } else {
      navigation.navigate("WorkLogin");
    }
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
