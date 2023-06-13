import { StyleSheet, View } from "react-native";
import React from "react";
import { Assets, Image, Text } from "react-native-ui-lib";
import { theme } from "../constants/theme";

const UserDrawer = () => {
  return (
    <View style={styles.UserDrawer}>
      <View style={styles.Avatar}>
        <Image source={Assets.users.user} />
      </View>
      <View style={styles.NameContainer}>
        <Text text80B dark>
          Carol Black
        </Text>
        <Text text90 medium>
          Seattle, Washington
        </Text>
      </View>
    </View>
  );
};

export default UserDrawer;

const styles = StyleSheet.create({
  UserDrawer: {
    backgroundColor: theme.Colors.white,
    paddingVertical: 30,
    paddingHorizontal: 30,

    borderBottomRightRadius: 54,

    flexDirection: "row",
    alignItems: "center",
    height: 110
  },
  Avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: theme.Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  NameContainer: {
    marginLeft: 10,
  },
});
