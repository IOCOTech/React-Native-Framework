// React imports
import React from "react";
import { Text, StyleSheet } from "react-native";
// Global imports
import G from "../../../styles/import_globals";


const StyledText = props => {
  return (
    // Component start
    <Text style={[
      props.f0 ? { fontSize: G.font_size.f0} : null,
      props.f1 ? { fontSize: G.font_size.f1} : null,
      props.f2 ? { fontSize: G.font_size.f2} : null,
      props.f3 ? { fontSize: G.font_size.f3} : null,
      props.f4 ? { fontSize: G.font_size.f4} : null,
      props.f5 ? { fontSize: G.font_size.f5} : null,
      props.f6 ? { fontSize: G.font_size.f6} : null,
      props.f7 ? { fontSize: G.font_size.f7} : null,
      props.f8 ? { fontSize: G.font_size.f8} : null,
      props.f9 ? { fontSize: G.font_size.f9} : null,
      props.f10 ? { fontSize: G.font_size.f10} : null,
      props.white ? { color: G.theme.font.white } : null,
      props.accent ? { color: G.theme.font.accent } : null,
      props.secondary ? { color: G.theme.font.secondary } : null,
      props.primary ? { color: G.theme.font.primary } : null,
      props.bold ? { fontFamily: G.font_family.bold } : null,
      props.medium ? { fontFamily: G.font_family.medium } : null,
      props.regular ? { fontFamily: G.font_family.regular } : null,
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
