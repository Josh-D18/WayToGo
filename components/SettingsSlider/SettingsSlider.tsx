import { getWindowHeight, getWindowWidth } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { Bell, CircleX, Moon } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

interface SettingsSliderProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const SettingsSlider = (props: SettingsSliderProps) => {
  const { active, setActive } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.closeIconContainer}>
          <Pressable onPress={() => setActive(!active)}>
            <CircleX size={25} />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Settings</Text>
        </View>
        <View style={styles.settingOptionsContainer}>
          <View style={styles.settingContentContainer}>
            <Bell style={styles.icon} />
            <Text style={styles.optionsText}>Notifications</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              style={styles.switch}
            />
          </View>
          <View style={styles.settingContentContainer}>
            <Moon style={styles.icon} />
            <Text style={styles.optionsText}>Dark Mode</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              style={styles.switch}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: WayToGoTheme.light.colors.card,
    width: windowWidth - 35,
    height: windowHeight,
    borderRadius: 30,
    left: 50,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },

  iconContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  textContainer: {
    alignSelf: "center",
    marginBottom: 8,
  },

  closeIconContainer: {
    alignSelf: "flex-end",
    marginRight: 35,
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 600,
    marginRight: 10,
  },
  settingContentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
    width: "100%",
  },
  switch: {
    marginRight: 20,
    alignSelf: "flex-end",
  },

  icon: {
    marginHorizontal: 20,
  },

  optionsText: {
    fontSize: 19,
    fontWeight: 600,
  },

  settingOptionsContainer: {
    marginTop: 25,
  },
});
