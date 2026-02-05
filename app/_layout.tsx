import Index from "@/app/index";
import { Header } from "@/components/Header/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import "../global.css";

export default function RootLayout() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="index"
        component={Index}
        options={{ title: "Home", headerTitle: () => <Header /> }}
      />
    </Tab.Navigator>
  );
}

// <Stack>
//   <Stack.Screen
//     name="index"
//     options={{ headerTitle: () => <Header /> }}
//   ></Stack.Screen>
// </Stack>
