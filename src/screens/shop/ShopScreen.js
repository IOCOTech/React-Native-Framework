// React imports
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// Custom component imports
import Container from '../../components/shared/Container';
import StyledText from '../../components/shared/StyledText';
import Button from '../../components/shared/Button';
import Spacer from '../../components/shared/Spacer';
// Context
import ThemeContext from '../../context/ThemeContext';
// Constants
import SCREENS from '../../constants/ScreenConstants';

const ShopScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      {/* Custom component similar to a View but with props for styling */}
      <Container
        flex={1}
        backgroundColor={theme.app.color.primary}
        alignItems={'center'}
        justifyContent={'center'}>
        <StyledText bold f6 primary center>
          Shop Screen
        </StyledText>
        <Spacer medium />
        <Button
          title={'Product'}
          action={() => navigation.push(SCREENS.PRODUCT)}
        />
      </Container>
    </>
  );
};

// This object is used to style your components
const localStyles = (theme) => StyleSheet.create({});

// Mapping the redux state to props
const mapStateToProps = (state) => {
  return {};
};

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default ShopScreen;
