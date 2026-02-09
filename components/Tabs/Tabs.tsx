import { WayToGoTheme } from "@/theme-rn";
import { Bell, Moon } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

interface TabProps {
  linkToPage?: string;
}

export function Tab(props: TabProps) {
  const { linkToPage } = props;
  const [tabDisplay, setTabDisplay] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(false);

  useEffect(() => {
    if (linkToPage && linkToPage.length > 0) {
      setTabDisplay(true);
    }
  }, [linkToPage]);

  return (
    <View>
      {tabDisplay ? (
        <View style={styles.settingContentContainer}>
          <Bell style={styles.icon} />
          <Text style={styles.optionsText}>Notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            style={styles.switch}
            onValueChange={setActiveSwitch}
            value={activeSwitch}
          />
        </View>
      ) : (
        <View style={styles.settingContentContainer}>
          <Moon style={styles.icon} />
          <Text style={styles.optionsText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            style={styles.switch}
            onValueChange={setActiveSwitch}
            value={activeSwitch}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
  settingContentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 27,
    width: "100%",
    alignSelf: "stretch",
    backgroundColor: WayToGoTheme.light.colors.card,
    borderBottomWidth: 1,
  },
  switch: {
    marginRight: 20,
  },
  optionsText: {
    fontSize: 19,
    fontWeight: 600,
    marginRight: 90,
    width: 115,
  },
});
