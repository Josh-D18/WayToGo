import Index from "@/app/index";
import "@/global.css";
import ProfileRootLayout from "@/screens/ProfileScreen/RootLayout";
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
            <TrendingUp color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={Index}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <MapPin color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Index}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <Plus color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Index}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <Bell color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileRootLayout}
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <UserRound color={color} size={26} style={[styles.icon]} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("profile", {
              screen: "Profile",
            });
          },
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
