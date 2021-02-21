// React imports
import React, {useContext} from 'react';
import {View} from 'react-native';
// Context
import ThemeContext from '../../context/ThemeContext';

const Spacer = ({xxsmall, xsmall, small, medium, large, xlarge, xxlarge}) => {
  const {theme} = useContext(ThemeContext);
  // Local functions
  let space = theme.spacing.f4;

  // Local conditionals
  if (xxsmall) {
    space = theme.spacing.f1;
  }
  if (xsmall) {
    space = theme.spacing.f2;
  }
  if (small) {
    space = theme.spacing.f3;
  }
  if (medium) {
    space = theme.spacing.f4;
  }
  if (large) {
    space = theme.spacing.f5;
  }
  if (xlarge) {
    space = theme.spacing.f6;
  }
  if (xxlarge) {
    space = theme.spacing.f7;
  }

  return (
    // Component start
    <View style={{height: space, width: space}}></View>
    // Component end
  );
};

export default Spacer;
