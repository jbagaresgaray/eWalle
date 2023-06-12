import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ServiceButton from "./ServiceButton";

import SendMoneySVG from "../assets/svg/send-money.svg";
import ReceiveMoneySVG from "../assets/svg/receive-money.svg";
import MobileSVG from "../assets/svg/mobile.svg";
import ElectricSVG from "../assets/svg/electric.svg";
import TagSVG from "../assets/svg/tag.svg";
import MovieSVG from "../assets/svg/movie.svg";
import MoreSVG from "../assets/svg/more.svg";
import FlightSVG from "../assets/svg/flight.svg";

const ServicesWidget = () => {
  return (
    <View style={styles.MainFlex}>
      <View style={styles.FlexGap}>
        <ServiceButton image={<SendMoneySVG />} label="Send Money" />
        <ServiceButton image={<ReceiveMoneySVG />} label="Receive Money" />
        <ServiceButton image={<MobileSVG />} label="Mobile Prepaid" />
        <ServiceButton image={<ElectricSVG />} label="Electricty Bill" />
      </View>
      <View style={styles.FlexGap}>
        <ServiceButton image={<TagSVG />} label="Cashback Offer" />
        <ServiceButton image={<MovieSVG />} label="Movie Tickets" />
        <ServiceButton image={<FlightSVG />} label="Flight Tickets" />
        <ServiceButton image={<MoreSVG />} label="More Options" />
      </View>
    </View>
  );
};

export default ServicesWidget;

const styles = StyleSheet.create({
  MainFlex: {
    gap: 20,
  },
  FlexGap: {
    gap: 14,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
