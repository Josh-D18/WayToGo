import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MappedComponent } from "./ui";
import { TabContainer } from "./ui/TabContainer";

interface TabProps {
  path?: string;
  type: string;
}

export function Tab(props: TabProps) {
  const { path, type } = props;
  const [tabDisplay, setTabDisplay] = useState(false);

  useEffect(() => {
    if (path && path.length > 0) {
      setTabDisplay(true);
    }
  }, [path]);

  const SelectedTab = MappedComponent[type as keyof typeof MappedComponent];

  return (
    <View>
      {tabDisplay ? (
        <TabContainer path={path}>
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
