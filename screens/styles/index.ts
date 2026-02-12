import { getWindowHeight, getWindowWidth } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { StyleSheet } from "react-native";
const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const settingsStyles = StyleSheet.create({
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

export const universalStyles = StyleSheet.create({
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
});
