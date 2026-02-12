import { WayToGoTheme } from "@/theme-rn";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface TabContainerProps {
  children: React.ReactNode;
  path?: string;
}

export function TabContainer({ children, path }: TabContainerProps) {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      {path ? (
        <Pressable
          style={styles.tabContentContainer}
          onPress={() => navigation.navigate<string>(path)}
        >
          {children}
        </Pressable>
      ) : (
        <View style={styles.tabContentContainer}>{children}</View>
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  tabContentContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 27,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: WayToGoTheme.light.colors.card,
    paddingVertical: 5,
  },
});
