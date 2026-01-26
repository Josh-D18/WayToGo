import { getWindowWidth } from "@/helpers/dimensions";
import { WayToGoTheme } from "@/theme-rn";
import { LucideIcon } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

interface InfoCardProps {
  contentTitle?: string;
  IconComponent: LucideIcon;
  contentDescription: string;
}
const windowWidth = getWindowWidth();

export default function InfoCard(props: InfoCardProps) {
  const { contentTitle, IconComponent, contentDescription } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconComponent />
        <Text style={styles.text}>{contentTitle}</Text>
      </View>
      <Text style={styles.amount}>{contentDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: WayToGoTheme.borderRadius.xl,
    width: windowWidth <= 720 ? 160 : 180,
    height: 100,
    borderWidth: 1,
    borderColor: WayToGoTheme.light.colors.border,
    margin: WayToGoTheme.spacing.sm,
    backgroundColor: WayToGoTheme.light.colors.card,
    padding: WayToGoTheme.spacing.md,
    marginBottom: 20,
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
    paddingBottom: WayToGoTheme.spacing.sm,
  },
  text: {
    color: WayToGoTheme.light.colors.mutedForeground,
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  amount: {
    fontWeight: 600,
    fontSize: 25,
  },
});
