import React, { createContext, useReducer, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Import modules types
import { AuthStateType } from './Authentication/types';
import { LocationStateType } from './Location/types';

//Import modules state
import { authState, authReducer } from './Authentication/reducer';
import { locationState, locationReducer } from './Location/reducer';


//Import modules actions
import { authActions } from './Authentication/actions';
import { locationActions } from './Location/actions';


/**
 * Define types of each module's state 
 */
type InitialStateType = {
	auth: AuthStateType;
	location: LocationStateType
};

/**
 * Compiles app modules context state
 */
const initialState = {
	auth: authState,
	location: locationState
};

/** 
* Compile modules action types
*/
const AppActions = {
	auth: authActions,
	location: locationActions
}

/**
 * Compiles all reducer actions
 */
const mainReducer = (initialState: InitialStateType, action: any) => ({
	auth: authReducer(initialState.auth, action),
	location: locationReducer(initialState.location, action)
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
			await AsyncStorage.setItem('user-auth', JSON.stringify(state.auth));
		};

		if(isInitialized){
			savePersistData();
		}
  });
  
	return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, AppActions };
