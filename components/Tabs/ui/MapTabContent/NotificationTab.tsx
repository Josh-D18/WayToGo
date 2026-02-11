import { Bell } from "lucide-react-native";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from "../styles/styles";

export function NotificationTab() {
  const [activeSwitch, setActiveSwitch] = useState(false);
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Bell />
        <Text style={styles.optionsText}>Push Notifications</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setActiveSwitch}
        value={activeSwitch}
      />
    </React.Fragment>
  );
}
