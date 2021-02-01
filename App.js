// React imports
import React, {useEffect} from 'react';
import {
  StyleSheet,
} from 'react-native';
// Global
import G from './styles/import_globals';
import S from "./styles/import_global_styles"; 
// Custom Screens imports
import SplashScreen from "./src/screens/splash/SplashScreen";
// redux imports
import { checkAuth } from "./src/redux";
import {connect} from 'react-redux';
// Navigation
import { NavigationContainer } from "@react-navigation/native";
// Navigation Stacks
import AuthStackScreen from "./src/navigation/AuthStackScreen";
// Navigation Tabs
import AppTabs from "./src/navigation/AppTabs";

const App = ({auth ,checkAuth}) => {

  useEffect(() => {
    setTimeout(() => {
      checkAuth(true)
    }, 1000);
  },[]);

  if(auth.loading) {
    return (
      <SplashScreen/>
    )
  }

  return (
    <NavigationContainer>
      {auth.token ? 
        <AppTabs/>
        :
        <AuthStackScreen />
      }
    </NavigationContainer>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
});

// Mapping the redux state to props
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: success => dispatch(checkAuth(success))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
