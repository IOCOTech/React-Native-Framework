// React imports
import React from "react";
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const CustomInput = ({ 
  placeholder,
  iconName,
  onChangeText, 
  theme
   }) => {

  const styles = {
    container: {
      borderWidth: 1,
      borderColor: theme.border.color.primary,
      paddingHorizontal: theme.spacing.f4,
      borderRadius: theme.border.radius.f4,
    }
  }

  return (
    // Component start
      <Input
      onChangeText={onChangeText}
      containerStyle={{paddingHorizontal: 0}}
      inputContainerStyle={styles.container}
      placeholder={placeholder}
      placeholderTextColor={theme.app.color.offWhite}
      color={theme.font.color.primary}
      leftIcon={
        <Icon
          name={iconName}
          size={theme.icon.size.f4}
          color={theme.icon.color.primary}
        />
      }
    />
    // Component end
  );
};


export default CustomInput;