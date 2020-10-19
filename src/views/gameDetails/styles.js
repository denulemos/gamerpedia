import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  header:{
    backgroundColor: "#fab1a0",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#fab1a0",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30,
  },
  bodyContent: {  
    alignItems: 'center',
    padding:30,
    paddingTop: 70 
  },
  name:{
    fontSize:20,
    color: "#fab1a0",
    fontWeight: "600",
    fontFamily: 'yoster'
  },
  fotosContainer:{
    color: "black",
    backgroundColor: "#fab1a0",
    padding: 15,
    fontFamily: "yoster",
    fontSize: 18
  },
  containerScreens:{
flex: 1
  },
  datos:{
    fontSize:15,
    color: "#696969",
    fontWeight: "600",
    fontFamily: 'OpenSansRegular',  
  },
  puntuacion:{
    fontSize:10,
    color: "#696969",
    fontWeight: "600",
    fontFamily: 'OpenSansRegular',
    paddingTop: 5
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
  container:{
    backgroundColor: 'black',
    flex: 1
  }
});
