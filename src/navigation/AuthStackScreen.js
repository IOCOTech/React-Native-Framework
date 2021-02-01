// React imports
import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
// Global
import G from '../../styles/import_globals';
import S from "../../styles/import_global_styles"; 
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { createStackNavigator } from "@react-navigation/stack";
// Custom Screens imports
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
// Constants
import SCREENS from "../constants/screenConstants";

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => {
    return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={SCREENS.LOGIN} component={LoginScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
    );
  };

export default AuthStackScreen