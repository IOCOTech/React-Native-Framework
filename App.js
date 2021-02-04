// React imports
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
// Custom Screens imports
import SplashScreen from "./src/screens/splash/SplashScreen";
// redux imports
import { checkAuth, setAppTheme } from "./src/redux";
import {connect} from 'react-redux';
// constants
import THEME from "./src/constants/themeConstants";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
// Navigation Stacks
import AuthStackScreen from "./src/navigation/AuthStackScreen";
// Navigation Tabs
import AppTabs from "./src/navigation/AppTabs";

const App = ({auth ,checkAuth, setAppTheme}) => {

  useEffect(() => {
    setAppTheme(THEME.GENERIC);

    setTimeout(() => {
      checkAuth(true)
    }, 1000);
  },[]);

  if(auth.loading) {
    return (
      <>
        <StatusBar barStyle="default" />
        <SafeAreaView style={styles.safeArea}>
          <SplashScreen/>
        </SafeAreaView>
      </>
    )
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          {auth.token ? 
            <AppTabs/>
            :
            <AuthStackScreen />
          }
        </NavigationContainer>
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
    auth: state.auth,
  }
}

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: success => dispatch(checkAuth(success)),
    setAppTheme: theme => dispatch(setAppTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
