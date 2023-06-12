import { StyleSheet, View } from "react-native";
import * as React from "react";
import { Text } from "react-native-ui-lib";

import CloudSVG from "../assets/svg/cloud.svg";

const DateTimeTemperature = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.TimeTempContainer}>
        <Text h1 dark marginR-20>
          06:20 PM
        </Text>
        <View style={styles.TemperatureContainer}>
          <CloudSVG />
          <Text text80B dark marginL-8>
            34° C
          </Text>
        </View>
      </View>
      <Text text80M marginT-8 medium>
        Nov.10.2020 | Wednesday
      </Text>
    </View>
  );
};

export default DateTimeTemperature;

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
  },
  TimeTempContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  TemperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
