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
import SearchScreen from "../screens/search/SearchScreen";
import ResultsScreen from "../screens/search/ResultsScreen";
// Constants
import SCREENS from "../constants/screenConstants";

const SearchStack = createStackNavigator();

const SearchStackScreen = ({navigation}) => {
    return (
      <SearchStack.Navigator>
        <SearchStack.Screen name={SCREENS.SEARCH} component={SearchScreen} options={S.screenOptions}/>
        <SearchStack.Screen name={SCREENS.RESULTS} component={ResultsScreen} options={S.screenOptions}/>
      </SearchStack.Navigator>
    );
  };

export default SearchStackScreen