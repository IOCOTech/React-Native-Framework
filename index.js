// React imports
import React from 'react';
import {AppRegistry} from 'react-native';
// Custom Screens imports
import App from './App';
// Context
import {ThemeProvider} from './src/context/ThemeContext';
// Config
import {name as appName} from './app.json';
// Redux
import store from './src/redux/store';
import {Provider} from 'react-redux';

const NewAPP = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => NewAPP);
