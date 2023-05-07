import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={style.categorie}>
      <View style={style.containerCategory}>
        <View style={style.flex}>
          <AntDesign name="tags" size={24} color="#f0843d" />
          <Text style={style.subTitle}>Categoria</Text>
        </View>
        <Text style={style.text}>Reformas</Text>
        <Image />
      </View>

      <View style={style.containerCategory}>
        <Text style={style.subTitle}>Contratante</Text>
        <Image />
        <Text>Fred Versalhes</Text>
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
    height: 100,
    padding: 10,
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "flex",
    textAlign: "center",
  },
});

export default Categories;
