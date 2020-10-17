import { auth0, auth0Domain} from '../config/auth0';
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
  getUser: async () => {
    let response = ApiService.get(auth0Domain)
    console.log(response)
  }
};
