import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { FontSize } from '../../../constants/FontSize';
import { AppActions, AppContext } from '../../../context/main';
import { RootNavigation } from '../../../navigation/AppNavigation';
import { AppRoutes } from '../../../navigation/AppRoutes';
import { AuthService } from '../../../services/AuthService';
import { flexStyles } from '../../../styles/common.styles';

interface LoginProps {}

const Login: React.FC = (props: LoginProps) => {
	const { state, dispatch } = useContext(AppContext);
	const [ isLoading, setIsLoading ] = useState(false);

	const onLogin = async () => {
		setIsLoading(true);

		const credentials = await AuthService.loginGithub();

		if (credentials) {
			await AppActions.auth.login(dispatch, credentials.accessToken);
		}

		setIsLoading(false);
	};

	// useEffect(() => {
	// 	if (state.auth.isLoggedIn) {
	// 		RootNavigation.navigate(AppRoutes.HOME);
	// 	}
	// }, []);

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
