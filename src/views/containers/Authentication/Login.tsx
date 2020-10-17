import React, {useContext} from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { FontSize } from '../../../constants/FontSize';
import { AppActions, AppContext } from '../../../context/main';
import { flexStyles } from '../../../styles/common.styles';

interface LoginProps {}

const Login: React.FC = (props: LoginProps) => {
	const { dispatch } = useContext(AppContext);

  return (
    <View style={flexStyles.flex_center}>
      <TouchableOpacity style={styles.loginButton} onPress={()=>AppActions.auth.updateAuthState(dispatch, true)}>
        <Text style={styles.loginLabel}>Login with Github</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: AppColors.GREEN,
    padding: 20,
    borderRadius: 10
  },
  loginLabel:{
    fontSize: FontSize.NORMAL,
    color: AppColors.WHITE
  }
});
