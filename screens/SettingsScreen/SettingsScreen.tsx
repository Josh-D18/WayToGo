import { Tab } from "@/components/Tabs/Tabs";
import { useNavigation } from "@react-navigation/native";
import { ArrowBigLeft } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { settingsStyles, universalStyles } from "../styles/index";

export default function SettingsSlider() {
  const navigation = useNavigation();

  return (
    <View style={settingsStyles.container}>
      <ScrollView style={settingsStyles.iconContainer}>
        <View style={settingsStyles.textContainer}>
          <Text style={universalStyles.text}>Settings</Text>
        </View>
        <Pressable
          onPress={() => navigation.goBack()}
          style={universalStyles.navigateContainer}
        >
          <ArrowBigLeft size={20} />
          <Text style={[universalStyles.text, universalStyles.navigateText]}>
            Back
          </Text>
        </Pressable>
        <View style={settingsStyles.settingOptionsContainer}>
          <View style={settingsStyles.tabContainer}>
            <Tab type={"notifications"} />
            <View style={settingsStyles.line} />
            <Tab type={"darkmode"} />
          </View>
          <View style={settingsStyles.tabContainer}>
            <Tab path="account" type={"accountPreferences"} />
            <View style={settingsStyles.line} />
            <Tab path="privacy" type={"privacyandsecurity"} />
          </View>
          <View style={settingsStyles.tabContainer}>
            <Tab path="about" type={"about"} />
          </View>

          <View style={settingsStyles.footer}>
            <Text style={settingsStyles.authText}>Log Out</Text>
            <Text style={settingsStyles.versionText}>VERSION 1.0.4 (2026)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
