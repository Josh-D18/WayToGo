import { Image } from "expo-image";
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
    <View style={styles.container}>
      {/* <Shield color={"#0080FE"} size={10} /> */}
      <View>
        <View>
          <Text>{stationTitle}</Text>
          <Text>{timeSince} ago</Text>
        </View>
        <Text>{description}</Text>
        <View>
          <Image source={"/"} />
          <Text>{stationLocation}</Text>
          <View>
            <View>
              <Image source={"/"} />
              <Text>{upvoteAmount}</Text>
            </View>
            <View>
              <Image source={"/"} />
              <Text>{commentsAmount}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
