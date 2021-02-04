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
// Constants
import SCREENS from "../../constants/screenConstants";
// redux imports
import {connect} from 'react-redux';

const SearchScreen = ({navigation, theme}) => {
  return (
    <>
    {/* Custom component similar to a View but with props for styling */}
    <Container flex={1} backgroundColor={theme.app.color.primary} alignItems={"center"} justifyContent={"center"}>
        <StyledText bold f6 secondary center>Search Screen</StyledText>
        <Spacer theme={theme} medium/>
        <Button theme={theme} title={"Results"} action={() => navigation.push(SCREENS.RESULTS)}/>
        <Spacer theme={theme} medium/>
        <Button theme={theme} title={"Home profile"} action={() => navigation.navigate(SCREENS.HOME, {
          screen: SCREENS.PROFILE,
          params: { name: "data"}
        })}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);