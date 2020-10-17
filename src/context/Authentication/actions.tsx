import { ActionTypes, AuthStateType } from './types';

export const authActions = {
  loadPrevData: (dispatch: React.Dispatch<any>, payload: AuthStateType)=>{
    dispatch({
      type: ActionTypes.AUTH_LOAD_STATE,
      payload
    })
  },

  login: (dispatch: React.Dispatch<any>, accessToken: string) => {
    dispatch({
      type: ActionTypes.AUTH_STATE_CHANGED,
      payload: {
        isLoggedIn: true,
        accessToken
      }
    })
  },

  logout: (dispatch: React.Dispatch<any>) => {
    dispatch({
      type: ActionTypes.AUTH_STATE_CHANGED,
      payload: {
        isLoggedIn: false,
        accessToken: '',
        userInfo: null
      }
    })
  }
}