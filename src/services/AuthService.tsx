import { auth0, auth0Url } from '../config/auth0';
import { User } from '../context/Authentication/types';
import { ApiService } from './ApiService';

type AuthResponseType = {
  accessToken: string,
  idToken: string,
  //Other parameters
}

type AuthServiceType = {
	loginGithub: () => Promise<AuthResponseType>;
	logoutGithub: () => Promise<void>;
	getUser: (accessToken: string) => Promise<User>;
};

export const AuthService: AuthServiceType = {
	loginGithub: async () => {
		return await auth0.webAuth.authorize({
			scope: 'openid profile email',
			connection: 'github'
		});
	},
	logoutGithub: async () => {
		return auth0.webAuth.clearSession();
	},
	getUser: async (accessToken: string) => {
		let userInfo: User = await ApiService.get({ url: auth0Url + '/userinfo', token: accessToken });
		return userInfo;
	}
};
