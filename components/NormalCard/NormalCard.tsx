import { WayToGoTheme } from "@/theme-rn";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface NormalCardProps {
  title: string;
  time: string;
  description: string;
  recent: boolean;
}

export function NormalCard(props: NormalCardProps) {
  const { title, time, description, recent } = props;
  return (
    <View style={[styles.contentContainer, recent && styles.recent]}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textContent}>{title}</Text>
        </View>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 13,
    fontWeight: 500,
    paddingTop: 4,
  },
  contentContainer: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 25,
    borderColor: WayToGoTheme.light.colors.muted,
    backgroundColor: WayToGoTheme.light.colors.card,
    boxShadow: "2px 3px 2px rgba(0, 0, 0, 0.1)",
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  titleContainer: {
    flex: 1,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    width: "100%",
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
  subTitle: {
    paddingTop: 10,
    color: WayToGoTheme.light.colors.success,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
  },
});
