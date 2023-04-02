import React, {useState, useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';
import Home from './src/pages/Home'
import PerfilChoose from './src/pages/PerfilChoose'
import AppLoading from "expo-app-loading";

import useFonts from "./src/hooks/useFonts";



const App = () => {

    const [IsReady, SetIsReady] = useState(false);
      
    const LoadFontsAndRestoreToken = async () => {
        await useFonts();
    };
      
        if (!IsReady) {
          return (
            <AppLoading
              startAsync={LoadFontsAndRestoreToken}
              onFinish={() => SetIsReady(true)}
              onError={() => {}}
            />
          );
        }
      

    return (
        
        <PerfilChoose />
        
        //<Home />
    );
}

export default App;