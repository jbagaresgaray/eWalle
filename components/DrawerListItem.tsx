import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { theme } from "../constants/theme";

const DrawerListItem = (props) => {
  return (
    <DrawerItem
      label={({ focused }) =>
        focused ? (
          <Text style={styles.fontFocused}>{props.label}</Text>
        ) : (
          <Text style={styles.fontNormal}>{props.label}</Text>
        )
      }
      {...props}
    />
  );
};

export default DrawerListItem;

const styles = StyleSheet.create({
  fontFocused: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "AvenirNext-Bold",
    color: theme.Colors.dark,
  },
  fontNormal: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "AvenirNext-Regular",
    color: theme.Colors.dark,
  },
});
