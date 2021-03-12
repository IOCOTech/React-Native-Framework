// React imports
import React, {useContext} from 'react';
import {StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
// Custom component imports
import Container from '../../components/shared/Container';
import StyledText from '../../components/shared/StyledText';
import Button from '../../components/shared/Button';
import Spacer from '../../components/shared/Spacer';
import CustomInput from '../../components/shared/CustomInput';
// Context
import ThemeContext from '../../context/ThemeContext';
// Constants
import SCREENS from '../../constants/ScreenConstants';

const LoginScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = localStyles(theme);

  return (
    <Container flex={1} backgroundColor={theme.app.color.primary}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        style={{alignSelf: 'stretch'}}>
        <Container
          padding={theme.spacing.f5}
          flex={2}
          justifyContent={'center'}
          alignItems={'center'}>
          <Image style={styles.logoImg} source={theme.image.logo} />
        </Container>

        <Container
          padding={theme.spacing.f5}
          flex={3}
          alignItems={'center'}
          justifyContent={'center'}>
          <CustomInput
            placeholder={'Username'}
            iconName={'user'}
            onChangeText={(text) => console.log(text)}
          />
          <CustomInput
            placeholder={'Password'}
            iconName={'lock'}
            onChangeText={(text) => console.log(text)}
          />
        </Container>
      </ScrollView>

      <Container padding={theme.spacing.f5}>
        <Button title={'Login'} />
        <Spacer medium />
        <TouchableOpacity
          onPress={() => {
            navigation.push(SCREENS.SIGN_UP);
          }}>
          <StyledText regular f5 white center>
            Sign up for an account
          </StyledText>
        </TouchableOpacity>
      </Container>
    </Container>
  );
};

// This object is used to style your components
const localStyles = (theme) =>
  StyleSheet.create({
    imageBg: {
      flex: 1,
      resizeMode: 'cover',
    },
    logoImg: {
      width: 140,
      height: 60,
      resizeMode: 'contain',
    },
    box: {
      width: 100,
      height: 100,
    },
  });

export default LoginScreen;
