import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MappedComponent } from "./ui";
import { TabContainer } from "./ui/TabContainer";

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
          <SelectedTab />
        </TabContainer>
      ) : (
        <TabContainer>
          <SelectedTab />
        </TabContainer>
      )}
    </View>
  );
}
