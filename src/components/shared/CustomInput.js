// React imports
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
// Context
import ThemeContext from '../../context/ThemeContext';
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const CustomInput = ({placeholder, iconName, onChangeText}) => {
  const {theme} = useContext(ThemeContext);
  const styles = localStyles(theme);

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

// This object is used to style your components
const localStyles = (theme) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: theme.border.color.primary,
      paddingHorizontal: theme.spacing.f4,
      borderRadius: theme.border.radius.f4,
    },
  });

export default CustomInput;
