//  ***** Disclaimer *****
//  This file contains the style stetting :es.
//  *********************
//
//  Table of Contents:
//--------------------------------------------------
//  1. Imports
//  2. Palette
//  3. Gutter
//  4. TextSize
//  5. Font
//  6. IconSize
//  7. RadiusSize
//  8. DeviceSize
//  9. Platform
//  10. SafeArea
//  11. ImageUrl
//  -----------------------------------------------

//  Global style settings
//  -----------------------------------------------

//  1. Imports
//  Imports
//  -----------------------------------------------
import { Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
//  2. Palette
//  -----------------------------------------------
const Palette = {
  // App colors
  appPrimary: "#0f6987",
  appSecondaryDark: "#222222",
  appSecondary: "#333333",
  appSecondaryLight: "#666666",
  appSecondaryMidLight: "#dddddd",
  appSecondaryVeryLight: "#eeeeee",
  appSecondaryCdiLight: "#adadad",
  appAccent: "#ffcc00",
  appWhite: "#ffffff",
  appOffWhite: "#f6f6f6",
  appAlert: "#be1e50",

  // Icon colors
  iconPrimary: "#0f6987",
  iconSecondary: "#333333",
  iconAccent: "#ffcc00",
  iconAlert: "#be1e50",
  iconWhite: "#ffffff",

  // Loader
  loaderPrimary: "#333333",

  // Text
  textPrimary: "#0f6987",
  textSecondaryDark: "#222222",
  textSecondary: "#333333",
  textSecondaryLight: "#666666",
  textAccent: "#ffcc00",
  textAlert: "#be1e50",
  textWhite: "#ffffff",

  //snackbar
  snackBarSuccess: "#419182",
  snackBarInfo: "#0d6583",
  snackBarWarning: "#be1e50",
  snackBarNotification: "#dc6428",
};

//  3. Gutters
//  -----------------------------------------------

const Gutter = {
  g4: 4,
  g8: 8,
  g16: 16,
  g24: 24,
  g32: 32,
  g40: 40,
  g50: 50,
  g130: 130,
  g135: 135,
  g136: 136,
  g137: 137,
  g138: 138,
  g139: 139,
  g140: 140,
  g312: 312,
};

//  4. TextSize
//  -----------------------------------------------
const TextSize = {
  f8 : 8,
  f9 : 9,
  f10 : 10,
  f11 : 11,
  f12 : 12,
  f13 : 13,
  f14 : 14,
  f15 : 15,
  f16 : 16,
  f17 : 17,
  f18 : 18,
  f19 : 19,
  f20 : 20,
  f21 : 21,
  f22 : 22,
  f23 : 23,
  f24 : 24,
  f25 : 25,
  f26 : 26,
  f27 : 27,
  f28 : 28,
  f29 : 29,
  f30 : 30,
  f31 : 31,
  f32 : 32,
};

//  5. Font
//  -----------------------------------------------
const Font = {
  regular: "fontRegular",
  medium: "fontMedium",
  bold: "fontBold"
};

//  6. IconSize
//  -----------------------------------------------
const IconSize = {
  i16: 16,
  i24: 24,
  i60: 60,
};

//  7. RadiusSize
//  -----------------------------------------------
const RadiusSize = {
  r5: 5,
  r10: 10,
  r20: 20,
  r40: 40,
  r100: 100,
  r200: 200
};

//  8. Device Size
//  -----------------------------------------------
const DeviceSize = {
  height: deviceHeight,
  width: deviceWidth
};

//  9. Platform
//  -----------------------------------------------
const IsPlatform = {
  ios: platform === "ios" ? true : false
};

//  10. SafeArea
//  -----------------------------------------------
const SafeArea = {
  // safeArea: Platform.select({ ios: 0, android: StatusBar.currentHeight })
  safeArea: Platform.select({ ios: 0, android: 0 })
};

//  11. ImageUrl
//  -----------------------------------------------
const ImageUrl = {
  // cdi_intro: require("../assets/brand/cdi/CDi_Intro.png"),
};

export {
  Palette,
  Gutter,
  TextSize,
  Font,
  IconSize,
  RadiusSize,
  DeviceSize,
  IsPlatform,
  SafeArea,
  ImageUrl
};
