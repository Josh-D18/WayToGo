import { WayToGoTheme } from "@/theme-rn";
import React from "react";
import { StyleSheet, View } from "react-native";

interface TabContainerProps {
  children: React.ReactNode;
}

export function TabContainer({ children }: TabContainerProps) {
  return <View style={styles.tabContentContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  tabContentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 27,
    width: "100%",
    alignSelf: "stretch",
    backgroundColor: WayToGoTheme.light.colors.card,
    borderBottomWidth: 1,
  },
});
