// React imports
import React from "react";
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
// Global imports
import G from "../../../styles/import_globals";
// Shared Component imports
import StyledText from "./StyledText";

const ButtonPrimary = ({ 
  loading, 
  forColumn,
  testID, 
  title, 
  action=() => {}, 
  outerContainerStyle, 
  loadingOuterContainerStyle,
  buttonStyle, 
  loadingButtonStyle,
  secondary,
  disabled }) => {
  return (
    // Component start
    loading ? 
      <View style={[styles.container, forColumn ? {flex: 0} : null, {...loadingOuterContainerStyle}]}>
        <View style={[secondary ? styles.buttonSecondary : styles.buttonPrimary, {opacity: 0.6}, {...loadingButtonStyle}, disabled ? { backgroundColor: G.Palette.appSecondaryMidLight } : null]}>
          <ActivityIndicator size="large" color={G.Palette.loaderPrimary} />
        </View>
      </View>
      :
    <TouchableOpacity
    accessible={true}
    testID={testID}
    accessibilityLabel={testID}
    disabled={disabled}
    activeOpacity={0.6}
    style={[styles.container,forColumn ? {flex: 0} : null, {...outerContainerStyle}]}
        onPress={() => {
          action();
        }}
      >
    <View style={[secondary ? styles.buttonSecondary : styles.buttonPrimary, {...buttonStyle}, disabled ? { backgroundColor: G.Palette.appSecondaryMidLight, borderWidth: 0 } : null]}>
      <StyledText f12 primary bold>
        {title.toUpperCase()}
      </StyledText>
    </View>
    </TouchableOpacity>
    // Component end
  );
};

// custom styles for this element
const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: G.Palette.appAccent,
    borderRadius: G.RadiusSize.r100,
    flex: 1,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: G.Gutter.g8
  },
  buttonSecondary: {
    backgroundColor: G.Palette.appWhite,
    borderColor: G.Palette.appPrimary,
    borderWidth: 2,
    borderRadius: G.RadiusSize.r100,
    flex: 1,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: G.Gutter.g8
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  }
});

export default ButtonPrimary;