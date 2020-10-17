import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../AppRoutes';
import Weather from '../../views/containers/Weather';

const Stack = createStackNavigator();

const WeatherTabStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={AppRoutes.WEATHER} component={Weather} />
		</Stack.Navigator>
	);
};

export default WeatherTabStack;
