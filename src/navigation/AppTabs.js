// React imports
import React, {useContext} from 'react';
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Navigation Stacks
import HomeStackScreen from './HomeStackScreen';
import ShopStackScreen from './ShopStackScreen';
import SearchStackScreen from './SearchStackScreen';
// Context
import ThemeContext from '../context/ThemeContext';
// Constants
import SCREENS from '../constants/ScreenConstants';
// redux imports
import {connect} from 'react-redux';

const Tabs = createBottomTabNavigator();

const AppTabs = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  const tabBarOptions = {
    style: {
      backgroundColor: theme.app.color.primary,
      borderTopWidth: 0,
      elevation: 0,
      height: 65,
    },
    tabStyle: {},
    activeTintColor: theme.app.color.accent,
    inactiveTintColor: theme.icon.color.primary,
    showLabel: false,
    keyboardHidesTabBar: true,
  };

  return (
    <Tabs.Navigator tabBarOptions={tabBarOptions}>
      <Tabs.Screen
        name={SCREENS.HOME}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={theme.icon.size.f3} />
          ),
        }}
      />
      <Tabs.Screen
        name={SCREENS.SHOP}
        component={ShopStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="shopping-cart"
              color={color}
              size={theme.icon.size.f3}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={SCREENS.SEARCH}
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={theme.icon.size.f3} />
          ),
        }}
      />
    </Tabs.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppTabs);
