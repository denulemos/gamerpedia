import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const Stack = createStackNavigator();

function AppStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Routes.Login} options= {{headerShown: false}}/>
				<Stack.Screen name="GamesList" component={Routes.GamesList} options= {{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppStack;