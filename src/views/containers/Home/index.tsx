import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { AppActions, AppContext } from '../../../context/main';
import { LocationService, CoordinatesType } from '../../../services/LocationService';
import { flexStyles } from '../../../styles/common.styles';
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

  const onLogout = () =>{
    AppActions.auth.logout(dispatch);
  }

  /**
   * Get location on application load.
   */
  useEffect(()=>{
    fetchCoordinates();
  },[])

  return (
    <ScrollView contentContainerStyle={[styles.container, flexStyles.center]}>
      
      <Image
        source={{uri: userInfo?.picture}}
        style={[styles.profileImage, ]}
      />

      <Text style={styles.name}>{userInfo?.name}</Text>
      
      <Text style={styles.link}>http://github.com/{userInfo?.nickname}</Text>

      {showCoordinates && (
        <View style={styles.coordinates}>
          <Text>Latitude: {coordinates.latitude}</Text>
          <Text>Longitude: {coordinates.longitude}</Text>
        </View>
      )}

      <AppButton 
        label={"Show Coordinates"} 
        onPress={onShowPress}
        customStyle={styles.button}
      />

      <AppButton 
        label={"Logout"} 
        onPress={onLogout}
        color={AppColors.DARK_GREY}
        customStyle={styles.logout}
      />

    </ScrollView>
  );
};

export default Home;
