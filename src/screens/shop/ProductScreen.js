// React imports
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
// Custom component imports
import Container from '../../components/shared/Container';
import StyledText from '../../components/shared/StyledText';
// redux imports
import {connect} from 'react-redux';
// Context
import ThemeContext from '../../context/ThemeContext';

const ProductScreen = ({navigation}) => {
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
          Product Screen
        </StyledText>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
