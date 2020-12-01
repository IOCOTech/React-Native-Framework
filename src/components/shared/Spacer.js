// React imports
import React from "react";
import { View, StyleSheet } from "react-native";
// Global imports
import G from "../../../styles/import_globals";


const Spacer = props => {
  // Local functions
  let space = G.Gutter.g24;

  // Local conditionals
  if (props.xxsmall) {
    space = G.Gutter.g4;
  }
  if (props.xsmall) {
    space = G.Gutter.g8;
  }
  if (props.small) {
    space = G.Gutter.g16;
  }
  if (props.medium) {
    space = G.Gutter.g24;
  }
  if (props.large) {
    space = G.Gutter.g32;
  }
  if (props.xlarge) {
    space = G.Gutter.g40;
  }
  if (props.xxlarge) {
    space = G.Gutter.g50;
  }

  return (
    // Component start
    <View style={{ height: space, width: space }}></View>
    // Component end
  );
};

// custom styles for this element
const styles = StyleSheet.create({});

export default Spacer;
