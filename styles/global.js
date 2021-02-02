//  ***** Disclaimer *****
//  This file contains the style stettings for use in the project.
//  uses f => factor values that can change but is ussually set on
//  start of the initial project.
//  uses c => constant values that can not change but are custom to 
//  your needs as the project progress 
//  *********************
//
//  Table of Contents:
//--------------------------------------------------
//  1. palettes
//  2. theme
//  3. spacing
//  4. font_size
//  5. font_discription
//  6. font_line_height
//  7. font_weight
//  8. font_family
//  9. icon_size
//  10. border_thickness
//  11. radius_size
//  -----------------------------------------------

//  Global style settings
//  -----------------------------------------------

//  1. palettes
//  -----------------------------------------------
const app_pallete = {
  primary: "#27536B",
  secondary: "#1B5F85",
  accent: "#FDB833",
  white: "#ffffff",
  offWhite: "#EFEFEF",
  grey: "#555555",
  black: "#000000",
  error: "#D84545",
  warning: "#D89D45",
  success: "#74D845",
}

const font_pallete = {
  primary: "#27536B",
  secondary: "#1B5F85",
  accent: "#FDB833",
  white: "#ffffff",
  offWhite: "#EFEFEF",
  grey: "#555555",
  black: "#000000",
  error: "#D84545",
  warning: "#D89D45",
  success: "#74D845",
}

const icon_pallete = {
  primary: "#27536B",
  secondary: "#1B5F85",
  accent: "#FDB833",
  white: "#ffffff",
  offWhite: "#EFEFEF",
  grey: "#555555",
  black: "#000000",
  error: "#D84545",
  warning: "#D89D45",
  success: "#74D845",
}

const loader_pallete = {
  primary: "#27536B",
  secondary: "#1B5F85",
  accent: "#FDB833",
  white: "#ffffff",
  offWhite: "#EFEFEF",
  grey: "#555555",
  black: "#000000",
  error: "#D84545",
  warning: "#D89D45",
  success: "#74D845",
}

const snackbar_pallete = {
  primary: "#27536B",
  secondary: "#1B5F85",
  accent: "#FDB833",
  white: "#ffffff",
  offWhite: "#EFEFEF",
  grey: "#555555",
  black: "#000000",
  error: "#D84545",
  warning: "#D89D45",
  success: "#74D845",
}

//  2. theme
//  -----------------------------------------------
const theme = {
  app: app_pallete ,
  font: font_pallete,
  icon: icon_pallete,
  loader: loader_pallete,
  snackbar: snackbar_pallete,
}

//  3. spacing
//  -----------------------------------------------
const spacing = {
  f0 : 0,
  f1 : 2,
  f2 : 4,
  f3 : 8,
  f4 : 16,
  f5 : 24,
  f6 : 32,
  f7 : 42,
  f8 : 60,
  f9 : 80,
  f10 : 100,
};

//  4. font_size
//  -----------------------------------------------
const font_size = {
  f0 : 0,
  f1 : 8,
  f2 : 10,
  f3 : 12,
  f4 : 14,
  f5 : 16,
  f6 : 18,
  f7 : 20,
  f8 : 24,
  f9 : 32,
  f10 : 40,
};

//  5. font_discription
//  -----------------------------------------------
const font_discription = {
  hero: font_size.f7,
  sub_hero: font_size.f6,
  heading: font_size.f5,
  sub_heading: font_size.f4,
  title: font_size.f3,
  body: font_size.f2,
  small: font_size.f1,
};

//  6. font_line_height
//  -----------------------------------------------
const font_line_height = {
  f0 : 0,
  f1 : 8,
  f2 : 9,
  f3 : 11,
  f4 : 12,
  f5 : 13,
  f6 : 14,
  f7 : 16,
  f8 : 24,
  f9 : 32,
  f10 : 40,
};

//  7. font_weight
//  -----------------------------------------------
const font_weight = {
  f0 : 0,
  f1 : 100,
  f2 : 200,
  f3 : 300,
  f4 : 400,
  f5 : 500,
  f6 : 600,
  f7 : 700,
  f8 : 800,
  f9 : 900,
  f10 : 1000,
};

//  8. font_family
//  -----------------------------------------------
const font_family = {
  regular: "Roboto-Regular",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
  thin: "Roboto-Thin",
};

//  9. icon_size
//  -----------------------------------------------
const icon_size = {
  f0 : 0,
  f1 : 10,
  f2 : 15,
  f3 : 20,
  f4 : 25,
  f5 : 30,
  f6 : 35,
  f7 : 40,
  f8 : 45,
  f9 : 50,
  f10 : 60,
};

//  10. border_thickness
//  -----------------------------------------------
const border_thickness = {
  f0 : 0.0,
  f1 : 0.5,
  f2 : 1,
  f3 : 1.5,
  f4 : 2,
  f5 : 2.5,
  f6 : 3,
  f7 : 3.5,
  f8 : 4,
  f9 : 4.5,
  f10 : 5,
};

//  11. radius_size
//  -----------------------------------------------
const radius_size = {
  f0 : 0,
  f1 : 2,
  f2 : 6,
  f3 : 8,
  f4 : 10,
  f5 : 15,
  f6 : 20,
  f7 : 30,
  f8 : 40,
  f9 : 50,
  f10 : 100
};

export {
  theme,
  spacing,
  font_size,
  font_discription,
  font_line_height,
  font_weight,
  font_family,
  icon_size,
  border_thickness,
  radius_size
};
