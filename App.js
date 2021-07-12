import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Appbar, Provider as PaperProvider } from "react-native-paper";

import { theme, darkTheme } from "./src/infrastructure/theme";

export default function App() {
  const isDark = useColorScheme() === "dark";
  return (
    <>
      <PaperProvider theme={isDark ? darkTheme : theme}>
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon="archive"
            onPress={() => console.log("Pressed archive")}
          />
          <Appbar.Action
            icon="mail"
            onPress={() => console.log("Pressed mail")}
          />
          <Appbar.Action
            icon="label"
            onPress={() => console.log("Pressed label")}
          />
          <Appbar.Action
            icon="delete"
            onPress={() => console.log("Pressed delete")}
          />
        </Appbar>
      </PaperProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
