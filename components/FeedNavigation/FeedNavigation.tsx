import DATA from "@/data/data.json";
import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Feed } from "./ui/Feed";
const windowWidth = Dimensions.get("window").width;

export default function FeedNavigation() {
  const handleClick = () => {};
  return (
    <View style={styles.container}>
      {/* List of options to display in the feed */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Feed item={item} onPress={handleClick} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
});
