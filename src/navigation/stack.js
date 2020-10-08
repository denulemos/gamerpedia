import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
    return (
      <Tab.Navigator>
        
        <Tab.Screen name="Juegos" component={Routes.GamesList} />
		<Tab.Screen name="Developers" component={Routes.DevList} />
		<Tab.Screen name="Plataformas" component={Routes.PlatList} />
      </Tab.Navigator>
    );
  }

function AppStack() {
	return (
		<NavigationContainer>
		
		 <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Login" component={Routes.Login} />
    <Stack.Screen name="GamesList" component={HomeTabs} />
	<Stack.Screen name="DevList" component={HomeTabs} />
	<Stack.Screen name="PlatList" component={HomeTabs} />
  </Stack.Navigator>

	</NavigationContainer>
	);
}

export default AppStack;