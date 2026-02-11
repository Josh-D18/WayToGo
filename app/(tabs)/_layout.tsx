import Index from "@/app/index";
import "@/global.css";
import { NotificationsScreen } from "@/screens/NotificationsScreen/NotificationsScreen";
import ProfileScreen from "@/screens/ProfileScreen/ProfileScreen";
import { WayToGoTheme } from "@/theme-rn";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Bell, MapPin, Plus, TrendingUp, UserRound } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 9,
          paddingTop: 9,
        },
      }}
    >
      {/* Index is the home page */}
      <Tab.Screen
        name="index"
        component={Index}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TrendingUp
              color={focused ? WayToGoTheme.light.colors.primary : color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={Index}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <MapPin
              color={focused ? WayToGoTheme.light.colors.primary : color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Index}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Plus
              color={focused ? WayToGoTheme.light.colors.primary : color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={NotificationsScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Bell
              color={focused ? WayToGoTheme.light.colors.primary : color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <UserRound
              color={focused ? WayToGoTheme.light.colors.primary : color}
              size={26}
              style={[styles.icon]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
