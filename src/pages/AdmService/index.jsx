import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import img from "../../assets/image91.png";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
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
  const route = useRoute();
  console.log(route);
  //   console.log(setData);
  //   const navigation = useNavigation();

  const handleToHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={img} style={styles.imageContainer} />

        <View style={styles.info}>
          <View style={styles.otherInfos}>
            <View style={styles.title}>
              <MaterialIcons name="wallet-travel" size={24} color="black" />
              <Text>{props.title}Pedreiro experiente</Text>
            </View>
            <View style={styles.distance}>
              <MaterialIcons name="location-on" size={24} color="orange" />
              <Text>
                {props.distance}
                10 KM de distancia
              </Text>
            </View>
          </View>

          <View>
            <Text>R$ {props.price} p/hora</Text>
          </View>
        </View>
        <Text>Candidatos</Text>
        <View>
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
    marginTop: 20,
  },
  info: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
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
    flexDirection: "row",
  },
  distance: {
    display: "flex",
    flexDirection: "row",
  },
});

export default AdmService;
