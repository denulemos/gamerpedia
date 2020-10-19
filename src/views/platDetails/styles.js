import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fd79a8",
    height: 100
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#fd79a8",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 30
  },
  cantJuegos: {
    color: "white",
    fontFamily: "OpenSansRegular",
    fontSize: 15
  },
  viewItem: {
    height: 20,
    marginLeft: 10,
    backgroundColor: "#fd79a8",
    margin: 10,
    padding: 5
  },
  textItem: {color: "black", fontFamily: "yoster"},
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  listaJuegos: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 10
  },
  bodyContent: {
    paddingTop: 70,
    alignItems: "center",
    padding: 30
  },
  descripcion: {
    color: "white",
    padding: 20,
    fontFamily: "OpenSansRegular"
  },
  name: {
    fontSize: 30,
    color: "#fd79a8",
    fontWeight: "600",
    fontFamily: "yoster"
  },
  titulo: {
    color: "black",
    backgroundColor: "#fd79a8",
    padding: 15,
    fontFamily: "yoster",
    fontSize: 18
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
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
  }
});
