import { Header } from "@/components/Header/Header";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "../global.css";
import Tabs from "./(tabs)/_layout";

export default function RootLayout() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerLeft: () => null,
      }}
    >
      <Stack.Screen name="HomeTabs" component={Tabs}></Stack.Screen>
    </Stack.Navigator>
  );
}

{
  /* <Stack.Screen name="Settings" component={SettingsSlider}></Stack.Screen> */
}
