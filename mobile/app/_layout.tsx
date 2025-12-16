import { View } from "react-native";
import {
  NativeTabs,
  Icon,
  Label,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemeProvider, useTheme } from "../providers/ThemeProvider";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import "../global.css";

function RootTabs() {
  const { vars } = useTheme();

  return (
    <View className="flex-1 bg-background" style={vars}>
      <ThemedStatusBar />
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
    </View>
  );
}

export default function TabLayout() {
  return (
    <ThemeProvider>
      <RootTabs />
    </ThemeProvider>
  );
}