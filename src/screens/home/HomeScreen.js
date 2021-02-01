// React imports
import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
import Spacer from "../../components/shared/Spacer";
import Button from "../../components/shared/Button";
// Constants
import SCREENS from "../../constants/screenConstants";
// Global style sheet imports
import G from "../../../styles/import_globals";
// redux imports
import {connect} from 'react-redux';

const HomeScreen = ({navigation}) => {
  return (
    <Container flex={1} backgroundColor={G.theme.app.primary}>

    </Container>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);