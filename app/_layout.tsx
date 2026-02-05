import { Header } from "@/components/Header/Header";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "../global.css";
import HomeTabs from "./tabs/HomeTabs/HomeTabs";

export default function RootLayout() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerTitle: () => <Header /> }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
