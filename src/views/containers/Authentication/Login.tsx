import React, {useContext} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AppActions, AppContext } from '../../../context/main';

interface LoginProps {}

const Login: React.FC = (props: LoginProps) => {
	const { dispatch } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Button
        title="LOGIN"
        onPress={()=>dispatch({
          type: AppActions.auth.AUTH_STATE_CHANGED,
          payload: {
            isLoggedIn: true
          }
        })}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {}
});
