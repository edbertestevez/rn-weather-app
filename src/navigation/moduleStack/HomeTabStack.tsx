import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../AppRoutes';
import Home from '../../views/containers/Home';

const Stack = createStackNavigator();

const HomeTabStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={AppRoutes.HOME} component={Home} />
		</Stack.Navigator>
	);
};

export default HomeTabStack;
