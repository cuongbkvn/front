import request from 'reqwest';
import when from 'when';
import API from '../constants/ApiConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  logout() {
    LoginActions.logoutUser();
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.id_token;
        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

export default new AuthService()
