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
          <Text style={styles.headerTitle}>Way to Go</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => {}}>
          <Image
            source={require("../../assets/images/search.svg")}
            style={styles.headerSettingsIcon}
          />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Image
            source={require("../../assets/images/settings.svg")}
            style={styles.headerSettingsIcon}
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
    fontSize: 17,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  headerIcon: {
    width: 35,
    height: 35,
  },

  headerIconContentContainer: {
    backgroundColor: WayToGoTheme.light.colors.primary,
    borderRadius: WayToGoTheme.borderRadius.xl,
    padding: 7,
    marginRight: 8,
  },

  headerSettingsIcon: {
    width: 30,
    height: 30,
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
});
