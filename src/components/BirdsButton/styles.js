import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "35%",
	},
	button: {
		borderRadius: 10,
		backgroundColor: "#FE7216",
	},
	textButton: {
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: "center",
		fontSize: 15,
		fontFamily: "DMSans_700Bold",
		color: "white",
	},
	birdsArea: {
		marginBottom: -8,
		display: "flex",
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-evenly",
		alignItems: "flex-end",
	},
});

export default styles;
