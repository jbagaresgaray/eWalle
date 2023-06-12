import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Assets, Colors, Typography } from "react-native-ui-lib";
import { useFonts } from "expo-font";
import {
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import MainNavigations from "./navigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "AvenirNext-Bold": require("./assets/fonts/AvenirNextLTPro-Bold.otf"),
    "AvenirNext-Italic": require("./assets/fonts/AvenirNextLTPro-It.otf"),
    "AvenirNext-Regular": require("./assets/fonts/AvenirNextLTPro-Regular.otf"),
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  Colors.loadColors({
    primary: "#3A4276",
    warning: "#FFAC30",
    dark: "#1B1D28",
    medium: "#7B7F9E",
    background: "#F1F3F6",
    white: "#ffffff",
  });

  Assets.loadAssetsGroup("icons", {
    arrowRight: require("./assets/svg/arrow-right.svg"),
  });

  Typography.loadTypographies({
    h1: {
      fontSize: 28,
      fontWeight: "500",
      lineHeight: 32,
      fontFamily: "Ubuntu_500Medium",
    },
    h2: {
      fontSize: 24,
      lineHeight: 37,
      fontFamily: "AvenirNext-Regular",
    },
    text70: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "AvenirNext-Regular",
    },
    text80: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: "AvenirNext-Regular",
    },
    text90: {
      fontSize: 12,
      lineHeight: 18,
      fontFamily: "AvenirNext-Regular",
    },
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainNavigations />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
