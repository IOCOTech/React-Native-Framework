// React imports
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// Global
import G from './styles/import_globals';
// Custom Screens imports
import LoginScreen from "./src/screens/auth/LoginScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import DetailsScreen from "./src/screens/home/DetailsScreen";
import SearchScreen from "./src/screens/search/SearchScreen";
import ResultsScreen from "./src/screens/search/ResultsScreen";
import ShopScreen from "./src/screens/shop/ShopScreen";
import ProductScreen from "./src/screens/shop/ProductScreen";
// redux imports
import {connect} from 'react-redux';
// Constants
import SCREENS from "./src/constants/screenConstants";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ShopStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={SCREENS.HOME} component={HomeScreen}/>
      <HomeStack.Screen name={SCREENS.DETAILS} component={DetailsScreen}/>
    </HomeStack.Navigator>
  );
};

const ShopStackScreen = () => {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name={SCREENS.SHOP} component={ShopScreen}/>
      <SearchStack.Screen name={SCREENS.PRODUCT} component={ProductScreen}/>
    </ShopStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={SCREENS.SEARCH} component={SearchScreen}/>
      <SearchStack.Screen name={SCREENS.RESULTS} component={ResultsScreen}/>
    </SearchStack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator tabBarOptions={{style: styles.bottomTabs}}>
        <Tabs.Screen name={SCREENS.HOME} component={HomeStackScreen}/>
        <Tabs.Screen name={SCREENS.SHOP} component={ShopStackScreen}/>
        <Tabs.Screen name={SCREENS.SEARCH} component={SearchStackScreen}/>
      </Tabs.Navigator>
      {/* <AuthStack.Navigator>
        <AuthStack.Screen name={SCREENS.LOGIN} component={LoginScreen} options={{title: "Login"}}/>
        <AuthStack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} options={{title: "Sign up"}}/>
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  bottomTabs: {
    backgroundColor: G.theme.app.secondary,
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
