import { Theme } from "../constants/theme";

export type ThemeScheme = "light" | "dark" | "system";

export type ThemeContextValue = {
  scheme: ThemeScheme;
  setScheme: (scheme: ThemeScheme) => void;
  theme: Theme;
  vars: Record<string, string>;
  isLoading: boolean;
};
