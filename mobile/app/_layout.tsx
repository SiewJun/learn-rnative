import { View, ActivityIndicator } from "react-native";
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
import { SafeAreaProvider } from "react-native-safe-area-context";

function RootTabs() {
  const { vars, theme, isLoading } = useTheme();

  if (isLoading) {
    return (
      <View
        className="flex-1 bg-background items-center justify-center"
        style={vars}
      >
        <ThemedStatusBar />
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background" style={vars}>
      <ThemedStatusBar />
      <NativeTabs iconColor={theme.color.primary}>
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
    <SafeAreaProvider>
      <ThemeProvider>
        <RootTabs />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
