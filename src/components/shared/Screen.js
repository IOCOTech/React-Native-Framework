// React imports
import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from "react-native";
// Global imports
import G from "../../../styles/import_globals";
// Thirdparty components imports
import SafeAreaView from 'react-native-safe-area-view';

const Screen = props => {
  if (props.keyboard) {
    return (
      // Component start
      <SafeAreaView style={styles.safeArea} forceInset={{ top: 'always' }}>
        <TouchableWithoutFeedback style={styles.touchArea} onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView style={styles.keyBoardAvoid} behavior={G.IsPlatform.ios ? "padding" : "height"} enabled>
            <View style={{ ...styles.screen, ...props.style }} >
              {props.children}
            </View >
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView >
      // Component end
    );
  }
  return (
    // Component start
    <SafeAreaView style={styles.safeArea} forceInset={{ top: 'always' }}>
      <View style={{ ...styles.screen, ...props.style }} >
        {props.children}
      </View >
    </SafeAreaView >
    // Component end
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: G.Palette.appPrimary
  },
  touchArea: {
    flex: 1,
  },
  keyBoardAvoid: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: G.Palette.appSecondaryVeryLight
  }
});

export default Screen;
