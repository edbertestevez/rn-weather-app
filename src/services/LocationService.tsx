import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

export type CoordinatesType = {
  coords:{
    longitude: string,
    latitude: string  
  }
}

type LocationService = {
	getCoordinates: () => Promise<CoordinatesType>;
};


export const LocationService = {
  getCoordinates: async() => {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Mobile Location Permission",
          message:
            "The app needs access to your location " +
            "so we can get the weather status.",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return new Promise(function (resolve, reject) {
          Geolocation.getCurrentPosition(resolve, reject);
        })
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }

      
  }
}