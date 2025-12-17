import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../providers/ThemeProvider";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemeScheme } from "../../types/theme";
import { THEME_OPTIONS } from "../../constants/theme-options";
import { ScreenContainer } from "../../components/ScreenContainer";

export default function ThemeSelection() {
  const { scheme, setScheme, theme } = useTheme();
  const router = useRouter();

  const handleSelectTheme = (value: ThemeScheme) => {
    setScheme(value);
  };

  return (
    <ScreenContainer>
        <View className="flex-row items-center px-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-4"
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              style={{ color: theme.color.onBackground }}
            />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-onBackground">
            Appearance
          </Text>
        </View>

      <ScrollView className="flex-1">
        <View className="px-4 py-6">
          <Text className="text-sm text-muted mb-6">
            Choose how the app appears to you
          </Text>

        <View className="bg-surface rounded-lg overflow-hidden border border-border">
          {THEME_OPTIONS.map((option, index) => {
            const isSelected = scheme === option.value;
            const isLast = index === THEME_OPTIONS.length - 1;

            return (
              <TouchableOpacity
                key={option.value}
                className={`flex-row items-center px-4 py-4 ${
                  !isLast ? "border-b border-border" : ""
                }`}
                onPress={() => handleSelectTheme(option.value)}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons
                  name={option.icon}
                  size={24}
                  style={{
                    color: isSelected ? theme.color.primary : theme.color.muted,
                    marginRight: 12,
                  }}
                />
                <View className="flex-1">
                  <Text
                    className={`text-base font-semibold ${
                      isSelected ? "text-primary" : "text-onSurface"
                    }`}
                  >
                    {option.label}
                  </Text>
                  <Text className="text-sm text-muted mt-1">
                    {option.description}
                  </Text>
                </View>
                {isSelected && (
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={24}
                    style={{ color: theme.color.primary }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

