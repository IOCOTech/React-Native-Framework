// React imports
import React from "react";
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
// Global imports
import G from "../../../styles/import_globals";
// Shared Component imports
import StyledText from "./StyledText";

const Button = ({ 
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
        <View style={[secondary ? styles.buttonSecondary : styles.buttonPrimary, {opacity: 0.6}, {...loadingButtonStyle}, disabled ? { backgroundColor: G.theme.loader.primary } : null]}>
          <ActivityIndicator size="large" color={G.theme.loader.primary} />
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
    <View style={[secondary ? styles.buttonSecondary : styles.buttonPrimary, {...buttonStyle}, disabled ? { backgroundColor: G.theme.app.grey, borderWidth: 0 } : null]}>
      <StyledText f6 secondary bold>
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
    backgroundColor: G.theme.app.accent,
    borderRadius: G.radius_size.f5,
    flex: 1,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: G.spacing.f2
  },
  buttonSecondary: {
    backgroundColor: G.theme.app.white,
    borderColor: G.theme.app.primary,
    borderWidth: 2,
    borderRadius: G.radius_size.f5,
    flex: 1,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: G.spacing.f2
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  }
});

export default Button;
