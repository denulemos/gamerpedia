import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from 'react-native';
  
const Error = () => {
  return (
   <View style={{backgroundColor: 'black', flex: 1, alignContent: 'center', alignItems: 'center', paddingTop: 50}}>
    <Image
          source={require('../../assets/img/error.png')}
          style={{width: 120, height: 120, alignSelf: 'center', marginTop: 50}}
        />
     <Text style={{color: 'white', fontFamily: 'yoster', fontSize: 30}}>Hubo un error</Text>
     <Text style={{color: 'white', fontFamily: 'OpenSansRegular', margin: 10}}>intentá de vuelta en un momento</Text>
   </View>
  );
  } 

export default Error;
