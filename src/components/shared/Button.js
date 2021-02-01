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
  disabled }) => {
  return (
    // Component start
    loading ? 
      <View style={[styles.buttonPrimary, {opacity: 0.6}, disabled ? styles.disabled : null]}>
        <ActivityIndicator size="large" color={G.theme.loader.white} />
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
    <View style={[styles.buttonPrimary, disabled ? { backgroundColor: G.theme.app.grey, borderWidth: 0 } : null]}>
      <StyledText f5 white regular>
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
    backgroundColor: G.theme.app.secondary,
    borderRadius: G.radius_size.f4,
    height: 50,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: G.spacing.f5,
    borderWidth: 1,
    borderColor: G.theme.app.white
  },
  disabled: {
    backgroundColor: G.theme.loader.secondary
  },
});

export default Button;
