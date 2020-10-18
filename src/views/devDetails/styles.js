import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#74b9ff",
    height: 100
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#74b9ff",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 30
  },

  body: {
    marginTop: 40
  },
  itemTitle:{
    color: "white",
    textAlign: "center",
    fontFamily: "OpenSansRegular"
  },
  juegosTitle:{
    color: "#2d3436",
    backgroundColor: "#74b9ff",
    padding: 15,
    fontFamily: "yoster",
    fontSize: 18
  },
  bodyContent: {
    alignItems: "center",
    padding: 30
  },
  datos: {
    fontSize: 15,
    color: "#696969",
    fontWeight: "600",
    fontFamily: "OpenSansRegular"
  },
  name: {
    fontSize: 25,
    color: "#74b9ff",
    fontWeight: "600",
    fontFamily: "yoster"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },

  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  },
  container: {
    backgroundColor: "black",
    flex: 1
  },
  gridView: {
    flex: 1,
    backgroundColor: "black"
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 10,
    padding: 5,
    height: 150
  },
});
