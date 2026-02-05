import { WayToGoTheme } from "@/theme-rn";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Search, Settings } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIconContainer}>
        <View style={styles.headerIconContentContainer}>
          <Image
            source={require("../../assets/images/train-front-white.svg")}
            style={styles.headerIcon}
          />
        </View>
        <Text style={styles.headerTitle}>WayToGo</Text>
      </View>

      <View style={styles.iconContainer}>
        <Pressable onPress={() => {}}>
          <Search style={styles.headerSelectionIcons} />
        </Pressable>

        <Pressable onPress={() => {}}>
          <Settings style={styles.headerSelectionIcons} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "100%",
    marginBottom: WayToGoTheme.spacing.sm,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },

  headerTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    height: 30,
  },

  headerIcon: {
    width: 25,
    height: 25,
  },

  headerIconContentContainer: {
    backgroundColor: WayToGoTheme.light.colors.primary,
    borderRadius: WayToGoTheme.borderRadius.lg,
    padding: 7,
    marginRight: 8,
  },

  headerSelectionIcons: {
    width: 25,
    height: 25,
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
});
