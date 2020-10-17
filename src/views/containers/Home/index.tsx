import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AppActions, AppContext } from '../../../context/main';

const Home: React.FC = () => {
	const { state, dispatch } = React.useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title={"LOGOUT"}
        onPress={()=>AppActions.auth.logout(dispatch)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
