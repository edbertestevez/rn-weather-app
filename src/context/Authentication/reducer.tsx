import { 
  ActionTypes, 
  AuthStateType,
  AuthActions
} from "./types";

export const authState: AuthStateType = {
  isLoggedIn: false

  /** Insert other persisted states like preferences, etc */
};

export const authReducer = (state: AuthStateType, action: AuthActions) => {
  switch (action.type) {
    case ActionTypes.AUTH_LOAD_STATE: {
      return {
        ...state,
        ...action.payload
      }
    }
    case ActionTypes.AUTH_STATE_CHANGED: {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    }
    default:{
      return state;
    }
  }
};