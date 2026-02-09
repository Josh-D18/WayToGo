import { Bell, ChevronRight } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function NotificationTab() {
  return (
    <View>
      <Bell style={styles.icon} />
      <Text style={styles.optionsText}>Notifications</Text>
      <ChevronRight size={18} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  optionsText: {
    flex: 1,
    fontSize: 16,
  },
});
