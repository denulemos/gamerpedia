import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import AppStack from './src/navigation/stack';

class App extends Component{
  render(){
  return(
    <PaperProvider>
    
        <AppStack/>
    
  </PaperProvider>
  )
   
  }
}
export default App;