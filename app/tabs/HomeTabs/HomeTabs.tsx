import Index from "@/app/index";
import "@/global.css";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

export default function HomeTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {/* Index is the home page */}
      <Tab.Screen name="index" component={Index} />
    </Tab.Navigator>
  );
}
