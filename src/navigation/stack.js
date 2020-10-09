/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator  tabBarOptions={{activeBackgroundColor:'#474787', inactiveBackgroundColor: '#474787' , activeTintColor : 'white'}}>
      <Tab.Screen  name="JuegosPedia" component={Routes.GamesList} options={{
          tabBarLabel: 'Juegos',
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="space-invaders" color={'white'} size={size} />
          )
        }}/>
      <Tab.Screen name="Developers" component={Routes.DevList} options={{
          tabBarLabel: 'Desarolladores',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human-greeting" color={'white'} size={size} />
          )
        }}/>
      <Tab.Screen name="Plataformas" component={Routes.PlatList} options={{
          tabBarLabel: 'Plataformas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="nintendo-game-boy" color={'white'} size={size} />
          )
        }}/>
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Routes.Login}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#474787',
            },
          }}
          name="GamesList"
          component={HomeTabs}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#474787',
            },
          }}
          name="DevList"
          component={HomeTabs}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#006064',
            },
          }}
          name="PlatList"
          component={HomeTabs}
        />
        
        <Stack.Screen
           options={{
            title: '',
            headerStyle: {
              backgroundColor: '#474787',
            },
          }}
          name="GameDetails"
          component={Routes.GameDetails}
        />
         <Stack.Screen
           options={{
            title: '',
            headerStyle: {
              backgroundColor: '#474787',
            },
          }}
          name="PlatDetails"
          component={Routes.PlatDetails}
        />
         <Stack.Screen
           options={{
            title: '',
            headerStyle: {
              backgroundColor: '#474787',
            },
          }}
          name="DevDetails"
          component={Routes.DevDetails}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
