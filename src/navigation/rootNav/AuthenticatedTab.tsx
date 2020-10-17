import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeTabStack from '../moduleStack/HomeTabStack';
import WeatherTabStack from '../moduleStack/WeatherTabStack';
import { AppRoutes } from '../AppRoutes';
import { AppColors } from '../../constants/AppColors';


const MainTab = createBottomTabNavigator();

export const AuthenticatedTab = () => {
	return (
		<MainTab.Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					
					switch(route.name){
							case AppRoutes.HOME:{
									iconName = 'home-map-marker';
									break;
							}
							case AppRoutes.WEATHER:{
									iconName = 'weather-partly-cloudy';
									break;
							}
							default:{
									iconName = "";
							}
					}

					return <MaterialCommunityIcons name={iconName} size={size} color={ focused ? AppColors.GREEN : color} />;
					},
			})}
			tabBarOptions={{
					activeTintColor: AppColors.GREEN,
					inactiveTintColor: 'gray',
					labelStyle: {fontSize: 14},
					style:{height: 60, paddingBottom: 4}
			}}
		>
			<MainTab.Screen name={AppRoutes.HOME} component={HomeTabStack} />
			<MainTab.Screen name={AppRoutes.WEATHER} component={WeatherTabStack} />
		</MainTab.Navigator>
	);
};