import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MappedComponent } from "./ui";
import { TabContainer } from "./ui/TabContent";

interface TabProps {
  linkToPage?: string;
  type: string;
}

export function Tab(props: TabProps) {
  const { linkToPage, type } = props;
  const [tabDisplay, setTabDisplay] = useState(false);

  useEffect(() => {
    if (linkToPage && linkToPage.length > 0) {
      setTabDisplay(true);
    }
  }, [linkToPage]);

  const SelectedTab = MappedComponent[type as keyof typeof MappedComponent];

  return (
    <View>
      {tabDisplay ? (
        <TabContainer>
          <View style={styles.container}>
            <SelectedTab />
          </View>
        </TabContainer>
      ) : (
        <TabContainer>
          <View style={styles.container}>
            <SelectedTab />
          </View>
        </TabContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
