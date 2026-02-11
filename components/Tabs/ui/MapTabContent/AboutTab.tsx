import { ChevronRight, CircleAlert } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export function AboutTab() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <CircleAlert />
        <Text style={styles.optionsText}>About WayToGo</Text>
      </View>
      <ChevronRight size={18} />
    </React.Fragment>
  );
}
