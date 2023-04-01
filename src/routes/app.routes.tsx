import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/signCard";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator>
			<Screen name="home" component={Home} />
			<Screen name="home" component={Home} />
		</Navigator>
	);
}
