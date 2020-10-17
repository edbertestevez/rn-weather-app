import { auth0, auth0Url} from '../config/auth0';
import { ApiService } from './ApiService';

export const AuthService = {
	loginGithub: async () => {
		return await auth0.webAuth.authorize({ 
      scope: 'openid profile email',
      connection: 'github'
    })
  },
  logoutGithub: async () => {
		return auth0.webAuth.clearSession();
  },
  getUser: async (accessToken: string) => {
    let userInfo = await ApiService.get({url: auth0Url + "/userinfo", token: accessToken})
    return userInfo;
  }
};
