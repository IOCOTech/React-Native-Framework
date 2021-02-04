// React imports
import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
// Shared Component imports
import StyledText from "./StyledText";

const Button = ({ 
  theme,
  loading, 
  testID, 
  title, 
  action=() => {}, 
  disabled }) => {

  const styles = {
    buttonPrimary: {
      backgroundColor: theme.app.color.secondary,
      borderRadius: theme.border.radius.f4,
      height: 50,
      minWidth: 100,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: theme.spacing.f5,
      borderWidth: 1,
      borderColor: theme.border.color.primary
    },
    disabled: {
      backgroundColor: theme.loader.color.secondary
    },
  };

  return (
    // Component start
    loading ? 
      <View style={[styles.buttonPrimary, {opacity: 0.6}, disabled ? styles.disabled : null]}>
        <ActivityIndicator size="large" color={theme.loader.color.primary} />
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
    <View style={[styles.buttonPrimary, disabled ? { backgroundColor: theme.app.color.grey, borderWidth: 0 } : null]}>
      <StyledText theme={theme} f5 primary regular>
        {title.toUpperCase()}
      </StyledText>
    </View>
    </TouchableOpacity>
    // Component end
  );
};

export default Button
