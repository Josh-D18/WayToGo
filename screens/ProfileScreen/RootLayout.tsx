import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "../../global.css";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen/SettingsScreen";

export default function ProfileRootLayout() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
