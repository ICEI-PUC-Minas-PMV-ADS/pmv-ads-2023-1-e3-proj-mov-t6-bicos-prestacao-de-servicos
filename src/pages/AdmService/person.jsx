import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Check from "../../assets/check";
import Refuse from "../../assets/refuse";

export const Person = ({img, name, distance}) => {
  return (
    <View style={style.container}>
      <Image source={img} alt="person" />
      <View style={style.info}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.distance}><MaterialIcons name="location-on" size={20} color="orange" /> {distance}</Text>
      </View>
      <View style={style.actions}>
         <Text style={style.accept}>
            <Check />
         </Text>
         <Text style={style.reject}>
            <Refuse />
         </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
   container: {
      display: 'flex',
      width: "100%",
      alignItems: 'center',
      justifyContent: "space-evenly",
      gap: 20,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 4
   },
   info: {
      display: 'flex',
      gap: 3
   },
   name: {
      fontFamily: "DMSans_700Bold"
   },
   distance: {
      color: 'gray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "DMSans_400Regular"
   },
   actions: {
      display: 'flex',
      gap: 10,
      flexDirection: 'column'
   },
   accept: {
      borderRadius: 100,
      backgroundColor: 'green',
   },
   reject: {
      backgroundColor: 'red',
      borderRadius: 100,
   }
})
