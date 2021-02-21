// React imports
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
// Custom component imports
import Container from '../../components/shared/Container';
import StyledText from '../../components/shared/StyledText';
import Button from '../../components/shared/Button';
import Spacer from '../../components/shared/Spacer';
// Context
import ThemeContext from '../../context/ThemeContext';
// Constants
import SCREENS from '../../constants/screenConstants';
import THEME from '../../constants/themeConstants';
// redux imports
import {connect} from 'react-redux';

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
        <StyledText theme={theme} bold f6 primary center>
          Shop Screen
        </StyledText>
        <Spacer theme={theme} medium />
        <Button
          theme={theme}
          title={'Product'}
          action={() => navigation.push(SCREENS.PRODUCT)}
        />
      </Container>
    </>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({});

// Mapping the redux state to props
const mapStateToProps = (state) => {
  return {};
};

// Mapping the redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);
