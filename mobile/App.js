import React from 'react'
import AppLoading from 'expo-app-loading'

// Fonts externas

import { useFonts } from 'expo-font';
/*import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu'*/

// Routes
import Routes from './src/containers'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Ubuntu_300Light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu_400Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu_500Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu_700Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'ChakraPetch_700Bold': require('./assets/fonts/ChakraPetch-Bold.ttf'),
    'OpenSans_300Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans_400Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans_600SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans_700Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans_800ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    'Poppins_100Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins_200ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins_300Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins_400Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins_500Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins_600SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins_700Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins_800ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins_900Black': require('./assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <Routes />
  }
}
