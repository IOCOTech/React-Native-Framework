// React imports
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// Global imports
import G from "../../../styles/import_globals";
// Shared Component imports
import StyledText from "./StyledText";
import Spacer from "../../components/shared/Spacer";


const Header = props => {
  return (
    // Header start
    <View
      style={[
        styles.header,
        props.noShadow ? null : styles.shadow,
        { ...props.style }
      ]}
    >
      {/* First action start */}
      {props.firstAction ?
        <View style={styles.firstAction}>
          <TouchableOpacity
            onPress={() => {
              props.firstAction()
            }}
          >
            {props.firstActionIcon}
          </TouchableOpacity>
        </View>
        : null}
      {/* First action end */}
      {/* Title start */}
      {props.title ?
        <View style={[styles.title, !props.firstAction ? {marginLeft: 0} : null]}>
          <StyledText f18 secondary medium>
            {props.title}
          </StyledText>
        </View>
        : null}
      {/* Title end */}
      {/* Middle start */}
      {props.middle ?
        <View style={styles.middle}>
          {props.middle}
        </View>
        : null}
      {/* Middle end */}
      {/* Last action start */}
      {props.lastAction ?
        <View style={styles.lastAction}>
          <TouchableOpacity
            onPress={() => {
              props.lastAction()
            }}
          >
            {props.lastActionIcon}
          </TouchableOpacity>
        </View>
        : null}
      {/* Last action end */}
      {/* Group action start */}
      {props.groupAction ?
        <View style={styles.groupWrapper}>
          <View style={styles.groupFirstItem}>
            <TouchableOpacity
              onPress={() => {
                props.firstGroupAction()
              }}
            >
              {props.firstGroupActionIcon}
            </TouchableOpacity>
          </View>
          <Spacer small />
          <View style={styles.group}>
            <TouchableOpacity
              onPress={() => {
                props.lastGroupAction()
              }}
            >
              {props.lastGroupActionIcon}
            </TouchableOpacity>
          </View>
        </View>
        : null}
      {/* Group action end */}
    </View>
    // Header end
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    flexDirection: "row",
    paddingHorizontal: G.Gutter.g16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: G.Palette.appAccent
  },
  shadow: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  firstAction: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 1,
    alignItems: "stretch",
    marginHorizontal: G.Gutter.g16
  },
  middle: {
    flex: 1,
    alignItems: "stretch",
    marginHorizontal: G.Gutter.g16
  },
  lastAction: {
    alignItems: "center",
    justifyContent: "center"
  },
  group: {
    alignItems: "center",
    justifyContent: "center"
  },
  groupWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  groupFirstItem: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
