import * as Font from "expo-font"

import {
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
} from '@expo-google-fonts/dm-sans'

import {
    Roboto_300Light,
    Roboto_100Thin
} from '@expo-google-fonts/roboto'


const useFonts = async () => {
    await Font.loadAsync({
        DMSans_400Regular,
        DMSans_500Medium,
        DMSans_700Bold,
        Roboto_300Light,
        Roboto_100Thin
    })
}

export default useFonts;
