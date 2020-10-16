import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
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
    borderRadius: 5,
    padding: 5,
    height: 150
  },
  itemName: {
    marginTop: 10,
    fontFamily: "OpenSansRegular",
    color: "#fab1a0",
    fontSize: 10,
    textAlign: 'center'
  }
});
