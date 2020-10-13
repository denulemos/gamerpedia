import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: Platform.OS === "ios" ? 56 : 38,
    height: Platform.OS === "ios" ? 50 : 34,
    alignSelf: "center",
  },
  logoDraw: {
    width: 40,
    height: 35,
    alignSelf: "flex-start",
  },
  logoclose: {
    width: 30,
    marginTop: 10,
    height: 30,
    marginLeft: 130,
    tintColor: 'white',
    transform: [{rotateZ: '45deg'}]
  },
  user: {
    width: 40,
    height: 40,
   
    tintColor: 'white',
    marginLeft: 10
    
  },
  logout: {
    width: 30,
    height: 30,
   
    tintColor: '#7d5fff',
    marginLeft: 10
    
  },
  drawerView: {
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    padding: 20,
  },

  drawerView3: {
    padding: 5,
  },
  drawerOpciones: {
    paddingLeft: 15,
    paddingTop: 3,
    fontFamily: "OpenSansRegular",
  },
  drawerBoton: {
    flexDirection: "row",
    padding: 15,
  },
  drawerUsuario:{
    color: "white",
    alignSelf: "flex-end",
    padding: 5,
    paddingLeft: 20,
    fontFamily: "OpenSansRegular",
  }
});

export default styles;
