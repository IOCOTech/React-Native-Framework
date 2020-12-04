// React imports
import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
// Global imports
import G from "../../../styles/import_globals";

const Loading = props => {
  return (
    // Component start
    <View style={[styles.loadingConatiner, props.flexFull ? {flex: 1} : null, {...props.style}]}>
        <ActivityIndicator size={props.size ? props.size : "large"} color={G.Palette.loaderPrimary} />
    </View>
    // Component end
  );
};

// custom styles for this element
const styles = StyleSheet.create({
  loadingConatiner: {
    justifyContent: "center",
    alignContent: "center"
  }
});

export default Loading;
