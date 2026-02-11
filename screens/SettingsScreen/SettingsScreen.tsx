import { Tab } from "@/components/Tabs/Tabs";
import { getWindowHeight, getWindowWidth } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { useNavigation } from "@react-navigation/native";
import { ArrowBigLeft } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export default function SettingsSlider() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.iconContainer}>
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
          <View style={styles.tabContainer}>
            <Tab type={"notifications"} />
            <View style={styles.line} />
            <Tab type={"darkmode"} />
          </View>
          <View style={styles.tabContainer}>
            <Tab linkToPage="account" type={"accountPreferences"} />
            <View style={styles.line} />
            <Tab linkToPage="privacy" type={"privacyandsecurity"} />
          </View>
          <View style={styles.tabContainer}>
            <Tab linkToPage="about" type={"about"} />
          </View>

          <View style={styles.footer}>
            <Text style={styles.authText}>Log Out</Text>
            <Text style={styles.versionText}>VERSION 1.0.4 (2026)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  settingOptionsContainer: {
    marginTop: 25,
    marginHorizontal: windowWidth < 700 ? 5 : 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  container: {
    backgroundColor: WayToGoTheme.light.colors.background,
    flex: 1,
    height: windowHeight,
    width: windowWidth,
  },

  iconContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: 1,
    height: "auto",
  },

  textContainer: {
    alignSelf: "flex-start",
    marginBottom: 8,
    marginLeft: 20,
    marginTop: 20,
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

  tabContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: WayToGoTheme.light.colors.border,
    marginBottom: 25,
    backgroundColor: WayToGoTheme.light.colors.card,
    boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.1)",
  },

  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  authText: {
    color: WayToGoTheme.light.colors.disruption.main,
    fontSize: 17,
    fontWeight: 600,
    marginBottom: 30,
  },

  versionText: {
    color: WayToGoTheme.light.colors.mutedForeground,
    marginBottom: 30,
  },

  line: {
    borderBottomWidth: 1,
    paddingBottom: 0,
    borderBottomColor: WayToGoTheme.light.colors.muted,
  },
});
