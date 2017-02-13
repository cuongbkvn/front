import request from 'reqwest';
import when from 'when';
import API from '../constants/ApiConstants';
import LoginStore from '../stores/LoginStore.js';
import UserActions from '../actions/UserAction.js';

class UserService {

  getCurrentUser() {
    request({
      url: API.CURRENT_USER_URL,
      method: 'GET',
      crossOrigin: true,
      headers: {
        'Authorization': LoginStore.jwt
      }
    })
    .then(function(response) {
      console.log(response.data);
      UserActions.getCurrentUser(response.data);
    });
  }

}

export default new UserService()