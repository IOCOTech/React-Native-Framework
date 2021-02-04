// React imports
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
// redux imports
import {connect} from 'react-redux';

const ResultsScreen = ({navigation, theme}) => {
  return (
    <>
    {/* Custom component similar to a View but with props for styling */}
    <Container flex={1} backgroundColor={theme.app.color.primary} alignItems={"center"} justifyContent={"center"}>
        <StyledText theme={theme} bold f6 primary center>Results Screen</StyledText>
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
    theme: state.theme
  }
}

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);