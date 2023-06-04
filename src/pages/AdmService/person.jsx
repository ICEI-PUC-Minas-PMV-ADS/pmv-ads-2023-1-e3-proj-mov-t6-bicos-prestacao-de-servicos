import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



export const Person = ({img, name, distance}) => {
  return (
    <View style={style.container}>
      <Image source={img} alt="person" />
      <View style={style.info}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.distance}><MaterialIcons name="location-on" size={24} color="orange" /> {distance}</Text>
      </View>
      <View style={style.actions}>
         <Text style={style.accept}>
            <AntDesign name="check" size={24} color="black" />
         </Text>
         <Text style={style.reject}>
            <AntDesign name="closecircleo" size={24} color="black" />
         </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
   container: {
      display: 'flex',
      alignItems: 'center',
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
      fontWeight: '700'
   },
   distance: {
      color: 'gray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
