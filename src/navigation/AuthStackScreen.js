// React imports
import React from 'react';
import {
  TouchableOpacity
} from 'react-native'; 
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { createStackNavigator } from "@react-navigation/stack";
// Custom Screens imports
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
// Constants
import SCREENS from "../constants/screenConstants";
// redux imports
import {connect} from 'react-redux';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation, theme}) => {

  const screenOptions = {
    headerTitleAlign: "center",
    headerStyle: { 
      backgroundColor: theme.app.color.primary,
      borderBottomWidth: 0,
      elevation: 0,
      height: 65
    },
    headerTitleStyle: {
      color: theme.font.color.white,
      fontSize: theme.font.size.f6
    },
    headerRightContainerStyle: {
      paddingRight: theme.spacing.f5
    },
    headerTintColor: theme.app.color.primary
  } 

    return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={SCREENS.LOGIN} component={LoginScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
    );
  };

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

export default connect(mapStateToProps, mapDispatchToProps)(AuthStackScreen);