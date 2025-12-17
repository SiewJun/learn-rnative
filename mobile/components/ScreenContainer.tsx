import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../providers/ThemeProvider";

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
  edges?: ("top" | "bottom" | "left" | "right")[];
  className?: string;
}

export function ScreenContainer({
  children,
  edges = ["top"],
  style,
  className = "",
  ...props
}: ScreenContainerProps) {
  const insets = useSafeAreaInsets();
  const { vars } = useTheme();

  const paddingStyle = {
    paddingTop: edges.includes("top") ? insets.top : 0,
    paddingBottom: edges.includes("bottom") ? insets.bottom : 0,
    paddingLeft: edges.includes("left") ? insets.left : 0,
    paddingRight: edges.includes("right") ? insets.right : 0,
  };

  return (
    <View
      className={`flex-1 bg-background ${className}`}
      style={[vars, paddingStyle, style]}
      {...props}
    >
      {children}
    </View>
  );
}
