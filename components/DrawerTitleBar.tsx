import { View, StyleSheet } from "react-native";
import React from "react";

import LogoSVG from "../assets/svg/logo.svg";
import { Text } from "react-native-ui-lib";

const DrawerTitleBar = () => {
  return (
    <View style={styles.Container}>
      <LogoSVG />
      <Text h1 dark marginL-10>
        eWalle
      </Text>
    </View>
  );
};

export default DrawerTitleBar;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
