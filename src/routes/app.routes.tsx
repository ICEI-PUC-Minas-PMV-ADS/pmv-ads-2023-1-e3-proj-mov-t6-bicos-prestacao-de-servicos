import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/signCard";
import Login from "../pages/Login";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator>
			<Screen name="home" component={Home} />
			<Screen name="Login" component={Login} />
		</Navigator>
	);
}
