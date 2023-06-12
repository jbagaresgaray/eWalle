import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import AccountOverViewWidget from "../components/AccountOverViewWidget";
import { Colors, Text } from "react-native-ui-lib";

import ScanSVG from "../assets/svg/scan.svg";
import ServicesSVG from "../assets/svg/services.svg";
import SendMoneyListWidget from "../components/SendMoneyListWidget";
import ServicesWidget from "../components/ServicesWidget";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <View style={[styles.Card, styles.CardIntro]}>
        <Text text70M primary marginB-20>
          Account Overview
        </Text>
        <AccountOverViewWidget />
      </View>
      <View style={styles.Card}>
        <View style={styles.CardHeader}>
          <Text text70M primary>
            Send Money
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <ScanSVG />
          </TouchableOpacity>
        </View>
        <SendMoneyListWidget />
      </View>
      <View style={styles.Card}>
        <View style={styles.CardHeader}>
          <Text text70M primary>
            Services
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <ServicesSVG />
          </TouchableOpacity>
        </View>
        <ServicesWidget />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
  },
  CardIntro: {
    marginTop: 50,
  },
  Card: {
    marginBottom: 40,
  },
  CardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
