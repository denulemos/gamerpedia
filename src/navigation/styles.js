import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: Platform.OS === "ios" ? 56 : 38,
    height: Platform.OS === "ios" ? 50 : 34,
    alignSelf: "center"
  },
  logoDraw: {
    width: 40,
    height: 35,
    alignSelf: "flex-start"
  },
  logoclose: {
    width: 20,
    marginTop: 10,
    marginRight: 10,
    height: 20,
    alignSelf: "flex-end",
    tintColor: "white",
    transform: [{rotateZ: "45deg"}]
  },
  user: {
    width: 40,
    height: 40,
    tintColor: "white",
    marginLeft: 10
  },
  cerrarDrawer: {
    backgroundColor: "#7d5fff",
    flexDirection: "row",
    paddingBottom: 50,
    paddingTop: 40
  },
  usuario: {
    color: "white",
    alignSelf: "flex-end",
    padding: 5,
    fontSize: 12,
    paddingLeft: 10,
    paddingBottom: 13,
    fontFamily: "yoster"
  },
  logoutButton: {
    flexDirection: "row",
    padding: 15,
    position: "absolute",
    bottom: 0,
    borderTopColor: "#7d5fff",
    borderTopWidth: 0.5,
    paddingRight: 170
  },
  containerDrawer: {
    backgroundColor: "black",
    flex: 1
  },
  logout: {
    width: 20,
    height: 20,
    tintColor: "#7d5fff",
    marginLeft: 10,
    marginTop: 5
  },
  logoutText: {
    paddingLeft: 15,
    paddingTop: 5,
    fontFamily: "OpenSansRegular",
    color: "#7d5fff"
  },
  drawerView: {
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    padding: 20
  },

  drawerView3: {
    padding: 5
  },
  drawerOpciones: {
    paddingLeft: 15,
    paddingTop: 3,
    fontFamily: "OpenSansRegular"
  },
  drawerBoton: {
    flexDirection: "row",
    padding: 15
  },
  drawerUsuario: {
    color: "white",
    alignSelf: "flex-end",
    padding: 5,
    paddingLeft: 20,
    fontFamily: "OpenSansRegular"
  },
  openDrawer:{
    width: 25,
    height: 20,
    marginLeft: 15,
    marginRight: 10,
    tintColor: "#636e72"
  }
});

export default styles;
