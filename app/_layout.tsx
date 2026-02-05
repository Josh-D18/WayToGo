import { Header } from "@/components/Header/Header";
import SettingsSlider from "@/screens/SettingsScreen/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "../global.css";
import Tabs from "./(tabs)/_layout";

export default function RootLayout() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerTitle: () => <Header /> }}>
      <Stack.Screen name="HomeTabs" component={Tabs}></Stack.Screen>
      <Stack.Screen name="Settings" component={SettingsSlider}></Stack.Screen>
    </Stack.Navigator>
  );
}
