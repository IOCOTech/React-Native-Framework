import G from "./import_globals"

const screenOptions = {
  headerTitleAlign: "center",
  headerStyle: { 
    backgroundColor: G.theme.app.primary,
    borderBottomWidth: 0,
    elevation: 0,
    height: 65
  },
  headerTitleStyle: {
    color: G.theme.font.white,
    fontSize: G.font_size.f6
  },
  headerRightContainerStyle: {
    paddingRight: G.spacing.f5
  },
  headerTintColor: G.theme.app.white
} 

const tabBarOptions = {
  style: {
    backgroundColor: G.theme.app.primary,
    borderTopWidth: 0,
    position: "absolute",
    elevation: 0
  },
  tabStyle: {},
  activeTintColor: G.theme.app.accent,
  inactiveTintColor: G.theme.app.white,
  showLabel: false,
  keyboardHidesTabBar: true
}


const S = {
  screenOptions,
  tabBarOptions
}

export default S;