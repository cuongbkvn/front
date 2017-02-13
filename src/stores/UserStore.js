import API from '../constants/ApiConstants';
import BaseStore from './BaseStore';

class UserStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = '';
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case API.CURRENT_USER:
        this._user = action.currentuser;
        this.emitChange();
        break;
      case API.LOGOUT_USER:
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get user() {
    return this._user;
  }
}

export default new UserStore();
