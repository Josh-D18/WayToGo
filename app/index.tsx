import FeedNavigation from "@/components/FeedNavigation/FeedNavigation";
import InfoCard from "@/components/InfoCard/InfoCard";
import { WayToGoTheme } from "@/theme-rn";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.main}>
      {/* Daily Info Section */}
      <View style={styles.container}>
        <InfoCard
          contentTitle="Active"
          iconSrc="../../assets/images/users.svg"
          contentDescription="2,847"
        />
        <InfoCard
          contentTitle="Reports"
          iconSrc="../../assets/images/users.svg"
          contentDescription="4"
        />
      </View>
      {/* On Page Menu Navigation */}
      <FeedNavigation />
      {/* Display Info Cards Section */}

      {/* Footer */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: WayToGoTheme.spacing.xl,
  },
  main: {
    backgroundColor: WayToGoTheme.light.colors.background,
    height: windowHeight,
  },
});
