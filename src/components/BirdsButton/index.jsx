import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

import HireBirds from "../../assets/hirebirds";
import WorkBird from "../../assets/workbird";

const BirdsButton = (props) => {
	return (
		<View style={styles.container}>
			{props.contractButton ? (
				<>
					<View style={styles.birdsArea}>
						<HireBirds />
					</View>
				</>
			) : (
				<>
					<View style={styles.birdsArea}>
						<WorkBird />
					</View>
				</>
			)}

			<TouchableOpacity style={styles.button} onPress={props.onPress}>
				<Text style={styles.textButton}>{props.title}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BirdsButton;
