import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { WelcomeScreen } from "./src/features/welcome/welcome.screen";
import { darkTheme, theme } from "./src/infrastructure/theme";

export default function App() {
  const isDark = useColorScheme() === "dark";
  return (
    <>
      <PaperProvider theme={isDark ? darkTheme : theme}>
        <WelcomeScreen />
      </PaperProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
