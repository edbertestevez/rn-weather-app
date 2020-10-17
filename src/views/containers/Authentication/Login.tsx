import React, { useContext, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { FontSize } from '../../../constants/FontSize';
import { AppActions, AppContext } from '../../../context/main';
import { AuthService } from '../../../services/AuthService';
import { flexStyles } from '../../../styles/common.styles';

const Login: React.FC = () => {
	const { state, dispatch } = useContext(AppContext);
	const [ isLoading, setIsLoading ] = useState(false);

	const onLogin = async () => {
		setIsLoading(true);

		const credentials = await AuthService.loginGithub();

		if (credentials) {
      let userInfo = await AuthService.getUser(credentials.accessToken);
			AppActions.auth.login(dispatch, credentials.accessToken);
			AppActions.auth.setUserInfo(dispatch, userInfo);
		}

		setIsLoading(false);
	};

	return (
		<View style={flexStyles.flex_center}>
			<TouchableOpacity style={styles.loginButton} onPress={onLogin}>
				{isLoading ? (
          <View style={flexStyles.row_center}>
            <ActivityIndicator color={AppColors.WHITE} size={26} />
            <Text style={styles.loginLabel}>{` Verifying`}</Text>
          </View>
				) : (
					<Text style={styles.loginLabel}>Login with Github</Text>
				)}
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
	loginLabel: {
		fontSize: FontSize.NORMAL,
		color: AppColors.WHITE
	}
});
