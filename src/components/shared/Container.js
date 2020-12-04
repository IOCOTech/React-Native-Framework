// React imports
import React from "react";
import { View, StyleSheet } from "react-native";
// Global imports
import G from "../../../styles/import_globals";


const Container = (props) => {
 
  let alteredStyles = { };

  // Magrin
  if( props.margin ) {
      alteredStyles.margin = props.margin
  }
  if( props.marginVertical ) {
    alteredStyles.marginVertical = props.marginVertical
  }
  if( props.marginHorizontal ) {
    alteredStyles.marginHorizontal = props.marginHorizontal
  }
  if( props.marginTop ) {
    alteredStyles.marginTop = props.marginTop
  }
  if( props.marginBottom ) {
    alteredStyles.marginBottom = props.marginBottom
  }
  if( props.marginLeft ) {
    alteredStyles.marginLeft = props.marginLeft
  }
  if( props.marginRight ) {
    alteredStyles.marginRight = props.marginRight
  }

  // Padding
  if( props.padding ) {
    alteredStyles.padding = props.padding
  }
  if( props.paddingVertical ) {
    alteredStyles.paddingVertical = props.paddingVertical
  }
  if( props.paddingHorizontal ) {
    alteredStyles.paddingHorizontal = props.paddingHorizontal
  }
  if( props.paddingTop ) {
    alteredStyles.paddingTop = props.paddingTop
  }
  if( props.paddingBottom ) {
    alteredStyles.paddingBottom = props.paddingBottom
  }
  if( props.paddingLeft ) {
    alteredStyles.paddingLeft = props.paddingLeft
  }
  if( props.paddingRight ) {
    alteredStyles.paddingRight = props.paddingRight
  }

  // Background
  if( props.backgroundColor ) {
    alteredStyles.backgroundColor = props.backgroundColor
  }

  // Flex
  if( props.flex ) {
    alteredStyles.flex = props.flex
  }
  if( props.justifyContent ) {
    alteredStyles.justifyContent = props.justifyContent
  }
  if( props.alignItems ) {
    alteredStyles.alignItems = props.alignItems
  }
  if( props.flexDirection ) {
    alteredStyles.flexDirection = props.flexDirection
  }

  // Size
  if( props.height ) {
    alteredStyles.height = props.height
  }
  if( props.width ) {
    alteredStyles.width = props.width
  }

  // overflow
  if( props.overflow ) {
    alteredStyles.overflow = props.overflow
  }


  return (
    // Component start
    <View
      accessible={true}
      testID={props.testID}
      accessibilityLabel={props.testID}
      style={[styles.container, {...alteredStyles}, {...props.containerStyles}]}>
      {props.children}
    </View>
    // Component end
  );
};

// custom styles for this element
const styles = StyleSheet.create({
  container: {
  }
});

export default Container;
