// React imports
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
import Button from "../../components/shared/Button";
import Spacer from "../../components/shared/Spacer";
// Global style sheet imports
import G from "../../../styles/import_globals";
// Constants
import SCREENS from "../../constants/screenConstants";
// redux imports
import {connect} from 'react-redux';

const LoginScreen = ({navigation}) => {
  return (
    <>
    {/* Custom component similar to a View but with props for styling */}
    <Container flex={1}  alignItems={"center"} justifyContent={"center"} padding={G.spacing.f5}>
        <Spacer medium/>
        <Button title={"Login"} action={() => navigation.push(SCREENS.SIGN_UP)}/>
        <Spacer medium/>
        <Button title={"Sign up"} action={() => navigation.push(SCREENS.SIGN_UP)}/>
    </Container>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);