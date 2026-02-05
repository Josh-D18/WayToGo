import Index from "@/app/index";
import "@/global.css";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Index is the home page */}
      <Tab.Screen name="index" component={Index} />
      <Tab.Screen name="map" component={Index} />
      <Tab.Screen name="add" component={Index} />
      <Tab.Screen name="notifications" component={Index} />
      <Tab.Screen name="profile" component={Index} />
    </Tab.Navigator>
  );
}
