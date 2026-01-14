import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";

export const Header = () => {
  return (
    <View className="flex w-[300px]">
      <View className="w-full">
        <Text>WayToGo</Text>
        <Button className="">+ Report</Button>
      </View>
    </View>
  );
};
