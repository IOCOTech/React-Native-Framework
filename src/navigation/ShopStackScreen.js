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
import ShopScreen from "../screens/shop/ShopScreen";
import ProductScreen from "../screens/shop/ProductScreen";
// Constants
import SCREENS from "../constants/screenConstants";

const ShopStack = createStackNavigator();

const ShopStackScreen = ({navigation}) => {
    return (
      <ShopStack.Navigator>
        <ShopStack.Screen name={SCREENS.SHOP} component={ShopScreen} options={S.screenOptions}/>
        <ShopStack.Screen name={SCREENS.PRODUCT} component={ProductScreen} options={S.screenOptions}/>
      </ShopStack.Navigator>
    );
  };

export default ShopStackScreen