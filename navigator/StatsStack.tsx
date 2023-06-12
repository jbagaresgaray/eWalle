import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StatsScreen from "../screens/Stats";
import DrawerView from "../components/DrawerView";
import { theme } from "../constants/theme";
import { StyleSheet } from "react-native";
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

const StatsStack = () => {
  return (
    <DrawerView style={styles.stack}>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
    </DrawerView>
  );
};

export default StatsStack;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    backgroundColor: theme.Colors.background,
  },
});
