import { ChevronRight, Shield } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export function PrivacyAndSecurityTab() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Shield />
        <Text style={styles.optionsText}>Privacy and Security</Text>
      </View>
      <ChevronRight size={18} />
    </React.Fragment>
  );
}
