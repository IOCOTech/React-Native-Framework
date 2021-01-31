// React imports
import React from "react";
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
// Global imports
import G from "../../../styles/import_globals";
// Shared Component imports
import StyledText from "./StyledText";

const Button = ({ 
  loading, 
  testID, 
  title, 
  action=() => {}, 
  buttonStyle, 
  disabled }) => {
  return (
    // Component start
    loading ? 
      <View style={[styles.buttonPrimary, {opacity: 0.6}, disabled ? styles.disabled : null]}>
        <ActivityIndicator size="large" color={G.theme.loader.secondary} />
      </View>
      :
    <TouchableOpacity
    accessible={true}
    testID={testID}
    accessibilityLabel={testID}
    disabled={disabled}
    activeOpacity={0.6}
        onPress={() => {
          action();
        }}
      >
    <View style={[styles.buttonPrimary, {...buttonStyle}, disabled ? { backgroundColor: G.theme.app.grey, borderWidth: 0 } : null]}>
      <StyledText f4 secondary bold>
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
    height: 40,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: G.spacing.f5
  },
  disabled: {
    backgroundColor: G.theme.loader.secondary
  },
});

export default Button;
