import { View, StyleSheet } from "react-native";
import React from "react";
import { Button, Colors, Text } from "react-native-ui-lib";
import CircleFABButton from "./CircleFABButton";
import { theme } from "../constants/theme";

const AccountOverViewWidget = () => {
  return (
    <View style={styles.Container}>
      <View>
        <Text h2B dark marginB-8>
          20,600
        </Text>
        <Text text90 primary>
          Current Balance
        </Text>
      </View>
      <CircleFABButton />
    </View>
  );
};

export default AccountOverViewWidget;

const styles = StyleSheet.create({
  Container: {
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 25,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: theme.Colors.background,
  },
});
