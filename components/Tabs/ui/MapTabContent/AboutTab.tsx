import { ChevronRight, CircleAlert } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text } from "react-native";

export function AboutTab() {
  return (
    <React.Fragment>
      <CircleAlert style={styles.icon} />
      <Text style={styles.optionsText}>About WayToGo</Text>
      <ChevronRight size={18} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  optionsText: {
    fontSize: 15,
    fontWeight: "600",
    width: "auto",
  },
});
