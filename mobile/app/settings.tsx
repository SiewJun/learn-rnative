import { View, Text, Pressable } from "react-native";
import { useTheme } from "../providers/ThemeProvider";

export default function SettingsTab() {
  const { scheme, setScheme } = useTheme();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-onBackground mb-4">
        Settings ({scheme})
      </Text>
      <Pressable
        className="px-4 py-2 rounded-md bg-primary"
        onPress={() => setScheme("light")}
      >
        <Text className="text-onPrimary font-semibold">
          Toggle Light
        </Text>
      </Pressable>
      <Pressable
        className="px-4 py-2 rounded-md bg-primary"
        onPress={() => setScheme("dark")}
      >
        <Text className="text-onPrimary font-semibold">
          Toggle Dark
        </Text>
      </Pressable>
      <Pressable
        className="px-4 py-2 rounded-md bg-primary"
        onPress={() => setScheme("system")}
      >
        <Text className="text-onPrimary font-semibold">
          Toggle System
        </Text>
      </Pressable>
    </View>
  );
}