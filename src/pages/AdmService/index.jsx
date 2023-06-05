import { useNavigation, useRoute,  } from "@react-navigation/native";
import { useCallback } from "react";
import { Image, Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import img from "../../assets/image91.png";
import EditPerfilIcon from "../../assets/editPerfil";

import { MaterialIcons } from "@expo/vector-icons";
import npc from "../../assets/npc1.png";
import npc2 from "../../assets/npc2.png";
import npc3 from "../../assets/npc3.png";



import { Person } from "./person";

const MOCK = [
  {
    id: 1,
    img: npc,
    name: "Carlos Nobrega",
    distance: "11 KM de distancia",
  },
  {
    id: 2,
    img: npc2,
    name: "Roberta Angelina",
    distance: "18 KM de distancia",
  },
  {
    id: 3,
    img: npc3,
    name: "Fred Versalhes",
    distance: "4 KM de distancia",
  },
];

function AdmService(props) {
   const navigation = useNavigation();

   const handleForm = useCallback((props) => {
    navigation.navigate("ServicesForm", { props: 1, });
    }, [navigation]);


  return (
    <ScrollView>
      <View style={styles.container}>

        <Pressable style={styles.edit} onPress={() => handleForm(props)}>
					<EditPerfilIcon />
				</Pressable>

        <Image source={img} style={styles.imageContainer} />

        <View style={styles.info}>
          <View style={styles.otherInfos}>
            <View style={styles.title}>
              <MaterialIcons name="wallet-travel" size={24} color="black" />
              <Text style={styles.titleText}>{props.title}Pedreiro experiente</Text>
            </View>
            <View style={styles.distance}>
              <MaterialIcons name="location-on" size={24} color="orange" />
              <Text style={styles.subtitle}>
                {props.distance}
                10 KM de distância
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.subtitle}>R$ {props.price} p/hora</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Candidatos</Text>
        <View style={styles.content}>
          {MOCK.map((item) => (
            <Person
              key={item.id}
              img={item.img}
              name={item.name}
              distance={item.distance}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
    height: "100%",
    display: "flex",
    gap: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingBottom: 25,
    backgroundColor: "#F0F0F0",
    flexGrow: 1,
    overflow: "scroll",
  },
  imageContainer: {
    width: "100%",
    borderRadius: 10
  },
  info: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6
  },
  otherInfos: {
   display: 'flex',
   gap: 10
  },
  title: {
    display: "flex",
    flexDirection: "row"
  },
  distance: {
    display: "flex",
    flexDirection: "row",
  },
  subtitle: {
    color:"#595959",
    fontFamily: "DMSans_500Medium"
  },
  titleText: {
    fontFamily: "DMSans_700Bold",
    fontSize: 17,
    paddingLeft: 5
  },
  content: {
    width: "100%"
  },
  edit: {
    display: "flex",
    marginTop: "8%",
    display: "flex",
    left: "46%",
  }
});

export default AdmService;
