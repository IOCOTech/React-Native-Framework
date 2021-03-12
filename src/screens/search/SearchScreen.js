// React imports
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
// Custom component imports
import Container from '../../components/shared/Container';
import StyledText from '../../components/shared/StyledText';
import Button from '../../components/shared/Button';
import Spacer from '../../components/shared/Spacer';
// Constants
import SCREENS from '../../constants/ScreenConstants';
// Context
import ThemeContext from '../../context/ThemeContext';

const SearchScreen = ({navigation}) => {
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
          Search Screen
        </StyledText>
        <Spacer medium />
        <Button
          title={'Results'}
          action={() => navigation.push(SCREENS.RESULTS)}
        />
        <Spacer medium />
        <Button
          title={'Home profile'}
          action={() =>
            navigation.navigate(SCREENS.HOME, {
              screen: SCREENS.PROFILE,
              params: {name: 'data'},
            })
          }
        />
      </Container>
    </>
  );
};

// This object is used to style your components
const localStyles = (theme) => StyleSheet.create({});

export default SearchScreen;
