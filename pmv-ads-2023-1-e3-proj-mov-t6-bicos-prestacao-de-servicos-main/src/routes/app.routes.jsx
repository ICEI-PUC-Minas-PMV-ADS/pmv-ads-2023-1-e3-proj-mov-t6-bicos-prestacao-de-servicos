import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import PerfilChoose from "../pages/PerfilChoose";
import Sign from "../pages/Sign";
import Home from "../pages/Home";
import ServicePage from "../pages/ServicesPage";
import PerfilPage from "../pages/PerfilPage";

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
			<Screen name="Sign" component={Sign} />
			<Screen name="Home" component={Home} />
			<Screen name="ServicesPage" component={ServicePage} />
			<Screen name="PerfilPage" component={PerfilPage} />
		</Navigator>
	);
}