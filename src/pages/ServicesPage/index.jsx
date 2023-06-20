import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert, Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function ServicePage() {
  const route = useRoute();
  const { setData } = route.params;
  const navigation = useNavigation();

  const handleToHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  const showAlert = () =>
  Alert.alert(
    'Inscrição confirmada',
    'Aplicado para a vaga selecionada com sucesso!',
    [
      {
        text: 'Ok',
        onPress: () => handleToHome(),
      },
    ]
  );


  return (
    <ScrollView>
      <View style={styles.container}>
        {/* SECTION TITLE + IMAGE */}
        <View style={styles.section_1}>
          <View style={styles.flexTitle}>
            <MaterialIcons name="wallet-travel" size={24} color="#FF6601" />
            <Text style={styles.titleService}>{setData.title}</Text>
          </View>
          <Image
            source={{uri: setData.imageUrl}}
            alt="Image work"
            style={styles.image}
          />
          <View style={styles.wrapper} />
          {/* FLEX */}
          <View style={styles.flex}>
            <Entypo name="location-pin" size={24} color="#FF6601" />
            <Text style={styles.text}>{setData.kmDistance} KM de distancia</Text>
          </View>
        </View>

        <View style={styles.containerDescription}>
          <View style={styles.flex}>
            <FontAwesome5 name="cash-register" size={24} color="#FF6601" />
            <Text style={styles.subTitle}>Remuneração: </Text>
          </View>
          <View style={styles.wrapper} />
          <Text style={styles.text}>R$ {setData.price} por hora</Text>
        </View>

        <View style={styles.containerDescription}>
          <View style={styles.flex}>
            <AntDesign name="clockcircle" size={24} color="#FF6601" />
            <Text style={styles.subTitle}>Tempo de servico: </Text>
          </View>
          <View style={styles.wrapper} />
          <Text style={styles.text}>8 horas por dia</Text>
        </View>

        <View style={styles.categorie}>
          <View style={styles.containerCategory}>
            <View style={styles.flex}>
              <AntDesign name="tags" size={24} color="#FF6601" />
              <Text style={styles.subTitle}>Categoria</Text>
            </View>
            <Text style={styles.text}>{setData.categoria}</Text>
            <Image />
          </View>

          <View style={styles.containerCategory}>
            <Text style={styles.subTitle}>Contratante</Text>
            <Text style={styles.text}>Fred Versalhes</Text>
          </View>
        </View>

        <View style={styles.containerDescription}>
          <Text style={styles.description}>
            {setData.apresentation}
          </Text>
        </View>

        <Text
          onPress={showAlert}
          style={styles.button}
        >
          Aplicar a vaga
        </Text>
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
    width: "90%",
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
    width: "90%",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  titleService: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#FF6601",
    marginBottom: 10,
    marginTop: 15,
    fontFamily: "DMSans_700Bold",
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20
  },
  wrapper: {
    width: "80%",
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3f3f3f",
    fontFamily: "DMSans_400Regular",
    marginTop: 6,
  },
  text: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 13,
    fontFamily: "DMSans_400Regular",
  },
  categorie: {
    width: "90%",
    gap: 10,
    display: "flex",
    flexDirection: "row",
  },
  description: {
    fontSize: 14,
    padding: 10,
    color: "#3f3f3f",
    fontFamily: "DMSans_400Regular",
  },
  button: {
    padding: 10,
    width: "90%",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "DMSans_400Regular",
    backgroundColor: "#FF6601",
    fontWeight: "700",
    color: "#fff",
  },
  containerCategory: {
    display: "flex",
    alignItems: "center",
    alignContent: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "48%",
    height: 100,
    borderRadius: 10,
  },
});

export default ServicePage;
