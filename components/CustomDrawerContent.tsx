import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import UserDrawer from "./UserDrawer";
import DrawerListItem from "./DrawerListItem";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.drawerContentContainerStyle}
    >
      <UserDrawer />
      <DrawerItemList {...props} />
      <DrawerListItem
        label={"Logouts"}
        onPress={() => props.navigation.navigate("Onboarding")}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContentContainerStyle: {
    flex: 1,
    // backgroundColor: "red",
  },
});
