// React imports
import React, {useState} from 'react';
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
// Global style sheet imports
import G from "../../../styles/import_globals";
// redux imports
import {connect} from 'react-redux';

const HomeScreen = ({navigation}) => {
  
  return (
    <Container paddingHorizontal={G.spacing.f4} flex={1} backgroundColor={G.theme.app.primary}>
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <Text style={{fontFamily: G.font_family.bold, fontSize: 18, color: "white"}}>Font Family</Text>
        <Spacer small/>
        <StyledText style={{fontSize: 18}} white bold>bold</StyledText>
        <StyledText style={{fontSize: 18}} white medium>medium</StyledText>
        <StyledText style={{fontSize: 18}} white regular>regular</StyledText>
        <StyledText style={{fontSize: 18}} white thin>thin</StyledText>
        <Spacer large/>
        <Text style={{fontFamily: G.font_family.bold, fontSize: 18, color: "white"}}>Font Size</Text>
        <Spacer small/>
        <StyledText f10 white medium>f10 Size ({G.font_size.f10})</StyledText>
        <StyledText f9 white medium>f9 Size ({G.font_size.f9})</StyledText>
        <StyledText f8 white medium>f8 Size ({G.font_size.f8})</StyledText>
        <StyledText f7 white medium>f7 Size ({G.font_size.f7})</StyledText>
        <StyledText f6 white medium>f6 Size ({G.font_size.f6})</StyledText>
        <StyledText f5 white medium>f5 Size ({G.font_size.f5})</StyledText>
        <StyledText f4 white medium>f4 Size ({G.font_size.f4})</StyledText>
        <StyledText f3 white medium>f3 Size ({G.font_size.f3})</StyledText>
        <StyledText f2 white medium>f2 Size ({G.font_size.f2})</StyledText>
        <StyledText f1 white medium>f1 Size ({G.font_size.f1})</StyledText>
        <Spacer large/>
        <Text style={{fontFamily: G.font_family.bold, fontSize: 18, color: "white"}}>Font color</Text>
        <Spacer small/>
        <Container flexDirection={"row"} justifyContent={"space-between"}>
          <Container flex={1}>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} primary medium>primary ({G.theme.font.primary})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} secondary medium>secondary ({G.theme.font.secondary})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} grey medium>grey ({G.theme.font.grey})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} accent medium>accent ({G.theme.font.accent})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.accent, fontSize: 16}} offWhite medium>offWhite ({G.theme.font.offWhite})</StyledText>
          </Container>
          <Spacer medium/>
          <Container flex={1}>
          <StyledText style={{backgroundColor: G.theme.app.accent, fontSize: 16}} white medium>white ({G.theme.font.white})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} black medium>black ({G.theme.font.black})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} error medium>error ({G.theme.font.error})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} success medium>success ({G.theme.font.success})</StyledText>
          <StyledText style={{backgroundColor: G.theme.app.white, fontSize: 16}} warning medium>warning ({G.theme.font.warning})</StyledText>
          </Container>
        </Container>
        <Spacer large/>
        <Text style={{fontFamily: G.font_family.bold, fontSize: 18, color: "white"}}>StyledText component use</Text>
        <Spacer small/>
        <StyledText f6 success bold>f6 success bold</StyledText>
        <Spacer large/>
        <Text style={{fontFamily: G.font_family.bold, fontSize: 18, color: "white"}}>Icon Size</Text>
        <Spacer small/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f1} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f1 ({G.icon_size.f1})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f2} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f2 ({G.icon_size.f2})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f3} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f3 ({G.icon_size.f3})</Text>
          </Container>
        </Container>
        <Spacer medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f4} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f4 ({G.icon_size.f4})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f5} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f5 ({G.icon_size.f5})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f6} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f6 ({G.icon_size.f6})</Text>
          </Container>
        </Container>
        <Spacer medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f7} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f7 ({G.icon_size.f7})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f8} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f8 ({G.icon_size.f8})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f9} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f9 ({G.icon_size.f9})</Text>
          </Container>
        </Container>
        <Spacer medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Icon name="user" color={G.theme.icon.white} size={G.icon_size.f10} />
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>icon_size.f10 ({G.icon_size.f10})</Text>
          </Container>
        </Container>
        <Spacer large/>
        <Text style={{fontFamily: G.font_family.bold, fontSize: 18, color: "white"}}>Theme app colors (G.theme.app.primary)</Text>
        <Spacer small/>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.primary} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>primary</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.secondary} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>secondary</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.accent} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>accent</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.offWhite} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>offWhite</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.white} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>white</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.black} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>black</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.grey} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>grey</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.success} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "black"}}>success</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.warning} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>warning</Text>
        </Container>
        <Container containerStyles={{borderColor: "white", borderWidth: 1, padding: 5}} backgroundColor={G.theme.app.error} alignItems={"center"} justifyContent={"center"} marginTop={5}>
           <Text style={{fontSize: 18, color: "white"}}>error</Text>
        </Container>
        <Spacer large/>
        <Text style={{fontFamily: G.font_family.bold, fontSize: 18, color: "white"}}>Radius size (radius_size.f1)</Text>
        <Spacer medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f1}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f1 ({G.radius_size.f1})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f2}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f2 ({G.radius_size.f2})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f3}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f3 ({G.radius_size.f3})</Text>
          </Container>
        </Container>
        <Spacer medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f4}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f4 ({G.radius_size.f4})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f5}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f5 ({G.radius_size.f5})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f6}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f6 ({G.radius_size.f6})</Text>
          </Container>
        </Container>
        <Spacer medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f7}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f7 ({G.radius_size.f7})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f8}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f8 ({G.radius_size.f8})</Text>
          </Container>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f9}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f9 ({G.radius_size.f9})</Text>
          </Container>
        </Container>
        <Spacer medium/>
        <Container flexDirection={"row"} justifyContent={"space-between"} align={"center"}>
          <Container alignItems={"center"} justifyContent={"flex-end"}>
            <Container containerStyles={{borderRadius: G.radius_size.f10}} backgroundColor={"white"} width={40} height={40}></Container>
            <Text style={{fontFamily: G.font_family.bold, fontSize: 14, color: "white"}}>radius_size.f10 ({G.radius_size.f10})</Text>
          </Container>
        </Container>
        <Spacer large/>
      </ScrollView>
    </Container>
  );
};

// This object is used to style your components
const styles = StyleSheet.create({

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);