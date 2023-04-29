import { Image, StyleSheet, Text, View } from "react-native";
import Obra from "../../assets/obra.jpg"

export function ServicePage() {
  return (
    <View style={style.container}>
      <View style={style.section_1}>
        <Text style={style.titleService}>Pedreiro experiente</Text>
        <Image source={Obra} alt="Image work"/>
        <Text>10 KM de distancia</Text>
      </View>

      <View>
        <Text>Remuneração: </Text>
        <Text>R$ 100,00 por hora</Text>
      </View>

      <View>
        <Text>Tempo de servico: </Text>
        <Text>4 horas por 3 dias</Text>
      </View>

      <View>
        <View>
          <Text>Categoria</Text>
          <Image />
        </View>
        <View>
          <Text>Contratante</Text>
          <Image />
          <Text>Fred Versalhes</Text>
        </View>
      </View>

      <View>
        <Text>Descrição do trabalho</Text>
      </View>
      <Text>Aplicar a vaga</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: "100%",
    display: 'flex',
    gap: 20,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    
    paddingTop: 20,
    paddingBottom: 25,

    backgroundColor: "#d8d8d8"
  },

  section_1: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: 30,
    borderRadius: 10,
    width: "80%"
  },

  titleService: {
    textAlign: "center",
    fontSize: 20,
    fontWeight:"700",
    color: "#f0843d",
    marginBottom: 10
  }
})