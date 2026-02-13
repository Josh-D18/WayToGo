import { NormalCard } from "@/components/NormalCard/NormalCard";
import data from "@/data/notifications.json";
import { WayToGoTheme } from "@/theme-rn";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.title}>Notifications</Text>
        <Pressable>
          <Text style={styles.subTitle}>MARK ALL READ</Text>
        </Pressable>
      </View>
      {
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <NormalCard
                title={item.title}
                time={item.time}
                description={item.description}
                recent={item.recent}
                key={item.title}
              />
            </View>
          )}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: "auto",
  },
  container: {
    padding: 25,
    width: "100%",
  },
  mainTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 30,
  },
  timeText: {
    fontSize: 13,
    fontWeight: 500,
    paddingTop: 4,
  },
  subTitle: {
    paddingTop: 10,
    color: WayToGoTheme.light.colors.success,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
  },
});
