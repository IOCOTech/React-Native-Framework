// React
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
// Custom
import Container from "./src/components/shared/Container";
import StyledText from './src/components/shared/StyledText';
import Spacer from "./src/components/shared/Spacer";
import Button from "./src/components/shared/Button";
import G from "./styles/import_globals";
// redux
import {
  add,
  remove
} from './src/redux';
import {connect} from 'react-redux';

const App = ({add, remove, counter}) => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.safeArea}>
        <Container padding={G.Gutter.g24}>
        <Image 
          source={G.ImageUrl.ioco_logo}
          style={styles.logoStyles} />
        <Spacer meduim/>
        <StyledText bold f18 primary>Welcome to React Native ways of work framework.</StyledText>
        <Spacer meduim/>
        <StyledText regular f16 primary>This is just a start page that you can remove once you begin your project</StyledText>
        <Spacer small/>
        <StyledText regular f16 primary>
          The project contains folder structures, redux, style guides and a few components to get you started.
          Below is and example of a button working with Redux state managment.
        </StyledText>
        <Spacer large/>
        <Container alignItems={"center"} justifyContent={"space-between"} flexDirection={"row"}>
        <Button action={() => add()} title={"Add"}></Button>
        <Spacer meduim/>
        <StyledText bold f25 primary>{counter.count}</StyledText>
        <Spacer meduim/>
        <Button action={() => remove()} title={"Remove"}></Button>
        </Container>
        </Container>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: G.Gutter.g24
  },
  logoStyles: {
    height: 30,
    width: 100,
    resizeMode: "contain",
  }
});

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    remove: () => dispatch(remove()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
