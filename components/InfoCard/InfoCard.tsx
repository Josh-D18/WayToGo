import { WayToGoTheme } from "@/theme-rn";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

interface InfoCardProps {
  contentTitle?: string;
}

export default function InfoCard(props: InfoCardProps) {
  const { contentTitle } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/images/users.svg")}
          style={styles.image}
        />
        <Text style={styles.text}>{contentTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: WayToGoTheme.borderRadius.xl,
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: WayToGoTheme.light.colors.border,
    margin: WayToGoTheme.spacing.xl,
    backgroundColor: WayToGoTheme.light.colors.card,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: WayToGoTheme.spacing.sm,
  },
  text: {
    color: WayToGoTheme.light.colors.foreground,
  },
});
