import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

import ToHireBirds from "../../assets/toHireBirds";
import WorkBird from "../../assets/workBird";

const BirdsButton = (props) => {
	return (
		<View style={styles.container}>
			{props.contractButton ? (
				<>
					<View style={styles.birdsArea}>
						<ToHireBirds />
					</View>
				</>
			) : (
				<>
					<View style={styles.birdsArea}>
						<WorkBird />
					</View>
				</>
			)}

			<TouchableOpacity style={styles.button} pressOn={props.pressOn}>
				<Text style={styles.textButton}>{props.title}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BirdsButton;
