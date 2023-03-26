import React from "react";
import { View, Text } from "react-native";

import BackgroundImage from "../../components/BackgroundImage";
import Slogan from "../../components/Slogan";
import BirdsButton from "../../components/BirdsButton";

import styles from './styles';


const PerfilChoose = () => {

    return (
        
            <BackgroundImage>
                <View style={styles.container}>

                    <Slogan 
                        text='A melhor plataforma para prestação e contratação de serviços'
                    />

                    <Text style={styles.questionText}>
                        O que você busca?
                    </Text>

                    <View style={styles.buttonAlign}>

                        <BirdsButton title='Trabalhar' />

                        <BirdsButton title='Contratar' contractButton={true} />

                    </View>

                </View>
            </BackgroundImage>
        


    );
}

export default PerfilChoose;