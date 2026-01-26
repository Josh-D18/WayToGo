import { WayToGoTheme } from "@/theme-rn";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIconContainer}>
        <View style={styles.headerIconContentContainer}>
          <Image
            source={require("../../assets/images/train-front-white.svg")}
            style={styles.headerIcon}
          />
        </View>
        <View>
          <Text style={styles.headerTitle}>WayToGo</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => {}}>
          <Image
            source={require("../../assets/images/search.svg")}
            style={styles.headerSelectionIcons}
          />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Image
            source={require("../../assets/images/settings.svg")}
            style={styles.headerSelectionIcons}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
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
