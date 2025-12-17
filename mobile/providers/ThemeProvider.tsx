import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useColorScheme, Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme, themes } from "../constants/theme";
import { ThemeContextValue, ThemeScheme } from "../types/theme";
import { STORAGE_KEYS } from "../constants/storage";
import { isValidThemeScheme } from "../utils/theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const system = systemColorScheme === "dark" ? "dark" : "light";
  const [scheme, setScheme] = useState<ThemeScheme>("system");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedScheme = await AsyncStorage.getItem(STORAGE_KEYS.THEME_SCHEME);
        if (savedScheme && isValidThemeScheme(savedScheme)) {
          setScheme(savedScheme);
        }
      } catch (error) {
        if (__DEV__) {
          console.error("Failed to load theme preference:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const saveTheme = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEYS.THEME_SCHEME, scheme);
        } catch (error) {
          if (__DEV__) {
            console.error("Failed to save theme preference:", error);
          }
        }
      };
      saveTheme();
    }
  }, [scheme, isLoading]);

  // Override the native appearance for all native components (including NativeTabs)
  // This ensures the native tab bar theme matches the user's selected theme
  useEffect(() => {
    if (scheme === "system") {
      // Reset to follow system theme
      Appearance.setColorScheme(null);
    } else {
      // Force the native appearance to match user's selection
      Appearance.setColorScheme(scheme);
    }
  }, [scheme]);

  const resolved = scheme === "system" ? system : scheme;
  const value = useMemo(
    () => ({
      scheme,
      setScheme,
      theme: resolved === "dark" ? darkTheme : lightTheme,
      vars: themes[resolved],
      isLoading,
    }),
    [scheme, resolved, isLoading]
  );
  
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeProvider missing");
  return ctx;
}
