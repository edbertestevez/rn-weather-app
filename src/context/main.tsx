import React, { createContext, useReducer, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Import modules types
import { AuthStateType } from './Authentication/types';
import { LocationStateType } from './Location/types';
import { WeatherStateType } from './Weather/types';

//Import modules state
import { authState, authReducer } from './Authentication/reducer';
import { locationState, locationReducer } from './Location/reducer';
import { weatherState, weatherReducer } from './Weather/reducer';


//Import modules actions
import { authActions } from './Authentication/actions';
import { locationActions } from './Location/actions';
import { weatherActions } from './Weather/actions';
import { Alert } from 'react-native';


/**
 * Define types of each module's state 
 */
type InitialStateType = {
	auth: AuthStateType;
	location: LocationStateType;
	weather: WeatherStateType;
};

/**
 * Compiles app modules context state
 */
const initialState = {
	auth: authState,
	location: locationState,
	weather: weatherState
};

/** 
* Compile modules action types
*/
const AppActions = {
	auth: authActions,
	location: locationActions,
	weather: weatherActions
}

/**
 * Compiles all reducer actions
 */
const mainReducer = (initialState: InitialStateType, action: any) => ({
	auth: authReducer(initialState.auth, action),
	location: locationReducer(initialState.location, action),
	weather: weatherReducer(initialState.weather, action)
});

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<any>;
}>({
	state: initialState,
	dispatch: () => null
});

/** 
 * App's main context provider 
 */
const AppProvider: React.FC = ({ children }) => {
	let [ state, dispatch ] = useReducer(mainReducer, initialState);
	let [ isInitialized, setIsInitialized ] = useState(false);

  /**
   * Loads initial state saved on AsyncStorage on app load
   */
  useEffect(() => {
		const loadPersistData = async () => {
			const authData = await AsyncStorage.getItem('user-auth');
			if (authData) {
        let prevState = JSON.parse(authData);
        if(prevState){
					AppActions.auth.loadPrevData(dispatch, prevState)
				}
			}
		};

		loadPersistData();
	},[]);


  /**
   * Saves application state on AsyncStorage on state update
   */
	useEffect(() => {
		const savePersistData = async () => {
			console.log("SAVING VALUE. . . . ")
			await AsyncStorage.setItem('user-auth', JSON.stringify(state.auth));
		};

		savePersistData();
	
  });
  
	return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, AppActions };
