import React from "react";
import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

// Fonts externas
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";

// Routes
import Routes from "./src/containers";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView
          contentContainerStyle={styles.routesContainer}
          style={styles.routes}
        >
          <Routes />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "#fff",
    marginTop: 32,
    padding: 0,
    flex: 1,
  },
  routesContainer: {
    flexGrow: 1,
  },
  routes: {
    flex: 1,
  },
});
