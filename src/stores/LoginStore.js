import API from '../constants/ApiConstants';
import BaseStore from './BaseStore';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._jwt = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case API.LOGIN_USER:
        this._jwt = action.jwt;
        this.emitChange();
        break;
      case API.LOGOUT_USER:
        this._jwt = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._jwt;
  }
}

export default new LoginStore();
