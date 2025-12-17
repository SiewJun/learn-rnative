import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../providers/ThemeProvider";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { getThemeLabel } from "../../utils/theme";

export default function SettingsTab() {
  const { scheme, theme } = useTheme();
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      <View className="px-4 pb-4">
        <Text className="text-2xl font-bold text-onBackground">
          Settings
        </Text>
      </View>
      
      <ScrollView className="flex-1">
        <View className="px-4 pb-6">
          <View className="bg-surface rounded-lg overflow-hidden border border-border">
          <TouchableOpacity
            className="flex-row items-center justify-between px-4 py-4 border-b border-border"
            activeOpacity={0.7}
            onPress={() => router.push("./settings/theme-selection")}
          >
              <View className="flex-row items-center flex-1">
                <MaterialCommunityIcons
                  name="theme-light-dark"
                  size={24}
                  style={{ color: theme.color.primary, marginRight: 12 }}
                />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-onSurface">
                    Appearance
                  </Text>
                  <Text className="text-sm text-muted mt-1">
                    Choose your theme preference
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <Text className="text-sm text-muted mr-2">{getThemeLabel(scheme)}</Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  style={{ color: theme.color.muted }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

