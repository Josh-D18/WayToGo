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
        <View style={styles.closeIconContainer}>
          <Pressable onPress={() => setActive(!active)}>
            <CircleX size={25} />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Settings</Text>
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
});
