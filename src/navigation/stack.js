/* eslint-disable prettier/prettier */
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Routes from "./routes";
import {TouchableOpacity, Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import menu from "../assets/img/open-menu.png";
import styles from './styles';
import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDraw from "../navigation/customDrawer";
const Drawer = createDrawerNavigator();

const getButton = ({navigation}) => (
  <TouchableOpacity
    style={{flexDirection: "row"}}
    onPress={() => navigation.openDrawer()}
  >
    <Image
      source={menu}
      style={styles.openDrawer}
    />
  </TouchableOpacity>
);

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#636e72",
        inactiveBackgroundColor: "#2d3436",
        activeTintColor: "white"
      }}
    >
      <Tab.Screen
        name="JuegosPedia"
        component={Routes.GamesList}
        options={{
          tabBarLabel: "Juegos",
          tabBarIcon: ({size}) => (
            <MaterialCommunityIcons
              name="space-invaders"
              color={"#fab1a0"}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Developers"
        component={Routes.DevList}
        options={{
          tabBarLabel: "Desarolladores",
          tabBarIcon: ({ size}) => (
            <MaterialCommunityIcons
              name="human-greeting"
              color={"#74b9ff"}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Plataformas"
        component={Routes.PlatList}
        options={{
          tabBarLabel: "Plataformas",
          tabBarIcon: ({ size}) => (
            <MaterialCommunityIcons
              name="nintendo-game-boy"
              color={"#fd79a8"}
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Routes.Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Registro"
        component={Routes.Registro}
      />

      <Stack.Screen
        options={(nav) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#2d3436"
          },
          headerLeft: () => getButton(nav)
        })}
        name="GamesList"
        component={HomeTabs}
      />

      <Stack.Screen
        options={(nav) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#2d3436"
          },
          headerLeft: () => getButton(nav)
        })}
        name="DevList"
        component={HomeTabs}
      />

      <Stack.Screen
        options={(nav) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#2d3436"
          },
          headerLeft: () => getButton(nav)
        })}
        name="PlatList"
        component={HomeTabs}
      />

      <Stack.Screen
        options={(nav) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#fab1a0"
          },
        
        })}
        name="GameDetails"
        component={Routes.GameDetails}
      />
      <Stack.Screen
        options={(nav) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#fd79a8"
          },
         
        })}
        name="PlatDetails"
        component={Routes.PlatDetails}
      />
      <Stack.Screen
        options={(nav) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#74b9ff"
          },
         
        })}
        name="DevDetails"
        component={Routes.DevDetails}
      />
    </Stack.Navigator>
  );
}

function DrawerNav(){
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDraw {...props} />}
  >
    <Drawer.Screen name="Placeholder header" component={AppStack} />
  </Drawer.Navigator>
  )
}

export default DrawerNav;
