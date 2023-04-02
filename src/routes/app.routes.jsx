import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import PerfilChoose from "../pages/PerfilChoose";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="PerfilChoose" component={PerfilChoose} />
			<Screen name="Login" component={Login} />
		</Navigator>
	);
}
