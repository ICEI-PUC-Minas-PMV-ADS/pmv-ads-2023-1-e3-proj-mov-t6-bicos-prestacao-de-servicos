import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={style.categorie}>
      <View style={style.containerCategory}>
        <View style={style.flex}>
          <AntDesign name="tags" size={24} color="#FF6601" />
          <Text style={style.subTitle}>Categoria</Text>
        </View>
        <Text style={style.text}>Reformas</Text>
        <Image />
      </View>

      <View style={style.containerCategory}>
        <Text style={style.subTitle}>Contratante</Text>
        <Image />
        <Text style={style.text}>Fred Versalhes</Text>
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  containerCategory: {
    display: "flex",
    alignItems: "center", // centraliza o conteúdo verticalmente
    alignContent: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "48%",
    height: 100,
    borderRadius: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    alignItems: "center", // centraliza o conteúdo verticalmente
  },
  wrapper: {
    width: "70%",
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    fontWeight: "700",
    color: "#3a3a3a",
    marginTop: 6,
  },
  text: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    color: "#666666",
    marginBottom: 13,
  },
  categorie: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    display: "flex",
    textAlign: "center",
  },
});

export default Categories;
