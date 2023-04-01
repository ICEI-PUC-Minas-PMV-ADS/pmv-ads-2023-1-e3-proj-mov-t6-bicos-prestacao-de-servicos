import {
	DMSans_400Regular,
	DMSans_500Medium,
	DMSans_700Bold,
	useFonts,
} from "@expo-google-fonts/dm-sans";

import { Roboto_100Thin, Roboto_300Light } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";

const App = () => {
	const { fontsLoaded } = useFonts({
		Roboto_100Thin,
		Roboto_300Light,
		DMSans_400Regular,
		DMSans_500Medium,
		DMSans_700Bold,
	});

	if (!fontsLoaded) {
		<AppLoading />;
	}

	return <Routes />;
};

export default App;
