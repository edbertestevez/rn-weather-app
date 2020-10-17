import React, { createContext, useReducer, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Import modules types
import { ActionTypes, AuthStateType } from './Authentication/types';

//Import modules state
import { authState, authReducer } from './Authentication/reducer';

/**
 * Define types of each module's state 
 */
type InitialStateType = {
	auth: AuthStateType;
};

/**
 * Compiles app modules context state
 */
const initialState = {
	auth: authState
};

/** 
* Compile modules action types
*/
const AppActions = {
  auth: ActionTypes
}

/**
 * Compiles all reducer actions
 */
const mainReducer = (initialState: InitialStateType, action: any) => ({
	auth: authReducer(initialState.auth, action)
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

  /**
   * Loads initial state saved on AsyncStorage on app load
   */
  useEffect(() => {
		const loadPersistData = async () => {
			const persistData = await AsyncStorage.getItem('@app_context_persist');
			if (persistData) {
        state = JSON.parse(persistData);
			}
		};

		loadPersistData();
	},[]);


  /**
   * Saves application state on AsyncStorage on state update
   */
	useEffect(() => {
		const savePersistData = async () => {
			await AsyncStorage.setItem('@app_context_persist', JSON.stringify(state));
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