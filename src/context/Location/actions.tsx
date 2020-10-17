import { ActionTypes, LocationStateType } from './types';

export const locationActions = {
  setLocation: (dispatch: React.Dispatch<any>, payload: LocationStateType)=>{
    dispatch({
      type: ActionTypes.SET_LOCATION,
      payload
    })
  }
}