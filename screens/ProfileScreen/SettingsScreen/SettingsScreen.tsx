import { getWindowHeight, getWindowWidth } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { useNavigation } from "@react-navigation/native";
import { ArrowBigLeft, Bell, Moon } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export default function SettingsSlider() {
  const [activeSwitch, setActiveSwitch] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Settings</Text>
        </View>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.navigateContainer}
        >
          <ArrowBigLeft size={20} />
          <Text style={[styles.text, styles.navigateText]}>Back</Text>
        </Pressable>
        <View style={styles.settingOptionsContainer}>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WayToGoTheme.light.colors.card,
    width: windowWidth,
    height: windowHeight,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 30,
  },

  iconContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  textContainer: {
    alignSelf: "flex-start",
    marginBottom: 8,
    marginLeft: 20,
  },

  closeIconContainer: {
    alignSelf: "flex-end",
    marginRight: 35,
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 600,
    marginRight: 10,
  },
  settingContentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
    width: "100%",
    alignSelf: "stretch",
  },
  switch: {
    marginRight: 20,
  },
  icon: {
    marginHorizontal: 20,
  },
  optionsText: {
    fontSize: 19,
    fontWeight: 600,
    marginRight: 90,
    width: 115,
  },
  settingOptionsContainer: {
    marginTop: 25,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navigateText: {
    fontSize: 16,
    marginLeft: 10,
  },
  navigateContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginVertical: 2,
  },
});
