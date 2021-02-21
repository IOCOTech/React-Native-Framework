// React imports
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Custom Screens imports
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
// Context
import ThemeContext from '../context/ThemeContext';
// Constants
import SCREENS from '../constants/ScreenConstants';
// redux imports
import {connect} from 'react-redux';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
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
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          ...screenOptions,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.PROFILE);
              }}>
              <Icon
                name="user"
                color={theme.icon.color.white}
                size={theme.icon.size.f3}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name={SCREENS.PROFILE}
        component={ProfileScreen}
        options={screenOptions}
      />
    </HomeStack.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackScreen);
