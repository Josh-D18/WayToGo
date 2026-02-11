import { WayToGoTheme } from "@/theme-rn";
import { ChevronRight, CircleAlert } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export function AboutTab() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={[styles.otherOptions, styles.backgroundSize]}>
          <CircleAlert color={WayToGoTheme.light.colors.foreground} />
        </View>
        <Text style={styles.optionsText}>About WayToGo</Text>
      </View>
      <ChevronRight size={18} />
    </React.Fragment>
  );
}
