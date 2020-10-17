import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontSize } from '../../../constants/FontSize';
import { AppActions, AppContext } from '../../../context/main';
import { LocationService, CoordinatesType } from '../../../services/LocationService';
import AppButton from '../../components/AppButton';
import styles from './styles/Home.style';

const Home: React.FC = () => {
  const [ showCoordinates, setShowCoordinates] = useState(false);
	const { state, dispatch } = React.useContext(AppContext);
  const { userInfo } = state.auth;
  const { coordinates } = state.location;

  const onShowPress = async() =>{
    fetchCoordinates();
    setShowCoordinates(true);
  }

  const fetchCoordinates = async() =>{
    let location: CoordinatesType = await LocationService.getCoordinates() as CoordinatesType;
    AppActions.location.setLocation(dispatch, {coordinates: location.coords});
  }

  /**
   * Get location on application load.
   */
  useEffect(()=>{
    fetchCoordinates();
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userInfo?.name}</Text>
      <Text style={styles.link}>http://github.com/{userInfo?.nickname}</Text>

      <AppButton 
        label={"Show Coordinates"} 
        onPress={onShowPress}
        customStyle={styles.button}
      />

      
      {showCoordinates && (
        <View>
          <Text>Latitude: {coordinates.latitude}</Text>
          <Text>Longitude: {coordinates.longitude}</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
