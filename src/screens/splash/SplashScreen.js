// React imports
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
import Spacer from "../../components/shared/Spacer";
// Global style sheet imports
import G from "../../../styles/import_globals";
// redux imports
import {connect} from 'react-redux';

const SplashScreen = ({navigation}) => {
  return (
      <Container flex={1} backgroundColor={G.theme.app.primary} alignItems={"center"} justifyContent={"center"} padding={G.spacing.f5}>
          <Image style={styles.logoImg} source={G.image_urls.logo}/>
      </Container>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    resizeMode: "cover",
  },
  logoImg: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  }
});

// Mapping the redux state to props
const mapStateToProps = state => {
  return {
  }
}

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);