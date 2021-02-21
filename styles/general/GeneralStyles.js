import {StyleSheet} from 'react-native';

const generalStyles = (theme) =>
  StyleSheet.create({
    test: {
      backgroundColor: theme.app.color.error,
    },
  });

export {generalStyles};
