import { WayToGoTheme } from "@/theme-rn";
import {
  ArrowUpFromDot,
  MapPin,
  MessageCircle,
  Shield,
} from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  stationTitle: string;
  timeSince: string;
  description: string;
  stationLocation: string;
  upvoteAmount: number;
  commentsAmount: number;
  type: string;
}

export const Card = (props: CardProps) => {
  const {
    stationTitle,
    timeSince,
    description,
    stationLocation,
    upvoteAmount,
    commentsAmount,
    type,
  } = props;

  
  return (
    <View style={[styles.flexContainer, styles.container]}>
      <View style={styles.iconBackground}>
        <Shield color={"#0080FE"} style={styles.icon} size={25} />
      </View>
      <View style={styles.mainContainer}>
        <View style={[styles.titleContainer, styles.flexContainer]}>
          <Text style={styles.title}>{stationTitle}</Text>
          <Text style={styles.timeSince}>{timeSince} ago</Text>
        </View>
        <Text style={styles.description} ellipsizeMode="tail" numberOfLines={2}>
          {description}
        </Text>
        <View style={[styles.flexContainer, styles.locationContainer]}>
          <View style={[styles.flexContainer, styles.stationPinContainer]}>
            <MapPin size={14} color={"gray"} />
            <Text style={styles.stationLocationText}>{stationLocation}</Text>
          </View>
          <View style={[styles.flexContainer, styles.iconContainer]}>
            <View style={[styles.flexContainer, styles.iconBottomContainer]}>
              <ArrowUpFromDot size={15} style={[styles.bottomIcon]} />
              <Text style={styles.bottomText}>{upvoteAmount}</Text>
            </View>
            <View style={[styles.flexContainer, styles.iconBottomContainer]}>
              <MessageCircle size={15} style={[styles.bottomIcon]} />
              <Text style={styles.bottomText}>{commentsAmount}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    backgroundColor: WayToGoTheme.light.colors.primaryForeground,
    margin: 25,
    borderRadius: 10,
    borderLeftColor: "blue",
    borderLeftWidth: 5,
    height: 130,
    boxShadow: "2px 3px 2px rgba(0, 0, 0, 0.1)",
    width: 300,
    padding: 4,
  },
  titleContainer: {
    justifyContent: "space-between",
    maxWidth: 210,
    width: "100%",
    marginBottom: 4,
  },
  mainContainer: {
    height: "auto",
    margin: 12,
  },
  locationContainer: {
    marginTop: 5,
    justifyContent: "space-between",
  },
  iconContainer: {
    justifyContent: "space-around",
  },
  icon: {
    margin: 10,
  },
  iconBackground: {
    backgroundColor: WayToGoTheme.light.colors.fare.bg,
    borderRadius: WayToGoTheme.borderRadius.xl,
    width: 45,
    height: 45,
    marginLeft: 10,
    marginTop: 10,
  },
  description: {
    width: 200,
    marginRight: 6,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 600,
  },
  stationLocationText: {
    color: "gray",
    marginLeft: 3,
    fontSize: 13,
    fontWeight: 500,
  },
  stationPinContainer: {
    alignItems: "center",
  },
  iconBottomContainer: {
    marginRight: 13,
    alignItems: "center",
  },
  bottomIcon: {
    marginRight: 4,
    color: "gray",
  },
  timeSince: {
    fontSize: 13,
    color: "gray",
    fontWeight: 500,
  },
  title: {
    fontWeight: 600,
    color: "gray",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 13,
  },
  bottomText: {
    color: "gray",
    fontWeight: 600,
  },
});
