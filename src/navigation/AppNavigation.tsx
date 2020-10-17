import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as RootNavigation from './RootNavigation';
import { InitialStack } from './rootNav/InitialStack';
import { AuthenticatedTab } from './rootNav/AuthenticatedTab';
import { PublicStack } from './rootNav/PublicStack';

const AppNavigation = () => {
	const [ isAppLoading, setIsAppLoading ] = useState(true);

	const isLoggedIn = true; //dummy for testing routes

	useEffect(() => {
		setTimeout(() => {
			setIsAppLoading(false);
		}, 1500);
	}, []);

	return (
		<NavigationContainer ref={RootNavigation.navigationRef}>
			{isAppLoading ? (
				//Splash screen
				<InitialStack />
			) : isLoggedIn ? (
				//Authenticated screens
				<AuthenticatedTab />
			) : (
				//Public screens
				<PublicStack />
			)}
		</NavigationContainer>
	);
};

export { RootNavigation };

export default AppNavigation;
