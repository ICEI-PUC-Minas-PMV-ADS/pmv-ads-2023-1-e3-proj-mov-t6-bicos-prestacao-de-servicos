import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import PerfilChoose from "../pages/PerfilChoose";
import SignUp from "../pages/SignUp";
// import { ServicePage } from "../pages/servicesPage";

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
			<Screen name="SignUp" component={SignUp} />
			{/* <Screen name="ServicesPage" component={ServicePage} /> */}
		</Navigator>
	);
}
