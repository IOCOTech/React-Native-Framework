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
import ShopScreen from "../screens/shop/ShopScreen";
import ProductScreen from "../screens/shop/ProductScreen";
// Constants
import SCREENS from "../constants/screenConstants";
// redux imports
import {connect} from 'react-redux';

const ShopStack = createStackNavigator();

const ShopStackScreen = ({navigation, theme}) => {

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
      <ShopStack.Navigator>
        <ShopStack.Screen name={SCREENS.SHOP} component={ShopScreen} options={screenOptions}/>
        <ShopStack.Screen name={SCREENS.PRODUCT} component={ProductScreen} options={screenOptions}/>
      </ShopStack.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopStackScreen);

