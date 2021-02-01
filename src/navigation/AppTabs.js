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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Navigation Stacks
import HomeStackScreen from "./HomeStackScreen";
import ShopStackScreen from "./ShopStackScreen";
import SearchStackScreen from "./SearchStackScreen";
// Constants
import SCREENS from "../constants/screenConstants";

const Tabs = createBottomTabNavigator();

const AppTabs = ({navigation}) => {
    return (
      <Tabs.Navigator tabBarOptions={S.tabBarOptions}>
        <Tabs.Screen name={SCREENS.HOME} component={HomeStackScreen} options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={G.icon_size.f3} />
          )}}/>
        <Tabs.Screen name={SCREENS.SHOP} component={ShopStackScreen} options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={G.icon_size.f3} />
          )}}/>
        <Tabs.Screen name={SCREENS.SEARCH} component={SearchStackScreen} options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={G.icon_size.f3} />
          )}}/>
      </Tabs.Navigator>
    );
  };

export default AppTabs