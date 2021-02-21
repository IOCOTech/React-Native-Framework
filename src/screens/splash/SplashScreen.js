// React imports
import React, {useContext} from 'react';
import {StyleSheet, Image} from 'react-native';
// Custom component imports
import Container from '../../components/shared/Container';
// redux imports
import {connect} from 'react-redux';
// Context
import ThemeContext from '../../context/ThemeContext';

const SplashScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = localStyles(theme);
  return (
    <Container
      flex={1}
      backgroundColor={theme.app.color.primary}
      alignItems={'center'}
      justifyContent={'center'}>
      <Image style={styles.logoImg} source={theme.image.logo} />
    </Container>
  );
};

// This object is used to style your components
const localStyles = (theme) =>
  StyleSheet.create({
    imageBg: {
      flex: 1,
      resizeMode: 'cover',
    },
    logoImg: {
      width: 100,
      height: 60,
      resizeMode: 'contain',
    },
  });

// Mapping the redux state to props
const mapStateToProps = (state) => {
  return {};
};

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
