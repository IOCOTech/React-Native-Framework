// React imports
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
// Custom Screens imports
import SplashScreen from './src/screens/splash/SplashScreen';
// redux imports
import {checkAuth} from './src/redux';
import {connect} from 'react-redux';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
// Navigation Stacks
import AuthStackScreen from './src/navigation/AuthStackScreen';
// Navigation Tabs
import AppTabs from './src/navigation/AppTabs';

const App = ({auth, checkAuth}) => {
  useEffect(() => {
    setTimeout(() => {
      // true or false to see the login screen
      checkAuth(true);
    }, 1000);
  }, []);

  if (auth.loading) {
    return (
      <>
        <StatusBar barStyle="default" />
        <SafeAreaView style={styles.safeArea}>
          <SplashScreen />
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          {auth.token ? <AppTabs /> : <AuthStackScreen />}
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

// Mapping the redux state to props
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: (success) => dispatch(checkAuth(success)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
