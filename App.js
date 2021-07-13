import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { WelcomeScreen } from "./src/features/welcome/welcome.screen";
import { darkTheme, theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const isDark = useColorScheme() === "dark";
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <PaperProvider theme={isDark ? darkTheme : theme}>
        <WelcomeScreen />
      </PaperProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
