import DATA from "@/data/data.json";
import { WayToGoTheme } from "@/theme-rn";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function FeedNavigation() {
  return (
    <View style={styles.container}>
      {/* List of options to display in the feed */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={styles.contentContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: WayToGoTheme.spacing.xl,
    width: windowWidth - 4,
  },
  itemText: {
    borderColor: "gray",
    width: 100,
    height: 55,
    marginRight: 10,
    borderRadius: 100,
    padding: 15,
    backgroundColor: "#ffff",
    textAlign: "center",
    borderWidth: 1,
    borderStartColor: WayToGoTheme.light.colors.muted,
  },
  contentContainer: {
    display: "flex",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
