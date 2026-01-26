import { WayToGoTheme } from "@/theme-rn";
import { StyleSheet, Text, View } from "react-native";

interface FeedProps {
  item: { title: string };
}

export const Feed = (props: FeedProps) => {
  const { item } = props;

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    width: 100,
    height: 40,
    fontWeight: 500,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: "#ffff",
    textAlign: "center",
    borderWidth: 1,
    borderColor: WayToGoTheme.light.colors.border,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 9,
    color: WayToGoTheme.light.colors.pillInactiveText,
  },
  contentContainer: {
    display: "flex",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
