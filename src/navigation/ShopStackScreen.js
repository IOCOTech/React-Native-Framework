// React imports
import React, {useContext} from 'react';
// Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Custom Screens imports
import ShopScreen from '../screens/shop/ShopScreen';
import ProductScreen from '../screens/shop/ProductScreen';
// Context
import ThemeContext from '../context/ThemeContext';
// Constants
import SCREENS from '../constants/ScreenConstants';
// redux imports
import {connect} from 'react-redux';

const ShopStack = createStackNavigator();

const ShopStackScreen = ({navigation}) => {
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
    <ShopStack.Navigator>
      <ShopStack.Screen
        name={SCREENS.SHOP}
        component={ShopScreen}
        options={screenOptions}
      />
      <ShopStack.Screen
        name={SCREENS.PRODUCT}
        component={ProductScreen}
        options={screenOptions}
      />
    </ShopStack.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopStackScreen);
