// React imports
import React from "react";
import { View, StyleSheet } from "react-native";
// Global imports
import G from "../../../styles/import_globals";


const Spacer = props => {
  // Local functions
  let space = G.spacing.f4;

  // Local conditionals
  if (props.xxsmall) {
    space = G.spacing.f1;
  }
  if (props.xsmall) {
    space = G.spacing.f2;
  }
  if (props.small) {
    space = G.spacing.f3;
  }
  if (props.medium) {
    space = G.spacing.f4;
  }
  if (props.large) {
    space = G.spacing.f5;
  }
  if (props.xlarge) {
    space = G.spacing.f6;
  }
  if (props.xxlarge) {
    space = G.spacing.f7;
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
