import { useNavigation } from "@react-navigation/native";
import { ArrowBigLeft } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { universalStyles } from "../styles";

export function PrivacySecurityScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Privacy Security</Text>
      <Pressable
        onPress={() => navigation.goBack()}
        style={universalStyles.navigateContainer}
      >
        <ArrowBigLeft size={20} />
        <Text style={[universalStyles.text, universalStyles.navigateText]}>
          Back
        </Text>
      </Pressable>
    </View>
  );
}
