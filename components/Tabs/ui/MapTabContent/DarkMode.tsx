import { WayToGoTheme } from "@/theme-rn";
import { Moon } from "lucide-react-native";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from "../styles/styles";

export function DarkModeTab() {
  const [activeSwitch, setActiveSwitch] = useState(false);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={[styles.darkmode, styles.backgroundSize]}>
          <Moon color={WayToGoTheme.light.colors.crowding.main} />
        </View>
        <Text style={styles.optionsText}>Dark Mode</Text>
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
