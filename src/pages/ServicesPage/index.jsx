import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import Obra from "../../assets/obra.jpg";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Categories from "./categories";
import { MaterialIcons } from "@expo/vector-icons";

function ServicePage() {
  return (
    <ScrollView>
      <View style={style.container}>
        {/* SECTION TITLE + IMAGE */}
        <View style={style.section_1}>
          <View style={style.flexTitle}>
            <MaterialIcons name="wallet-travel" size={24} color="#f0843d" />
            <Text style={style.titleService}>Pedreiro experiente</Text>
          </View>
          <Image source={Obra} alt="Image work" style={style.image} />
          <View style={style.wrapper} />
          {/* FLEX */}
          <View style={style.flex}>
            <Entypo name="location-pin" size={24} color="#f0843d" />
            <Text style={style.text}>10 KM de distancia</Text>
          </View>
        </View>

        <View style={style.containerDescription}>
          <View style={style.flex}>
            <FontAwesome5 name="cash-register" size={24} color="#f0843d" />
            <Text style={style.subTitle}>Remuneração: </Text>
          </View>
          <View style={style.wrapper} />
          <Text style={style.text}>R$ 100,00 por hora</Text>
        </View>

        <View style={style.containerDescription}>
          <View style={style.flex}>
            <AntDesign name="clockcircle" size={24} color="#f0843d" />
            <Text style={style.subTitle}>Tempo de servico: </Text>
          </View>
          <View style={style.wrapper} />
          <Text style={style.text}>4 horas por 3 dias</Text>
        </View>

        <Categories />

        <View style={style.containerDescription}>
          <Text style={style.description}>
            Preciso de pedreiro experiente para levantar obra, pago adiantado,
            de seguda a sexta, de 6h as 16h.
          </Text>
        </View>

        <Text style={style.button}>Aplicar a vaga</Text>
      </View>
    </ScrollView>
  );
}

export const style = StyleSheet.create({
  // SECTION 1
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

    backgroundColor: "#d8d8d8",
    flexGrow: 1,
    overflow: "scroll",
  },
  flexTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  section_1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    width: "80%",
  },

  containerDescription: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    width: "80%",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    // alignItems: "center",
  },
  titleService: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#f0843d",
    marginBottom: 10,
    marginTop: 15,
  },
  image: {
    width: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  wrapper: {
    width: "70%",
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3a3a3a",
    marginTop: 6,
  },
  text: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 13,
  },
  categorie: {
    width: "80%",
    gap: 50,
    display: "flex",
    flexDirection: "row",
  },
  description: {
    fontSize: 14,
    padding: 10,
  },
  button: {
    padding: 10,
    width: "80%",
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#f0843d",
    fontWeight: "700",
    color: "#fff",
  },
});

export default ServicePage;
