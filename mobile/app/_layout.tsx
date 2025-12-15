import {
  NativeTabs,
  Icon,
  Label,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import "../global.css";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon
          sf={{ default: "house", selected: "house.fill" }}
          androidSrc={
            <VectorIcon family={MaterialCommunityIcons} name="home-outline" />
          }
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon
          sf={{ default: "gearshape", selected: "gearshape.fill" }}
          androidSrc={
            <VectorIcon family={MaterialCommunityIcons} name="cog-outline" />
          }
        />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
