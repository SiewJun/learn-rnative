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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function RootTabs() {
  const { vars, theme } = useTheme();

  return (
    <View className="flex-1 bg-background" style={vars}>
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

function ThemedSafeArea({ children }: { children: React.ReactNode }) {
  const { vars, isLoading } = useTheme();

  if (isLoading) {
    return (
      <SafeAreaView
        className="flex-1 bg-background items-center justify-center"
        style={vars}
        edges={["top", "left", "right"]}
      >
        <ThemedStatusBar />
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      className="flex-1 bg-background"
      style={vars}
      edges={["top", "left", "right"]}
    >
      <ThemedStatusBar />
      {children}
    </SafeAreaView>
  );
}

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ThemedSafeArea>
          <RootTabs />
        </ThemedSafeArea>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
