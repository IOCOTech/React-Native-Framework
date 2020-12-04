// React imports
import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  ImageBackground,
} from "react-native";
// Global imports
import G from "../../../styles/import_globals";
// Shared Component imports
import Screen from "../../components/shared/Screen";
import StyledText from "../../components/shared/StyledText";
import Spacer from "../../components/shared/Spacer";
import ButtonPrimary from "../../components/shared/ButtonPrimary";
import CustomInput from "../../components/shared/CustomInput";
import CustomInputErrorMessage from "../../components/shared/CustomInputErrorMessage";
import Container from "../../components/shared/Container";
import LogoMTN from "../../components/shared/LogoMTN";
// Constant imports
import TRACK from "../../constants/trackConstants";
import SCREENS from "../../constants/navigationConstants";
// Utilities imports 
import { validateNumberInput } from "../../utils/inputValidationUtills";
// redux
import {
  getOtp,
  fetchheaderEnrichment,
} from '../../redux';
import {connect} from 'react-redux';

const StartScreen = ( props ) => {
  // Local state
  const [loginDetails, setLoginDetails] = useState("");
  const [loginCountryCodeDetails, setLoginCountryCodeDetails] = useState(props.CONFIG.COPY.screen_content.login.country_code_text);

  // Local functions
  const resetLoginForm = useCallback(() => {
    setLoginDetails("");
    setLoginCountryCodeDetails(props.CONFIG.COPY.screen_content.login.country_code_text);
  }, [loginDetails, loginCountryCodeDetails]);

  // Local logs
  const doTrack = useCallback(() => {
    props.tracker.setEventParam({ key: TRACK.PARAM.FEATURE, value: TRACK.PARAM_VALUE.AUTH })
      .setEventParam({ key: TRACK.PARAM.SCREEN, value: TRACK.PARAM_VALUE.LOGIN })
      .trackEvent({ eventName: TRACK.EVENT.VIEW_SCREEN });
  }, [props.tracker]);

  // UseEffect
  useEffect(() => {
    doTrack();
    props.fetchheaderEnrichment();
  }, []);

  useEffect(() => {
    setLoginDetails(props.headerEnrichment.msisdn);
  }, [props.headerEnrichment]);
 
  if(props.appUpdate.hardUpdate) {
    props.navigation.navigate(SCREENS.HARD_UPDATE);
  }
  
  return (
    <Screen
      keyboard={true} style={{ backgroundColor: G.Palette.appSecondaryVeryLight }}>
      {/* Background image start */}
      <ImageBackground
        source={G.ImageUrl.brand_bg_dancing_people_without_gradient}
        style={styles.backgroundImage}
      >
        {/* Logo start */}
        <Container alignItems={"center"} justifyContent={"center"} flex={1}>
          <LogoMTN size={119}/>
        </Container>
        {/* Logo END */}
        {/* Form start */}
        <Container paddingHorizontal={G.Gutter.g24} flex={1}>
          {/* Label start */}
          <StyledText f14 secondary medium>
            {props.CONFIG.COPY.screen_content.login.enter_number_label}
          </StyledText>
          {/* Label end */}
          <Spacer small />
          {/* Inputs start */}
          <Container flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Container flex={3}>
            <CustomInput 
              testId={"login_input_country_code"}
              centerText
              editable={false}
              value={loginCountryCodeDetails}
            />
            </Container>
            <Spacer xsmall/>
            <Container flex={9}>
            <CustomInput
              testId={"login_input_msisnd"}
              rightIconName={"info"}
              placeholder={props.CONFIG.COPY.screen_content.login.number_placeholder}
              keyboardType="number-pad"
              error={props.otp.error}
              value={loginDetails}
              onChangeText={text => {setLoginDetails(validateNumberInput(text))}}
              label={props.CONFIG.COPY.screen_content.login.number_placeholder}
            />
            </Container>
          </Container>
          {/* Inputs end */}
          <Spacer small />
          {/* Error message start */}
          <CustomInputErrorMessage
            testId={"login_messageContainer_error"}
            show={props.otp.error}
            message={props.otp.errorMessage}
            />
          {/* Error message end */}
          <Spacer medium />
          {/* Button start */}
          <Container height={48}>
            <ButtonPrimary 
            loading={props.otp.loading}
            testID={"login_btn_verify_number"}
            action={() => {
              props.getOtp(loginCountryCodeDetails, loginDetails, () => { props.navigation.navigate(SCREENS.OTP, { resetLoginForm, loginDetails, loginCountryCodeDetails }) });
            }}
            title={props.CONFIG.COPY.screen_content.login.verify_number_button_label} />
          </Container>
          {/* Button end */}
        </Container>
        {/* Form end */}
      </ImageBackground>
      {/* Background image end */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  // login
  backgroundImage: {
    resizeMode: "cover",
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    otp: state.otp,
    tracker: state.appReadyConfig.tracker,
    CONFIG: state.appReadyConfig.configuration,
    headerEnrichment: state.headerEnrichment,
    appUpdate: state.appUpdate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOtp: (countryCode, msisdn, navTo) => dispatch(getOtp(countryCode, msisdn, navTo)),
    fetchheaderEnrichment: () => dispatch(fetchheaderEnrichment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);