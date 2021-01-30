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
  primary: "#0f6987",
  secondary: "#333333",
  accent: "#ffcc00",
  white: "#ffffff",
  grey: "#eeeeee",
  black: "#000000",
}

const font_pallete = {
  primary: "#0f6987",
  secondary: "#333333",
  accent: "#ffcc00",
  white: "#ffffff",
  grey: "#eeeeee",
  black: "#000000",
}

const icon_pallete = {
  primary: "#0f6987",
  secondary: "#333333",
  accent: "#ffcc00",
  white: "#ffffff",
  grey: "#eeeeee",
  black: "#000000",
}

const loader_pallete = {
  primary: "#0f6987",
  secondary: "#333333",
  accent: "#ffcc00",
  white: "#ffffff",
  grey: "#eeeeee",
  black: "#000000",
}

const snackbar_pallete = {
  primary: "#0f6987",
  secondary: "#333333",
  accent: "#ffcc00",
  white: "#ffffff",
  grey: "#eeeeee",
  black: "#000000",
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
  f1 : 4,
  f2 : 8,
  f3 : 16,
  f4 : 24,
  f5 : 32,
  f6 : 40,
  f7 : 50,
  c3: 3,
  c10: 10
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
  f2 : 20,
  f3 : 30,
  f4 : 40,
  f5 : 50,
  f6 : 60,
  f7 : 70,
  f8 : 80,
  f9 : 90,
  f10 : 100,
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
