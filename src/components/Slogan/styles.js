import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: -30,
	},
	title: {
		fontSize: 35,
		fontFamily: "DMSans_700Bold",
		fontWeight: "bold",
		color: "white",
		textShadowColor: "rgba(0, 0, 0, 0.65)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	subtitle: {
		width: "80%",
		paddingTop: 25,
		fontFamily: "DMSans_400Regular",
		color: "white",
		fontSize: 16,
		textAlign: "center",
	},
});

export default styles;
