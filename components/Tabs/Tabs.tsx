import { Bell, ChevronRight, Moon } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { TabContainer } from "./ui/TabContent";

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
        <TabContainer>
          <Bell style={styles.icon} />
          <Text style={styles.optionsText}>Notifications</Text>
          <ChevronRight size={18} />
        </TabContainer>
      ) : (
        <TabContainer>
          <Moon style={styles.icon} />
          <Text style={styles.optionsText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            style={styles.switch}
            onValueChange={setActiveSwitch}
            value={activeSwitch}
          />
        </TabContainer>
      )}
    </View>
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
    fontSize: 19,
    fontWeight: "600",
    marginRight: 90,
    width: 115,
  },
});
