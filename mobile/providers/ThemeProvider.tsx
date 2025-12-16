import { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme, themes } from "../constants/theme";

type Scheme = "light" | "dark" | "system";
type Ctx = {
  scheme: Scheme;
  setScheme: (s: Scheme) => void;
  theme: typeof lightTheme;
  vars: any;
};

const ThemeContext = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme() === "dark" ? "dark" : "light";
  const [scheme, setScheme] = useState<Scheme>("system");
  const resolved = scheme === "system" ? system : scheme;
  const value = useMemo(
    () => ({
      scheme,
      setScheme,
      theme: resolved === "dark" ? darkTheme : lightTheme,
      vars: themes[resolved],
    }),
    [scheme, resolved]
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
