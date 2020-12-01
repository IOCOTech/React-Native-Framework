// React imports
import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// Global imports
import { withNavigation } from "react-navigation";
import G from "../../../styles/import_globals";
// Context imports
import UserContext from "../../context/UserContext";
// Component imports
import IconHome from "../icons/IconHome";
import IconShop from "../icons/IconShop";
import IconPromo from "../icons/IconPromo";
import IconMore from "../icons/IconMore";
// Shared Component imports
import StyledText from "./StyledText";
import Spacer from "./Spacer";
import Feature from "./Feature";
// Constant imports
import SCREENS from "../../constants/navigationConstants";
import FEATURE from "../../constants/featureConstants";
// redux
import {connect} from 'react-redux';


const Navbar = ({ CONFIG, currentTab, navigation }) => {
  // Context
  const { userJourneyCart } = useContext(UserContext);

  return (
      <View style={styles.footerContainer}>
        {/* Navbar start */}
        < View
          style={[styles.footer, userJourneyCart.count > 0 ? { borderTopLeftRadius: 0, borderTopRightRadius: 0 } : null]}>
          {/* Bottom nav item home start */}
          {/* <Feature
            shouldNotificationShowWhenDown
            feature={FEATURE.HOME_NAV} 
            featuresToCompare={CONFIG.FEATURES}
            > */}
            <TouchableOpacity
              accessible={true}
              testID={"nav_btn_" + CONFIG.COPY.navigation.nav.home}
              accessibilityLabel={"nav_btn_" + CONFIG.COPY.navigation.nav.home}
              onPress={() => navigation.navigate(SCREENS.HOME)}>
              <View
                style={styles.navItem}>
                <View 
                  style={styles.iconStyle}>
                <IconHome
                  style={styles.iconStyle}
                  newColor={
                    currentTab == CONFIG.COPY.navigation.nav.home ? G.Palette.iconAccent : G.Palette.iconPrimary
                  }
                  size={G.IconSize.i24}
                />
                </View>
                <Spacer xxsmall />
                {currentTab == CONFIG.COPY.navigation.nav.home ?
                  <StyledText f12 accent bold center>
                    {CONFIG.COPY.navigation.nav.home}
                  </StyledText>
                  :
                  <StyledText f12 primary bold center>
                    {CONFIG.COPY.navigation.nav.home}
                  </StyledText>
                }
              </View>
            </TouchableOpacity >
          {/* </Feature> */}
          {/* Bottom nav item home end */}
          {/* Bottom nav item shop start */}
          {/* <Feature
            shouldNotificationShowWhenDown
            feature={FEATURE.SHOP_NAV} 
            featuresToCompare={CONFIG.FEATURES}
            > */}
            <TouchableOpacity
              accessible={true}
              testID={"nav_btn_" + CONFIG.COPY.navigation.nav.shop}
              accessibilityLabel={"nav_btn_" + CONFIG.COPY.navigation.nav.shop}
              onPress={() => navigation.navigate(SCREENS.SHOP)}>
              <View
                style={styles.navItem}>
                <View 
                  style={styles.iconStyle}>
                <IconShop
                  newColor={
                    currentTab == CONFIG.COPY.navigation.nav.shop ? G.Palette.iconAccent : G.Palette.iconPrimary
                  }
                  size={G.IconSize.i24}
                />
                </View>
                <Spacer xxsmall />
                {currentTab == CONFIG.COPY.navigation.nav.shop ?
                  <StyledText f12 accent bold center>
                    {CONFIG.COPY.navigation.nav.shop}
                  </StyledText>
                  :
                  <StyledText f12 primary bold center>
                    {CONFIG.COPY.navigation.nav.shop}
                  </StyledText>
                }
              </View>
            </TouchableOpacity>
          {/* </Feature> */}
          {/* Bottom nav item shop end */}
          {/* Bottom nav item promo start */}
          {/* <Feature
            shouldNotificationShowWhenDown
            feature={FEATURE.PROMO_NAV} 
            featuresToCompare={CONFIG.FEATURES}
            > */}
            <TouchableOpacity
              accessible={true}
              testID={"nav_btn_" + CONFIG.COPY.navigation.nav.promo}
              accessibilityLabel={"nav_btn_" + CONFIG.COPY.navigation.nav.promo}
              onPress={() => navigation.navigate(SCREENS.PROMO)}>
              <View
                style={styles.navItem}>
                  <View 
                  style={styles.iconStyle}>
                  <IconPromo
                    newColor={
                      currentTab == CONFIG.COPY.navigation.nav.promo ? G.Palette.iconAccent : G.Palette.iconPrimary
                    }
                    size={G.IconSize.i24}
                  />
                  </View>
                <Spacer xxsmall />
                {currentTab == CONFIG.COPY.navigation.nav.promo ?
                  <StyledText f12 accent bold center>
                    {CONFIG.COPY.navigation.nav.promo}
                  </StyledText>
                  :
                  <StyledText f12 primary bold center>
                    {CONFIG.COPY.navigation.nav.promo}
                  </StyledText>
                }
              </View>
            </TouchableOpacity>
          {/* </Feature> */}
          {/* Bottom nav item promo end */}
          {/* Bottom nav item more start */}
          {/* <Feature
            shouldNotificationShowWhenDown
            feature={FEATURE.MORE_NAV} 
            featuresToCompare={CONFIG.FEATURES}
            > */}
            <TouchableOpacity
              accessible={true}
              testID={"nav_btn_" + CONFIG.COPY.navigation.nav.more}
              accessibilityLabel={"nav_btn_" + CONFIG.COPY.navigation.nav.more}
              onPress={() => navigation.navigate(SCREENS.MORE)}>
              <View
                style={styles.navItem}>
                  <View 
                  style={styles.iconStyle}>
                  <IconMore
                  newColor={
                    currentTab == CONFIG.COPY.navigation.nav.more ? G.Palette.iconAccent : G.Palette.iconPrimary
                  }
                  size={G.IconSize.i24}
                />
                  </View>
                <Spacer xxsmall />
                {currentTab == CONFIG.COPY.navigation.nav.more ?
                  <StyledText f12 accent bold center>
                    {CONFIG.COPY.navigation.nav.more}
                  </StyledText>
                  :
                  <StyledText f12 primary bold center>
                    {CONFIG.COPY.navigation.nav.more}
                  </StyledText>
                }
              </View>
            </TouchableOpacity>
          {/* </Feature> */}
          {/* Bottom nav item more end */}
        </View >
        {/* Navbar end */}
      </View >
  );
};

// custom styles for this element
const styles = StyleSheet.create({
  footerContainer: {
    height: 64,
    zIndex: 5,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 2,
    borderTopColor: "rgba(0, 0, 0, 0.1)"
  },
  footer: {
    backgroundColor: G.Palette.appWhite,
    overflow: "hidden",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  iconStyle: {
    justifyContent: "flex-end",
    height: 20
  },
  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

const mapStateToProps = state => {
  return {
    tracker: state.appReadyConfig.tracker,
    CONFIG: state.appReadyConfig.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Navbar));
