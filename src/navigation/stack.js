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
    <Tab.Navigator  tabBarOptions={{activeBackgroundColor:'#636e72', inactiveBackgroundColor: '#2d3436' , activeTintColor : 'white'}}>
      <Tab.Screen   name="JuegosPedia" component={Routes.GamesList} options={{
          tabBarLabel: 'Juegos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="space-invaders" color={'#fab1a0'} size={size} />
          )
        }}/>
      <Tab.Screen name="Developers" component={Routes.DevList} options={{
          tabBarLabel: 'Desarolladores',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human-greeting" color={'#74b9ff'} size={size} />
          )
        }}/>
      <Tab.Screen name="Plataformas" component={Routes.PlatList} options={{
          tabBarLabel: 'Plataformas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="nintendo-game-boy" color={'#fd79a8'} size={size} />
          )
        }}/>
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Routes.Login}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#2d3436',
            },
            
           
          }}
          name="GamesList"
          component={HomeTabs}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#2d3436',
            },
          }}
          name="DevList"
          component={HomeTabs}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#2d3436',
            },
          }}
          name="PlatList"
          component={HomeTabs}
        />
        
        <Stack.Screen
           options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fab1a0',
            },
          }}
          name="GameDetails"
          component={Routes.GameDetails}
        />
         <Stack.Screen
           options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fd79a8',
            },
          }}
          name="PlatDetails"
          component={Routes.PlatDetails}
        />
         <Stack.Screen
           options={{
            title: '',
            headerStyle: {
              backgroundColor: '#74b9ff',
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
