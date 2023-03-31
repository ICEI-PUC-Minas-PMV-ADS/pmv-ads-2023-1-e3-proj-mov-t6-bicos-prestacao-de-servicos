import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

import BirdToWork1 from "../../assets/birdToWork1";
import BirdToWork2 from "../../assets/birdToWork2";
import BranchToWork from "../../assets/branchToWork";

import BirdToContract1 from "../../assets/birdToContract1";
import BirdToContract2 from "../../assets/birdToContract2";
import BirdToContract3 from "../../assets/birdToContract3";

const BirdsButton = (props) => {
	return (
		<TouchableOpacity style={styles.container}>
			{props.contractButton ? (
				<>
					<View style={styles.birdsArea}>
						<BirdToContract1 />
						<BirdToContract2 />
						<BirdToContract3 />
					</View>
				</>
			) : (
				<>
					<View style={styles.birdsArea}>
						<BirdToWork1 />
						<BranchToWork style={styles.branchToWork} />
						<BirdToWork2 />
					</View>
				</>
			)}

			<View style={styles.button}>
				<Text style={styles.textButton}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default BirdsButton;
