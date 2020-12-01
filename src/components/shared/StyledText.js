// React imports
import React from "react";
import { Text, StyleSheet } from "react-native";
// Global imports
import G from "../../../styles/import_globals";


const StyledText = props => {
  return (
    // Component start
    <Text style={[
      props.f32 ? { fontSize: G.TextSize.f32} : null,
      props.f31 ? { fontSize: G.TextSize.f31} : null,
      props.f30 ? { fontSize: G.TextSize.f30} : null,
      props.f29 ? { fontSize: G.TextSize.f29} : null,
      props.f28 ? { fontSize: G.TextSize.f28} : null,
      props.f27 ? { fontSize: G.TextSize.f27} : null,
      props.f26 ? { fontSize: G.TextSize.f26} : null,
      props.f25 ? { fontSize: G.TextSize.f25} : null,
      props.f24 ? { fontSize: G.TextSize.f24} : null,
      props.f23 ? { fontSize: G.TextSize.f23} : null,
      props.f22 ? { fontSize: G.TextSize.f22} : null,
      props.f21 ? { fontSize: G.TextSize.f21} : null,
      props.f20 ? { fontSize: G.TextSize.f20} : null,
      props.f19 ? { fontSize: G.TextSize.f19} : null,
      props.f18 ? { fontSize: G.TextSize.f18} : null,
      props.f17 ? { fontSize: G.TextSize.f17} : null,
      props.f16 ? { fontSize: G.TextSize.f16} : null,
      props.f15 ? { fontSize: G.TextSize.f15} : null,
      props.f14 ? { fontSize: G.TextSize.f14} : null,
      props.f13 ? { fontSize: G.TextSize.f13} : null,
      props.f12 ? { fontSize: G.TextSize.f12} : null,
      props.f11 ? { fontSize: G.TextSize.f11} : null,
      props.f10 ? { fontSize: G.TextSize.f10} : null,
      props.f9 ? { fontSize: G.TextSize.f9} : null,
      props.f8 ? { fontSize: G.TextSize.f8} : null,
      props.white ? { color: G.Palette.textWhite } : null,
      props.alert ? { color: G.Palette.textAlert } : null,
      props.accent ? { color: G.Palette.textAccent } : null,
      props.secondaryDark ? { color: G.Palette.textSecondaryDark } : null,
      props.secondaryLight ? { color: G.Palette.textSecondaryLight } : null,
      props.secondary ? { color: G.Palette.textSecondary } : null,
      props.primary ? { color: G.Palette.textPrimary } : null,
      props.bold ? { fontFamily: G.Font.bold } : null,
      props.medium ? { fontFamily: G.Font.medium } : null,
      props.regular ? { fontFamily: G.Font.regular } : null,
      props.center ? { textAlign: "center" } : null,
      props.right ? { textAlign: "right" } : null,
      props.italic ? { fontStyle: "italic" } : null,
      { ...props.style }
    ]}>
      {props.children}
    </Text>
    // Component end
  );
};

const styles = StyleSheet.create({});

export default StyledText;
