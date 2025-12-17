import { Text } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";

export default function HomeTab() {
  return (
    <ScreenContainer className="items-center justify-center">
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
    </ScreenContainer>
  );
}