import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Provider as PaperProvider} from "react-native-paper";
import DrawerNav from './src/navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";

export default function App() {
  
  const Drawer = createDrawerNavigator();
    
      return (
        <PaperProvider>
          <NavigationContainer>
           <DrawerNav/>
          </NavigationContainer>
        </PaperProvider>
      );
   
 

}
