// React imports
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {AppRegistry} from 'react-native';
// Custom Screens imports
import App from './App';
// Global styles
import G from './styles/import_globals';
// Config
import {name as appName} from './app.json';
// Redux
import store from './src/redux/store';
import {Provider} from "react-redux";

const NewAPP = () => {
    return (
    <>
    {/* Sets the color for the status bar */}
    <StatusBar barStyle="default" />
    {/* Sets the content below the statusbar */}
    <SafeAreaView style={styles.safeArea}>
        {/* Wraps the redux state to the app */}
        <Provider store={store}>
            <App/>
        </Provider>
    </SafeAreaView>
    </>
    )
}

// This object is used to style your components
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: G.theme.app.grey,
    }
  });
  

AppRegistry.registerComponent(appName, () => NewAPP);
