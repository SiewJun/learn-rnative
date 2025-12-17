import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemeScheme } from "../types/theme";

export type ThemeOption = {
  value: ThemeScheme;
  label: string;
  description: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const THEME_OPTIONS: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    description: "Always use light mode",
    icon: "weather-sunny",
  },
  {
    value: "dark",
    label: "Dark",
    description: "Always use dark mode",
    icon: "weather-night",
  },
  {
    value: "system",
    label: "System",
    description: "Match your device settings",
    icon: "cellphone-cog",
  },
] as const;
