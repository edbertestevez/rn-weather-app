import { 
  ActionTypes, 
  AuthStateType,
  AuthActions
} from "./types";

export const authState: AuthStateType = {
  isLoggedIn: false,
};

export const authReducer = (state: AuthStateType, action: AuthActions) => {
  switch (action.type) {
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