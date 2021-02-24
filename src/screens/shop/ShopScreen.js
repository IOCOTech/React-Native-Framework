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
// redux imports
import {connect} from 'react-redux';
// SmartStyle
import SmartStyle from '../../utils/SmartStyle';

const ShopScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  const SM = new SmartStyle({theme: theme});

  SM.create(
    'viewStyles',
    'Before we start lets give a row flexDirection make a 90% width give the box a white backgroundColor and add 23 padding as well as a 10 borderRadius please add a 3 borderWidth and make a orange borderColor lastly add a 10 marginVertical so center alignItem and space-between justifyContent',
  );
  SM.create(
    'textStyle',
    'Make text a blue color but I need a 10 fontSize add 8 margin',
  );

  console.log(SM.styles);

  return (
    <>
      {/* Custom component similar to a View but with props for styling */}
      <Container
        flex={1}
        backgroundColor={theme.app.color.primary}
        alignItems={'center'}
        justifyContent={'center'}>
        <View style={SM.styles.viewStyles}>
          <Text style={SM.styles.textStyle}>Example</Text>
          <Text style={SM.styles.textStyle}>Example</Text>
          <Text style={SM.styles.textStyle}>Example</Text>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);
