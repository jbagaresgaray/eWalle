import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as React from "react";

import BannerSVG from "../assets/svg/banner.svg";
import ArrowRight from "../assets/svg/arrow-right.svg";
import LogoSVG from "../assets/svg/logo.svg";
import { Button, Colors, Text, Typography } from "react-native-ui-lib";
import DateTimeTemperature from "../components/DateTimeTemperature";
import useStatusBarHeight from "../hooks/useStatusBarHeight";

const OnboardingScreen = () => {
  const top = useStatusBarHeight();
  return (
    <View style={styles.container}>
      <View style={styles.BannerContainer}>
        <BannerSVG />
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={[
          styles.MainContainer,
          {
            marginTop: top,
          },
        ]}
      >
        <DateTimeTemperature />
        <View>
          <LogoSVG />
          <Text h1 dark marginT-17>
            eWalle
          </Text>
          <Text medium text80M marginT-16>
            Open An Account For Digital {"\n"}
            E-Wallet Solutions.Instant {"\n"}
            Payouts.{" "}
          </Text>
          <Text medium text80M marginT-20>
            Join For Free.
          </Text>
        </View>
        <View style={styles.Footer}>
          <Button
            label={"Sign in"}
            backgroundColor={Colors.warning}
            color={Colors.dark}
            borderRadius={10}
            style={{ height: 50 }}
            iconSource={ArrowRight}
            labelStyle={{
              ...Typography.text70,
              fontWeight: "600",
              fontFamily: "AvenirNext-DemiBold",
              marginRight: 8,
            }}
            iconOnRight
          />
          <TouchableOpacity activeOpacity={0.8}>
            <Text text70 dark center marginT-30>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  BannerContainer: {
    position: "absolute",
  },
  MainContainer: {
    paddingHorizontal: 27,
    justifyContent: "space-between",
  },
  Footer: {
    marginBottom: 53,
  },
});
