import { Header } from "@/components/Header/Header";
import SettingsScreen from "@/screens/SettingsScreen/SettingsScreen";
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
        headerTitleStyle: {
          marginVertical: 20,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="home" component={Tabs} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}
