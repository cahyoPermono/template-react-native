import { DefaultTheme } from "react-native-paper";
export const colors = {
  ...DefaultTheme.colors,
  /*for adding custom color uncomment and change the value you need*/
  primary: "#2182BD", //primary color for your app, usually your brand color.
  // accent: "#03dac4", //secondary color for your app which complements the primary color.
  // background: "#f6f6f6", //background color for pages, such as lists.
  // surface: white,
  // error: "#B00020",
  // text: black,
  // onSurface: "#000000", //background color for snackbars
  // disabled: color(black).alpha(0.26).rgb().string(),
  // placeholder: color(black).alpha(0.54).rgb().string(),
  // backdrop: color(black).alpha(0.5).rgb().string(),
  // notification: pinkA400,
  textColor: {
    primary: "#262626",
    secondary: "#757575",
    disabled: "#9C9C9C",
    inverse: "#FFFFFF",
    error: "#D0421B",
    success: "#138000",
  },
};
