import { StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { theme } from "../constants/theme";
import { useDrawerProgress } from "@react-navigation/drawer";
import useStatusBarHeight from "../hooks/useStatusBarHeight";

const DrawerView = ({ children, style }) => {
  const top = useStatusBarHeight();
  const progress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 30]);
    const rotateX = interpolate(progress.value, [0, 1], [0, -15]);
    return {
      //   transform: [{ scale, rotate: `${rotateX}deg` }],
      borderRadius,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.stack,
        style,
        viewStyles,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default DrawerView;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: "hidden",
  },
});
