import { Header } from "@/components/Header/Header";
import { AboutScreen } from "@/screens/AboutScreen/AboutScreen";
import { AccountPreferencesScreen } from "@/screens/AccountPreferencesScreen/AccountPreferencesScreen";
import { PrivacySecurityScreen } from "@/screens/PrivacySecurityScreen/PrivacySecurityScreen";
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
        name="settings"
        component={SettingsScreen}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="about"
        component={AboutScreen}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="account"
        component={AccountPreferencesScreen}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="privacy"
        component={PrivacySecurityScreen}
        options={{ animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}
