import { ActionTypes, AuthStateType } from './types';

export const authActions = {
  loadPrevData: (dispatch: React.Dispatch<any>, prevState: AuthStateType)=>{
    dispatch({
      type: ActionTypes.AUTH_LOAD_STATE,
      payload: prevState
    })
  },

  login: (dispatch: React.Dispatch<any>) => {
    dispatch({
      type: ActionTypes.AUTH_STATE_CHANGED,
      payload: {
        isLoggedIn: true
      }
    })
  },

  logout: (dispatch: React.Dispatch<any>) => {
    dispatch({
      type: ActionTypes.AUTH_STATE_CHANGED,
      payload: {
        isLoggedIn: false
      }
    })
  }
}