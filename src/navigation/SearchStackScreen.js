// React imports
import React, {useContext} from 'react';
// Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Custom Screens imports
import SearchScreen from '../screens/search/SearchScreen';
import ResultsScreen from '../screens/search/ResultsScreen';
// Context
import ThemeContext from '../context/ThemeContext';
// Constants
import SCREENS from '../constants/screenConstants';
// redux imports
import {connect} from 'react-redux';

const SearchStack = createStackNavigator();

const SearchStackScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  const screenOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: theme.app.color.primary,
      borderBottomWidth: 0,
      elevation: 0,
      height: 65,
    },
    headerTitleStyle: {
      color: theme.font.color.primary,
      fontSize: theme.font.size.f6,
    },
    headerRightContainerStyle: {
      paddingRight: theme.spacing.f5,
    },
    headerTintColor: theme.icon.color.primary,
  };

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={screenOptions}
      />
      <SearchStack.Screen
        name={SCREENS.RESULTS}
        component={ResultsScreen}
        options={screenOptions}
      />
    </SearchStack.Navigator>
  );
};

// Mapping the redux state to props
const mapStateToProps = (state) => {
  return {};
};

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchStackScreen);
