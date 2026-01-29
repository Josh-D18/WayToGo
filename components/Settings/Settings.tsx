import { getWindowHeight, getWindowWidth } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { CircleX } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const SettingsSlider = () => {
  return (
    <View style={styles.container}>
      <View>
        <CircleX />
        <Text>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: WayToGoTheme.light.colors.card,
    width: windowWidth,
    height: windowHeight,
    borderRadius: 30,
    left: 50,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
});
