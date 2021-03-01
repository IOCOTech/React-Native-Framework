// React imports
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Comp = () => {
  return (
    // Component start
    <>
      <View styles={styles.box}></View>
      <View styles={{backgroundColor: '#FFFFFF'}}></View>
    </>
    // Component end
  );
};

// This object is used to style your components
const localStyles = StyleSheet.create({
  box: {
    backgroundColor: '#FFFFFF',
  },
});

export default Comp;
