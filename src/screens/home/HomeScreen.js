// React imports
import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text
} from 'react-native';
// Elements
import Icon from 'react-native-vector-icons/FontAwesome';
// Custom component imports
import Container from "../../components/shared/Container";
import StyledText from '../../components/shared/StyledText';
import Spacer from "../../components/shared/Spacer";
import Button from "../../components/shared/Button";
// Constants
import SCREENS from "../../constants/screenConstants";
import THEME from "../../constants/themeConstants";
// redux imports
import { setAppTheme } from "../../redux";
import {connect} from 'react-redux';

const HomeScreen = ({navigation, setAppTheme, theme}) => {

  return (
    <Container paddingHorizontal={theme.spacing.f4} flex={1} backgroundColor={theme.app.color.primary}>
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <Spacer theme={theme} small/>
        <Button theme={theme} title={"generic theme"} action={() => setAppTheme(THEME.GENERIC)}/>
        <Spacer theme={theme} small/>
        <Button theme={theme} title={"dark theme"} action={() => setAppTheme(THEME.DARK)}/>
        <Spacer theme={theme} medium/>
        <Text style={styles.lableStyle}>Font Family</Text>
        <Spacer theme={theme} small/>
        <StyledText theme={theme} style={{fontSize: 18}} white bold>bold</StyledText>
        <StyledText theme={theme} style={{fontSize: 18}} white medium>medium</StyledText>
        <StyledText theme={theme} style={{fontSize: 18}} white regular>regular</StyledText>
        <StyledText theme={theme} style={{fontSize: 18}} white thin>thin</StyledText>
        <Spacer theme={theme} large/>
        <Text style={styles.lableStyle}>Font Size</Text>
        <Spacer theme={theme} small/>
        <StyledText theme={theme} f10 white medium>f10 Size ({theme.font.size.f10})</StyledText>
        <StyledText theme={theme} f9 white medium>f9 Size ({theme.font.size.f9})</StyledText>
        <StyledText theme={theme} f8 white medium>f8 Size ({theme.font.size.f8})</StyledText>
        <StyledText theme={theme} f7 white medium>f7 Size ({theme.font.size.f7})</StyledText>
        <StyledText theme={theme} f6 white medium>f6 Size ({theme.font.size.f6})</StyledText>
        <StyledText theme={theme} f5 white medium>f5 Size ({theme.font.size.f5})</StyledText>
        <StyledText theme={theme} f4 white medium>f4 Size ({theme.font.size.f4})</StyledText>
        <StyledText theme={theme} f3 white medium>f3 Size ({theme.font.size.f3})</StyledText>
        <StyledText theme={theme} f2 white medium>f2 Size ({theme.font.size.f2})</StyledText>
        <StyledText theme={theme} f1 white medium>f1 Size ({theme.font.size.f1})</StyledText>
        <Spacer theme={theme} large/>
        <Text style={styles.lableStyle}>Font color</Text>
        <Spacer theme={theme} small/>
        <Container flexDirection={"row"} justifyContent={"space-between"}>
          <Container flex={1}>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} primary medium>primary ({theme.font.color.primary})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} secondary medium>secondary ({theme.font.color.secondary})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} grey medium>grey ({theme.font.color.grey})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} accent medium>accent ({theme.font.color.accent})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.accent, fontSize: 16}} offWhite medium>offWhite ({theme.font.color.offWhite})</StyledText>
          </Container>
          <Spacer theme={theme} medium/>
          <Container flex={1}>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.accent, fontSize: 16}} white medium>white ({theme.font.color.white})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} black medium>black ({theme.font.color.black})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} error medium>error ({theme.font.color.error})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} success medium>success ({theme.font.color.success})</StyledText>
          <StyledText theme={theme} style={{backgroundColor: theme.app.color.white, fontSize: 16}} warning medium>warning ({theme.font.color.warning})</StyledText>
          </Container>
        </Container>
        <Spacer theme={theme} large/>
        <Text style={styles.lableStyle}>StyledText component use</Text>
        <Spacer theme={theme} small/>
        <StyledText theme={theme} f6 success bold>f6 success bold</StyledText>
        <Spacer theme={theme} large/>
        <Text style={styles.lableStyle}>Icon Size</Text>
        <Spacer theme={theme} small/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f1} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f1 ({theme.icon.size.f1})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f2} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f2 ({theme.icon.size.f2})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f3} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f3 ({theme.icon.size.f3})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f4} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f4 ({theme.icon.size.f4})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f5} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f5 ({theme.icon.size.f5})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f6} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f6 ({theme.icon.size.f6})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f7} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f7 ({theme.icon.size.f7})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f8} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f8 ({theme.icon.size.f8})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f9} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f9 ({theme.icon.size.f9})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={theme.icon.color.white} size={theme.icon.size.f10} />
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.size.f10 ({theme.icon.size.f10})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} large/>
        <Text style={styles.lableStyle}>Theme app colors (theme.app.color.primary)</Text>
        <Spacer theme={theme} small/>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.primary} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>primary</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.secondary} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>secondary</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.accent} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>accent</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.offWhite} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>offWhite</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.white} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>white</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.black} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>black</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.grey} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>grey</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.success} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>success</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.warning} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>warning</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={theme.app.color.error} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>error</Text>
        </Container>
        <Spacer theme={theme} large/>
        <Text style={styles.lableStyle}>Radius size (theme.border.radius.f1)</Text>
        <Spacer theme={theme} medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f1}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f1 ({theme.border.radius.f1})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f2}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f2 ({theme.border.radius.f2})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f3}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f3 ({theme.border.radius.f3})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f4}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f4 ({theme.border.radius.f4})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f5}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f5 ({theme.border.radius.f5})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f6}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f6 ({theme.border.radius.f6})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f7}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f7 ({theme.border.radius.f7})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f8}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f8 ({theme.border.radius.f8})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f9}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f9 ({theme.border.radius.f9})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: theme.border.radius.f10}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: theme.font.family.bold, fontSize: 14, color: "white"}}>.radius.f10 ({theme.border.radius.f10})</Text>
          </Container>
        </Container>
        <Spacer theme={theme} large/>
      </ScrollView>
    </Container>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({
  lableStyle: {
    fontSize: 18, 
    color: "white"
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
    setAppTheme: theme => dispatch(setAppTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);