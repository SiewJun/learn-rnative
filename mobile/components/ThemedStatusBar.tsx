import { StatusBar } from "expo-status-bar";
import { useTheme } from "../providers/ThemeProvider";

export function ThemedStatusBar() {
  const { theme } = useTheme();
  return (
    <StatusBar
      style={theme.statusBar.style}
      backgroundColor={theme.statusBar.background}
    />
  );
}