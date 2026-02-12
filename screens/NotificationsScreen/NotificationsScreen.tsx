import { WayToGoTheme } from "@/theme-rn";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.title}>Notifications</Text>
        <Text>MARK ALL READ</Text>
      </View>
      <View style={[styles.contentContainer, styles.recent]}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>Fare Inspector Alert</Text>
          <Text style={styles.timeText}>2m ago</Text>
        </View>
        <Text style={styles.description}>
          Inspectors reported at Union Station Platform 3.
        </Text>
      </View>
      <View style={[styles.contentContainer]}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>Delay Update</Text>
          <Text style={styles.timeText}>15m ago</Text>
        </View>
        <Text style={styles.description}>
          Lakeshore West is now running 10 mins behind.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    width: "100%",
  },
  mainTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 30,
  },
  timeText: {
    fontSize: 13,
    fontWeight: 500,
  },
  contentContainer: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 25,
    borderColor: WayToGoTheme.light.colors.muted,
    alignItems: "center",
    backgroundColor: WayToGoTheme.light.colors.card,
    boxShadow: "2px 3px 2px rgba(0, 0, 0, 0.1)",
    marginBottom: 20,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContent: {
    fontWeight: 800,
    fontSize: 17,
    marginBottom: 13,
  },
  description: {
    width: 250,
    fontWeight: 400,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  recent: {
    backgroundColor: WayToGoTheme.light.colors.primaryLight,
  },
});
