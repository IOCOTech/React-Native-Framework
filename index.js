// React imports
import React from 'react';
import {AppRegistry} from 'react-native';
// Custom Screens imports
import App from './App';
// Config
import {name as appName} from './app.json';
// Redux
import store from './src/redux/store';
import {Provider} from "react-redux";

const NewAPP = () => {
    return (
      <Provider store={store}>
          <App/>
      </Provider>
    )
}

AppRegistry.registerComponent(appName, () => NewAPP);
