import { Bell } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, Switch, Text } from "react-native";

export function NotificationTab() {
  const [activeSwitch, setActiveSwitch] = useState(false);
  return (
    <React.Fragment>
      <Bell style={styles.icon} />
      <Text style={styles.optionsText}>Push Notifications</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        style={styles.switch}
        onValueChange={setActiveSwitch}
        value={activeSwitch}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
  switch: {
    marginRight: 20,
  },
  optionsText: {
    fontSize: 15,
    fontWeight: "600",
    width: "auto",
  },
});
