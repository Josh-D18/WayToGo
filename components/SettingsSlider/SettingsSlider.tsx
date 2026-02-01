import { getWindowHeight, getWindowWidth } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { CircleX } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
        <Pressable onPress={() => setActive(!active)}>
          <CircleX />
        </Pressable>
      </View>
      <Text>Settings</Text>
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

  iconContainer: {},
});
