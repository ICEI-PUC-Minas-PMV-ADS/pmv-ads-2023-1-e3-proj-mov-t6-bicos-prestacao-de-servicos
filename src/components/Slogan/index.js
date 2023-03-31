import React from "react";
import { Text, View } from 'react-native';

import styles from './styles';

import Logo from '../../assets/logoImage.svg'


const Slogan = (props) => {
    
       return (
         <View style={styles.container}>

          {props.contractorMode ? 
            <>
              <Logo style={styles.image} />
              <Text style={styles.title}>
                Bicos
              </Text>
              <Text>
                Contratante
              </Text>
            </>
          : 
            <>
              <Logo style={styles.image} />
              <Text style={styles.title}>
                Bicos
              </Text>
            </>
          }
          
           <Text style={styles.subtitle}>
              {props.text}
           </Text>
         </View>
       );
}



export default Slogan;