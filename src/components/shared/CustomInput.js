// React imports
import React from "react";
import { StyleSheet } from "react-native";
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
// Global imports
import G from "../../../styles/import_globals";

const CustomInput = ({ 
  placeholder,
  iconName,
  onChangeText, 
   }) => {
  return (
    // Component start
      <Input
      onChangeText={onChangeText}
      containerStyle={{paddingHorizontal: 0}}
      inputContainerStyle={styles.container}
      placeholder={placeholder}
      placeholderTextColor={G.theme.app.offWhite}
      color={G.theme.app.white}
      leftIcon={
        <Icon
          name={iconName}
          size={G.icon_size.f4}
          color={G.theme.icon.white}
        />
      }
    />
    // Component end
  );
};

// custom styles for this element
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: G.theme.app.white,
    paddingHorizontal: G.spacing.f4,
    borderRadius: G.radius_size.f4,
  }
});

export default CustomInput;
