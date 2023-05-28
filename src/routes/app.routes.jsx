import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HireLogin from "../pages/HireLogin";
import HireSignUp from "../pages/HireSignUp";
import Home from "../pages/Home";
import PerfilChoose from "../pages/PerfilChoose";
import PerfilPage from "../pages/PerfilPage";
import ServicesExplorer from "../pages/ServicesExplorer";
import SkillExplorer from "../pages/ServicesExplorer/SkillExplorer";
import ServicePage from "../pages/ServicesPage";
import WorkLogin from "../pages/WorkLogin";
import WorkSignUp from "../pages/WorkSignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="PerfilChoose" component={PerfilChoose} />
			<Screen name="WorkLogin" component={WorkLogin} />
			<Screen name="WorkSignUp" component={WorkSignUp} />
			<Screen name="HireLogin" component={HireLogin} />
			<Screen name="HireSignUp" component={HireSignUp} />
			<Screen name="Home" component={Home} />
			<Screen name="ServicesPage" component={ServicePage} />
			<Screen name="ServicesExplorer" component={ServicesExplorer} />
			<Screen name="SkillExplorer" component={SkillExplorer} />
			<Screen name="PerfilPage" component={PerfilPage} />
		</Navigator>
	);
}
