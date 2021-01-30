// React imports
import React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
import Spacer from "../../components/shared/Spacer";
import Button from "../../components/shared/Button";
// Global style sheet imports
import G from "../../../styles/import_globals";
// redux imports
import {
  add,
  remove
} from '../../redux';
import {connect} from 'react-redux';

const HomeScreen = ({add, remove, counter}) => {
  return (
    <>
    {/* Custom component similar to a View but with props for styling */}
    <Container padding={G.spacing.f5}>
        {/* Ioco logo */}
        <Image 
        source={G.image_urls.ioco_logo}
        style={styles.logoStyles} />
        {/* Custom component to create a space */}
        <Spacer meduim/>
        {/* Custom component to style text */}
        <StyledText bold f6 secondary>Welcome to React Native ways of work framework.</StyledText>
        <Spacer meduim/>
        <StyledText regular f5 secondary>This is a demo page that you can remove once you begin your project.</StyledText>
        <Spacer small/>
        <StyledText regular f5 secondary>
        The project contains folder structures, redux, style guides and a few components to get you started.
        Below is and example of a button working with Redux state managment.
        </StyledText>
        <Spacer large/>
        <Container alignItems={"center"} justifyContent={"space-between"} flexDirection={"row"}>
        {/* Custom component that acts like a button */}
        <Button action={() => add()} title={"Add"}></Button>
        <Spacer meduim/>
        <StyledText bold f8 primary>{counter.count}</StyledText>
        <Spacer meduim/>
        <Button action={() => remove()} title={"Remove"}></Button>
        </Container>
    </Container>
    </>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  logoStyles: {
    height: 30,
    width: 100,
    resizeMode: "contain",
  }
});

// Mapping the redux state to props
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    remove: () => dispatch(remove()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);