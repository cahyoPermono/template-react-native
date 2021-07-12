import { DarkTheme, DefaultTheme } from "react-native-paper";
import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

export const theme = {
  ...DefaultTheme,
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export const darkTheme = {
  ...DarkTheme,
  // colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
