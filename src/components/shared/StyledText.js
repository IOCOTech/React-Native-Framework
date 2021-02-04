// React imports
import React from "react";
import { Text } from "react-native";

const StyledText = ({
  style, 
  children, 
  f0,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  f10,
  success,
  warning,
  error,
  black,
  white,
  offWhite,
  accent,
  grey,
  secondary,
  primary,
  bold,
  medium,
  regular,
  thin,
  center,
  right,
  italic,
  theme
}) => {
  return (
    // Component start
    <Text style={[
      f0 ? { fontSize: theme.font.size.f0} : null,
      f1 ? { fontSize: theme.font.size.f1} : null,
      f2 ? { fontSize: theme.font.size.f2} : null,
      f3 ? { fontSize: theme.font.size.f3} : null,
      f4 ? { fontSize: theme.font.size.f4} : null,
      f5 ? { fontSize: theme.font.size.f5} : null,
      f6 ? { fontSize: theme.font.size.f6} : null,
      f7 ? { fontSize: theme.font.size.f7} : null,
      f8 ? { fontSize: theme.font.size.f8} : null,
      f9 ? { fontSize: theme.font.size.f9} : null,
      f10 ? { fontSize: theme.font.size.f10} : null,
      success ? { color: theme.font.color.success } : null,
      warning ? { color: theme.font.color.warning } : null,
      error ? { color: theme.font.color.error } : null,
      black ? { color: theme.font.color.black } : null,
      white ? { color: theme.font.color.white } : null,
      accent ? { color: theme.font.color.accent } : null,
      grey ? { color: theme.font.color.grey } : null,
      offWhite ? { color: theme.font.color.offWhite } : null,
      secondary ? { color: theme.font.color.secondary } : null,
      primary ? { color: theme.font.color.primary } : null,
      bold ? { fontFamily: theme.font.family.bold } : null,
      medium ? { fontFamily: theme.font.family.medium } : null,
      regular ? { fontFamily: theme.font.family.regular } : null,
      thin ? { fontFamily: theme.font.family.thin } : null,
      center ? { textAlign: "center" } : null,
      right ? { textAlign: "right" } : null,
      italic ? { fontStyle: "italic" } : null,
      { ...style }
    ]}>
      {children}
    </Text>
    // Component end
  );
};


export default StyledText;
