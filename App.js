import React, {Component} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Provider as PaperProvider} from "react-native-paper";
import AppStack from "./src/navigation/stack";
import CustomDraw from "./src/navigation/customDrawer";
import firebase from './src/services/firebaseConfig';
import GamesList from './src/views/gamesList/index';
import {createDrawerNavigator} from "@react-navigation/drawer";
export default function App() {
  
  const Drawer = createDrawerNavigator();
    
      return (
        <PaperProvider>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContent={(props) => <CustomDraw {...props} />}
            >
              <Drawer.Screen name="Placeholder header" component={AppStack} />
            </Drawer.Navigator>
          </NavigationContainer>
        </PaperProvider>
      );
   
 

}
