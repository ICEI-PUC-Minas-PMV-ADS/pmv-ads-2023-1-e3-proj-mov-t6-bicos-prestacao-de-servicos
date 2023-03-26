import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

import styles from './styles';


const BackgroundImage = ({children}) => {
    
       return (
         <SafeAreaView>
           <ImageBackground source={require('../../assets/backgroundOrange.png')} resizeMode="cover" style={styles.image}>
    
            {children}
            
           </ImageBackground>
         </SafeAreaView>
       );
}



export default BackgroundImage;