import { WayToGoTheme } from "@/theme-rn";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface FeedProps {
  item: { title: string; active: boolean };
  onPress: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Feed = (props: FeedProps) => {
  const { item } = props;
  return (
    <View style={styles.contentContainer}>
      <Text style={[styles.itemText, item.active && styles.activeText]}>
        <Text>{item.title}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    width: 90,
    height: "auto",
    fontWeight: 500,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    textAlign: "center",
    borderWidth: 1,
    borderColor: WayToGoTheme.light.colors.border,
    borderStyle: "solid",
    paddingVertical: 10,
    color: WayToGoTheme.light.colors.pillInactiveText,
    boxShadow: "0px 0.5px 0px rgba(0, 0, 0, 0.1)",
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
