import { WayToGoTheme } from "@/theme-rn";
import { StyleSheet, Text, View } from "react-native";

interface FeedProps {
  item: { title: string };
  isActive?: boolean;
}

export const Feed = (props: FeedProps) => {
  const { item, isActive } = props;
  return (
    <View style={styles.contentContainer}>
      <Text style={[styles.itemText, isActive && styles.activeText]}>
        {item.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    width: 110,
    height: 50,
    fontWeight: 500,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    textAlign: "center",
    borderWidth: 1,
    borderColor: WayToGoTheme.light.colors.border,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    color: WayToGoTheme.light.colors.pillInactiveText,
  },

  activeText: {
    color: WayToGoTheme.light.colors.card,
    backgroundColor: WayToGoTheme.light.colors.primary,
  },

  contentContainer: {
    display: "flex",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
