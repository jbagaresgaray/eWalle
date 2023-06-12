import * as React from "react";

import Animated from "react-native-reanimated";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerIcon from "../components/DrawerIcon";
import DrawerTitleBar from "../components/DrawerTitleBar";

import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import AccountsStack from "./AccountsStack";
import StatsStack from "./StatsStack";
import SettingsStack from "./SettingsStack";
import HelpStack from "./HelpStack";
import TransactionStack from "./TransactionStack";
import { theme } from "../constants/theme";
import { StyleSheet } from "react-native";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        headerShadowVisible: false,
        drawerStyle: styles.drawerStyles,
        sceneContainerStyle: styles.sceneContainerStyle,
        drawerContentContainerStyle: styles.contentContainerStyle,
        drawerActiveTintColor: theme.Colors.dark,
        drawerInactiveTintColor: theme.Colors.dark,
        drawerActiveBackgroundColor: "transparent",
        headerTitle: "",
        headerShown: false,
      }}
      drawerContent={(props: any) => {
        return <CustomDrawerContent {...props} />;
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: "Home",
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name="ProfileScreen"
        options={{
          drawerLabel: "Profile",
        }}
        component={ProfileStack}
      />
      <Drawer.Screen
        name="AccountsScreen"
        options={{
          drawerLabel: "Accounts",
        }}
        component={AccountsStack}
      />
      <Drawer.Screen
        name="TransactionScreen"
        options={{
          drawerLabel: "Transactions",
        }}
        component={TransactionStack}
      />
      <Drawer.Screen
        name="StatsScreen"
        options={{
          drawerLabel: "Stats",
        }}
        component={StatsStack}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{
          drawerLabel: "Settings",
        }}
        component={SettingsStack}
      />
      <Drawer.Screen
        name="HelpScreen"
        options={{
          drawerLabel: "Help",
        }}
        component={HelpStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  sceneContainerStyle: {
    backgroundColor: theme.Colors.background,
  },
  contentContainerStyle: {
    flex: 1,
  },
  drawerStyles: {
    flex: 1,
    backgroundColor: theme.Colors.background,
    padding: 0,
    margin: 0,
    // width: 210,
  },
  drawerItemStyle: {
    borderLeftWidth: 6,
    borderColor: theme.Colors.warning,
  },
});
