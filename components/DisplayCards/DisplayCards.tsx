import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "./ui/Card";
export const DisplayCards = () => {
  return (
    <View style={styles.container}>
      <Card
        stationTitle={"LakeShore West"}
        timeSince={"40m"}
        description={
          "Fare inspectors checking PRESTO cards on Platform. This is longer text for a test!"
        }
        stationLocation={"Union Station"}
        upvoteAmount={26}
        commentsAmount={5}
        type="fare"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
