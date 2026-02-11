import { WayToGoTheme } from "@/theme-rn";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionsText: {
    fontSize: 16,
    fontWeight: "600",
    width: 200,
  },
  notification: {
    backgroundColor: WayToGoTheme.light.colors.fare.bg,
  },
  darkmode: {
    backgroundColor: WayToGoTheme.light.colors.crowding.bg,
  },
  otherOptions: {
    backgroundColor: WayToGoTheme.light.colors.muted,
  },
  backgroundSize: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 20,
  },
});

export default styles;
