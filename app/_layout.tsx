import { Header } from "@/components/Header/Header";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: () => <Header /> }}
      ></Stack.Screen>
    </Stack>
  );
}
