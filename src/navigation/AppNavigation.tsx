import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as RootNavigation from './RootNavigation';
import { InitialStack } from './rootNav/InitialStack';
import { AuthenticatedTab } from './rootNav/AuthenticatedTab';
import { AppContext, AppActions } from '../context/main';
import { PublicStack } from './rootNav/PublicStack';


const AppNavigation = () => {
	const { state } = useContext(AppContext);
	const [ isAppLoading, setIsAppLoading ] = useState(true);

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
			) : state.auth.isLoggedIn ? (
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
