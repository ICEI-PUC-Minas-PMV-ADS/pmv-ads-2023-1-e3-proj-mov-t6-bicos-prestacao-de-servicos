import React from "react";
import Home from './src/pages/Home'
import PerfilChoose from './src/pages/PerfilChoose'

import {
    useFonts,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
} from '@expo-google-fonts/dm-sans'

import {
    Roboto_300Light,
    Roboto_100Thin
} from '@expo-google-fonts/roboto'

import AppLoading from "expo-app-loading";

const App = () => {

    const { fontsLoaded } = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        DMSans_400Regular,
        DMSans_500Medium,
        DMSans_700Bold
    })

    if(!fontsLoaded) {
        <AppLoading />
    }

    return (
        
        <PerfilChoose />
        
        //<Home />
    );
}

export default App;