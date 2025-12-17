import { ThemeScheme } from "../types/theme";

/**
 * Get a human-readable label for a theme scheme
 */
export function getThemeLabel(scheme: ThemeScheme): string {
  switch (scheme) {
    case "light":
      return "Light";
    case "dark":
      return "Dark";
    case "system":
      return "System";
    default:
      return "System";
  }
}

/**
 * Validate if a string is a valid theme scheme
 */
export function isValidThemeScheme(value: string): value is ThemeScheme {
  return value === "light" || value === "dark" || value === "system";
}
