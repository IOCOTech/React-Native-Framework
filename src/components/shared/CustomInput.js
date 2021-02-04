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
      borderColor: theme.app.color.white,
      paddingHorizontal: theme.spacing.f4,
      borderRadius: theme.border.rauis.f4,
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
      color={theme.app.color.white}
      leftIcon={
        <Icon
          name={iconName}
          size={theme.icon.size.f4}
          color={theme.icon.color.white}
        />
      }
    />
    // Component end
  );
};


export default CustomInput;