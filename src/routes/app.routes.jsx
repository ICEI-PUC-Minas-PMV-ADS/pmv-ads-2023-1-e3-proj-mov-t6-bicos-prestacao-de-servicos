import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import PerfilChoose from "../pages/PerfilChoose";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator>
			<Screen name="perfilChoose" component={PerfilChoose} />
			<Screen name="login" component={Login} />
		</Navigator>
	);
}
