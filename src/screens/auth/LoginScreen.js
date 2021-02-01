// React imports
import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
import Button from "../../components/shared/Button";
import Spacer from "../../components/shared/Spacer";
import CustomInput from "../../components/shared/CustomInput";
// Global style sheet imports
import G from "../../../styles/import_globals";
// Constants
import SCREENS from "../../constants/screenConstants";
// redux imports
import {connect} from 'react-redux';

const LoginScreen = ({navigation}) => {
  return (
    <ImageBackground blurRadius={6} style={styles.imageBg} source={G.image_urls.splash_family_bg}>
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          style={{ alignSelf: 'stretch' }}
        >
          <Container padding={G.spacing.f6} flex={2} justifyContent={"center"} alignItems={"center"}>
            <Image style={styles.logoImg} source={G.image_urls.logo}/>
            <Spacer small/>
            <StyledText regular f6 white center>Abundance</StyledText>
          </Container>

          <Container padding={G.spacing.f5} flex={3} alignItems={"center"} justifyContent={"center"}>
              <CustomInput 
                placeholder={"Username"}
                iconName={"user"}
                onChangeText={text => console.log(text)}
              />
              <CustomInput 
                placeholder={"Password"}
                iconName={"lock"}
                onChangeText={text => console.log(text)}
              />
          </Container>
          </ScrollView>

          <Container padding={G.spacing.f5}>
            <Button title={"Login"}/>
            <Spacer medium/>
            <TouchableOpacity onPress={() => {navigation.push(SCREENS.SIGN_UP)}}>
              <StyledText regular f5 white center>Sign up for an account</StyledText>
            </TouchableOpacity>
          </Container>

    </ImageBackground>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    resizeMode: "cover"
  },
  logoImg: {
    width: 60,
    height: 60
  }
});

// Mapping the redux state to props
const mapStateToProps = state => {
  return {
  }
}

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);