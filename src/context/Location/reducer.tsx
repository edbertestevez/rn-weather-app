import { Alert } from "react-native";
import { 
  ActionTypes, 
  LocationStateType,
  LocationActions
} from "./types";

export const locationState: LocationStateType = {
  coordinates: {
    longitude: '',
    latitude: ''
  }

  /** Insert other persisted states like preferences, etc */
};

export const locationReducer = (state: LocationStateType, action: LocationActions) => {
  switch (action.type) {

    case ActionTypes.SET_LOCATION: {
      let coordinates = action.payload.coordinates;
      
      return {
        ...state,
        coordinates:{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude
        }
      }
    }
    default:{
      return state;
    }
  }
};