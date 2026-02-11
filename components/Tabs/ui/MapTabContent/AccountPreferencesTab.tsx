import { WayToGoTheme } from "@/theme-rn";
import { ChevronRight, User2 } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export function AccountPreferencesTab() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={[styles.otherOptions, styles.backgroundSize]}>
          <User2 color={WayToGoTheme.light.colors.foreground} />
        </View>
        <Text style={styles.optionsText}>Account Preferences</Text>
      </View>
      <ChevronRight size={18} />
    </React.Fragment>
  );
}
