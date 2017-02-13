import AppDispatcher from '../dispatchers/AppDispatcher.js';
import API from '../constants/ApiConstants.js';

export default {
  getCurrentUser: (user) => {
    AppDispatcher.dispatch({
      actionType: API.CURRENT_USER,
      currentuser: user
    })
  }
}
