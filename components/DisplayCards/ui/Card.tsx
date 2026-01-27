import { WayToGoTheme } from "@/theme-rn";
import {
  ArrowUpFromDot,
  MapPin,
  MessageCircle,
  Shield,
} from "lucide-react-native";
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
      <Shield color={"#0080FE"} />
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text>{stationTitle}</Text>
          <Text>{timeSince} ago</Text>
        </View>
        <Text>{description}</Text>
        <View style={[styles.flexContainer, styles.locationContainer]}>
          <MapPin />
          <Text>{stationLocation}</Text>
          <View style={[styles.flexContainer, styles.iconContainer]}>
            <View style={styles.flexContainer}>
              <ArrowUpFromDot size={18} />
              <Text>{upvoteAmount}</Text>
            </View>
            <View style={styles.flexContainer}>
              <MessageCircle size={18} />
              <Text>{commentsAmount}</Text>
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
    margin: 16,
    borderRadius: 10,
    borderLeftColor: "blue",
    borderLeftWidth: 5,
    height: 110,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  mainContainer: {
    height: "auto",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
