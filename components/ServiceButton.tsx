import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, Text } from "react-native-ui-lib";
import { theme } from "../constants/theme";

const ServiceButton = ({ label, image }) => {
  return (
    <TouchableOpacity style={styles.MainContainer} activeOpacity={0.8}>
      <View style={styles.Container}>{image}</View>
      <Text text90M medium marginT-6 center>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceButton;

const styles = StyleSheet.create({
  MainContainer: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    borderRadius: 12,
    backgroundColor: theme.Colors.background,

    width: 60,
    height: 60,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
