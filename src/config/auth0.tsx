import Auth0 from 'react-native-auth0';

export const auth0Domain = 'dev-estevez.us.auth0.com';
export const auth0Url = 'https://' + auth0Domain;

export const auth0 = new Auth0({ 
  domain: auth0Domain, 
  clientId: 'wGaUoVBti2Qr7DJJzF6sODY2FLHTqg23' 
});