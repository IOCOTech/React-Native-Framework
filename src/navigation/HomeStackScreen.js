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
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/home/ProfileScreen";
// Constants
import SCREENS from "../constants/screenConstants";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name={SCREENS.HOME} component={HomeScreen} options={{...S.screenOptions,
        headerRight: () => (
          <TouchableOpacity onPress={() => {navigation.navigate(SCREENS.PROFILE)}}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f3} />
          </TouchableOpacity>
        )
        }}/>
        <HomeStack.Screen name={SCREENS.PROFILE} component={ProfileScreen} options={S.screenOptions}/>
      </HomeStack.Navigator>
    );
  };

export default HomeStackScreen