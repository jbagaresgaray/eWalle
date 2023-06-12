import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import DrawerIconSVG from "../assets/svg/menu.svg";
import { useNavigation } from "@react-navigation/native";

const DrawerIcon = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.toggleDrawer()}
    >
      <DrawerIconSVG />
    </TouchableOpacity>
  );
};

export default DrawerIcon;
