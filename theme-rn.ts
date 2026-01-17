export const WayToGoTheme = {
  light: {
    colors: {
      // Brand Colors
      primary: "#22a061", // GO Transit Green
      primaryForeground: "#ffffff",

      // UI Neutrals
      background: "#f8faf9",
      foreground: "#151a17",
      card: "#ffffff",
      cardBorder: "#e6ede9",
      border: "#e6ede9",
      muted: "#f0f3f1",
      mutedForeground: "#727d76",

      // Status & Reports
      fare: { main: "#2563eb", bg: "#eff6ff" },
      delay: { main: "#d97706", bg: "#fffbeb" },
      disruption: { main: "#dc2626", bg: "#fef2f2" },
      crowding: { main: "#9333ea", bg: "#f5f3ff" },
      success: "#22a061",
      warning: "#f59e0b",
      destructive: "#ef4444",
    },
  },
  dark: {
    colors: {
      // Brand Colors
      primary: "#2bbd74", // Lighter green for dark mode contrast
      primaryForeground: "#ffffff",

      // UI Neutrals
      background: "#0d110f",
      foreground: "#f1f5f3",
      card: "#151a17",
      cardBorder: "#232926",
      border: "#232926",
      muted: "#1b221f",
      mutedForeground: "#8c9891",

      // Status & Reports (Adjusted for dark mode background)
      fare: { main: "#60a5fa", bg: "#172554" },
      delay: { main: "#fbbf24", bg: "#451a03" },
      disruption: { main: "#f87171", bg: "#450a0a" },
      crowding: { main: "#c084fc", bg: "#2e1065" },
      success: "#2bbd74",
      warning: "#fbbf24",
      destructive: "#f87171",
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  typography: {
    display: "SpaceGrotesk-SemiBold",
    body: "Inter-Regular",
    bodyMedium: "Inter-Medium",
    bodyBold: "Inter-Bold",
  },
};

/**
 * React Native Example Usage:
 *
 * const isDarkMode = useColorScheme() === 'dark';
 * const theme = isDarkMode ? WayToGoTheme.dark : WayToGoTheme.light;
 *
 * const styles = StyleSheet.create({
 *   card: {
 *     backgroundColor: theme.colors.card,
 *     borderRadius: WayToGoTheme.borderRadius.lg,
 *     padding: WayToGoTheme.spacing.md,
 *     borderWidth: 1,
 *     borderColor: theme.colors.border,
 *   },
 * });
 */
