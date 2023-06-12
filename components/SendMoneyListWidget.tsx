import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SEND_MONEY } from "../constants";
import CircleFABButton from "./CircleFABButton";
import { Colors, Image, Text } from "react-native-ui-lib";
import { theme } from "../constants/theme";

const SendMoneyListWidget = () => {
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.UserContainer} activeOpacity={0.8}>
        <View style={styles.AvatarContainer}>
          <Image source={item.image} />
        </View>
        <Text text90 primary>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.ListHeaderComponent}>
        <CircleFABButton />
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={SEND_MONEY}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default SendMoneyListWidget;

const styles = StyleSheet.create({
  ListHeaderComponent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 20,
  },
  UserContainer: {
    borderRadius: 12,
    backgroundColor: theme.Colors.background,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
  },
  AvatarContainer: {
    width: 46,
    height: 46,
    borderRadius: 46,
    backgroundColor: theme.Colors.white,
    borderWidth: 2,
    borderColor: theme.Colors.primaryBorder,
    marginBottom: 15,
  },
});
