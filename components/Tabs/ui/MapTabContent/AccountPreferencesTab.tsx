import { ChevronRight, User2 } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text } from "react-native";

export function AccountPreferencesTab() {
  return (
    <React.Fragment>
      <User2 style={styles.icon} />
      <Text style={styles.optionsText}>Account Preferences</Text>
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
