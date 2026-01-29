import { DisplayCards } from "@/components/DisplayCards/DisplayCards";
import FeedNavigation from "@/components/FeedNavigation/FeedNavigation";
import InfoCard from "@/components/InfoCard/InfoCard";
import { getWindowHeight } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { Users, Zap } from "lucide-react-native";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

const windowHeight = getWindowHeight();

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.main}>
      {/* Daily Info Section */}
      <View style={styles.container}>
        <InfoCard
          contentTitle="Active"
          IconComponent={Users}
          contentDescription="2,847"
        />
        <InfoCard
          contentTitle="Reports"
          IconComponent={Zap}
          contentDescription="4"
        />
      </View>
      {/* On Page Menu Navigation */}
      <FeedNavigation />
      {/* Display Info Cards Section */}
      <DisplayCards />
      {/* Settings */}
      {/* <SettingsSlider /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    backgroundColor: WayToGoTheme.light.colors.background,
    height: windowHeight,
    padding: WayToGoTheme.spacing.sm,
  },
});
