import { WayToGoTheme } from "@/theme-rn";
import { ChevronRight, Shield } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export function PrivacyAndSecurityTab() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={[styles.otherOptions, styles.backgroundSize]}>
          <Shield color={WayToGoTheme.light.colors.foreground} />
        </View>
        <Text style={styles.optionsText}>Privacy and Security</Text>
      </View>
      <ChevronRight size={18} />
    </React.Fragment>
  );
}
