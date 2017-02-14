import AppDispatcher from '../dispatchers/AppDispatcher.js';
import API from '../constants/ApiConstants.js';
import RouterContainer from '../services/RouterContainer';
import cookie from 'react-cookie';

export default {
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');
    
    AppDispatcher.dispatch({
      actionType: API.LOGIN_USER,
      jwt: jwt
    });
    
    if (savedJwt !== jwt) {

      RouterContainer.get().redirect('/user');
      localStorage.setItem('jwt', jwt);
    }
  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    //cookie.remove('jwt', { path: '/' });
    document.cookie = 'jwt=;domain=d281j5yldvh5ho.cloudfront.net;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    AppDispatcher.dispatch({
      actionType: API.LOGOUT_USER
    });
  }
}
