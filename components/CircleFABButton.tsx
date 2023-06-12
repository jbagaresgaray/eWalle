import { View, Text } from "react-native";
import React from "react";
import { Button, Colors } from "react-native-ui-lib";

import AddSVG from "../assets/svg/add.svg";
import { theme } from "../constants/theme";

const CircleFABButton = (props) => {
  return (
    <Button
      backgroundColor={theme.Colors.warning}
      color={theme.Colors.dark}
      borderRadius={48}
      style={{ height: 48, width: 48 }}
      iconSource={AddSVG}
      round
      {...props}
    />
  );
};

export default CircleFABButton;
