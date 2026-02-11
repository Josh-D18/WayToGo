import { ChevronRight, User2 } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export function AccountPreferencesTab() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <User2 />
        <Text style={styles.optionsText}>Account Preferences</Text>
      </View>
      <ChevronRight size={18} />
    </React.Fragment>
  );
}
