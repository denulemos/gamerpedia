import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
 itemName:{
  marginTop: 10,
  fontFamily: 'yoster',
 
    color: 'white',
    fontSize: 25,
    textShadowColor:'black',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 0,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
   
    
 },
 image:{
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 30,
    marginTop: 10,
 },
 gridView: {
   flex: 1,
   backgroundColor: 'black'
 },
 itemContainer: {
   justifyContent: 'flex-end',
   borderRadius: 5,
   padding: 5,
   height: 150,
 },

});
