// React imports
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
// Custom Screens imports
import HomeScreen from "./src/screens/home/HomeScreen";

// redux imports
import {connect} from 'react-redux';

const App = () => {
  return (
    <>
      {/* Sets the color for the status bar */}
      <StatusBar barStyle="default" />
      {/* Sets the content below the statusbar */}
      <SafeAreaView style={styles.safeArea}>
        <HomeScreen/>
      </SafeAreaView>
    </>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  safeArea: {
    flex: 1
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
