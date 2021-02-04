// React imports
import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
import Button from "../../components/shared/Button";
import Spacer from "../../components/shared/Spacer";
import CustomInput from "../../components/shared/CustomInput";
// Constants
import SCREENS from "../../constants/screenConstants";
// redux imports
import {connect} from 'react-redux';

const LoginScreen = ({navigation, theme}) => {
  return (
    <Container flex={1} backgroundColor={theme.app.color.primary}>
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          style={{ alignSelf: 'stretch' }}
        >
          <Container padding={theme.spacing.f5} flex={2} justifyContent={"center"} alignItems={"center"}>
            <Image style={styles.logoImg} source={theme.image.logo}/>
          </Container>

          <Container padding={theme.spacing.f5} flex={3} alignItems={"center"} justifyContent={"center"}>
              <CustomInput
                theme={theme} 
                placeholder={"Username"}
                iconName={"user"}
                onChangeText={text => console.log(text)}
              />
              <CustomInput 
                theme={theme}
                placeholder={"Password"}
                iconName={"lock"}
                onChangeText={text => console.log(text)}
              />
          </Container>
          </ScrollView>

          <Container padding={theme.spacing.f5}>
            <Button theme={theme} title={"Login"}/>
            <Spacer theme={theme} medium/>
            <TouchableOpacity onPress={() => {navigation.push(SCREENS.SIGN_UP)}}>
              <StyledText theme={theme} regular f5 white center>Sign up for an account</StyledText>
            </TouchableOpacity>
          </Container>
    </Container>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    resizeMode: "cover"
  },
  logoImg: {
    width: 140,
    height: 60,
    resizeMode: "contain"
  }
});

// Mapping the redux state to props
const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);