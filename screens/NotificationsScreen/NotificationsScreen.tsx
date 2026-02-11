import { WayToGoTheme } from "@/theme-rn";
import { RefreshCcwIcon } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Feed</Text>
      <View style={styles.contentContainer}>
        <View style={styles.background}>
          <RefreshCcwIcon color={WayToGoTheme.light.colors.disruption.main} />
        </View>
        <Text>
          You upvoted a report a report on <Text>Lakeshore West</Text>
        </Text>
        <Text>Today, 2:45pm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 30,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  background: {},
});
