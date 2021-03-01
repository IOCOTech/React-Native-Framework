// React imports
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
// Context
import ThemeContext from '../../context/ThemeContext';

const CompWithTheme = () => {
  const {theme} = useContext(ThemeContext);
  const styles = localStyles(theme);

  return (
    // Component start
    <>
      <View styles={styles.box}></View>
      <View styles={{backgroundColor: theme.app.color.primary}}></View>
    </>
    // Component end
  );
};

// This object is used to style your components
const localStyles = (theme) =>
  StyleSheet.create({
    box: {
      backgroundColor: theme.app.color.primary,
    },
  });

export default CompWithTheme;
