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
    marginVertical: 27,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: WayToGoTheme.light.colors.card,
    paddingVertical: 10,
  },
});
