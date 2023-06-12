import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelpScreen from "../screens/Help";
import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import DrawerView from "../components/DrawerView";
import DrawerTitleBar from "../components/DrawerTitleBar";
import DrawerIcon from "../components/DrawerIcon";

const Stack = createNativeStackNavigator();

const navigationOptions = {
  gestureEnabled: false,
  headerStyle: {
    backgroundColor: theme.Colors.white,
    shadowColor: "transparent",
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerLeft: () => <DrawerTitleBar />,
  headerTitle: "",
  headerRight: () => <DrawerIcon />,
  headerLeftContainerStyle: {
    paddingLeft: 25,
  },
  headerRightContainerStyle: {
    paddingRight: 25,
  },
};

const HelpStack = () => {
  return (
    <DrawerView style={styles.stack}>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </DrawerView>
  );
};

export default HelpStack;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    backgroundColor: theme.Colors.background,
  },
});
