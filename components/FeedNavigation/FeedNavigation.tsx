import DATA from "@/data/data.json";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Feed } from "./ui/Feed";

const windowWidth = Dimensions.get("window").width;

export default function FeedNavigation() {
  return (
    <View style={styles.container}>
      {/* List of options to display in the feed */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Feed item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
});
