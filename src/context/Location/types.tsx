import { ActionMap } from "../../constants/Types";

//Location Related types

export enum ActionTypes {
  SET_LOCATION = "SET_LOCATION",
  SET_FORECAST = "SET_FORECAST"
}

export type Payload = {
  [ActionTypes.SET_LOCATION] : LocationStateType;
}

export type Location = {
  longitude: string,
  latitude: string
}

export type LocationStateType = {
  coordinates: Location
}

export type LocationActions = ActionMap<Payload>[keyof ActionMap<Payload>];

