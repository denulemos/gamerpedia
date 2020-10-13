import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#74b9ff",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },

  body: {
    marginTop: 40
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
