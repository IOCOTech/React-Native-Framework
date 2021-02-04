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
import SearchScreen from "../screens/search/SearchScreen";
import ResultsScreen from "../screens/search/ResultsScreen";
// Constants
import SCREENS from "../constants/screenConstants";
// redux imports
import {connect} from 'react-redux';


const SearchStack = createStackNavigator();

const SearchStackScreen = ({navigation, theme}) => {

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
    headerTintColor: theme.app.color.white
  } 

    return (
      <SearchStack.Navigator>
        <SearchStack.Screen name={SCREENS.SEARCH} component={SearchScreen} options={screenOptions}/>
        <SearchStack.Screen name={SCREENS.RESULTS} component={ResultsScreen} options={screenOptions}/>
      </SearchStack.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchStackScreen);

