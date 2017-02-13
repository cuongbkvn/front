import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import UserStore from '../stores/UserStore.js';
import UserService from '../services/UserService.js';

export default AuthenticatedComponent(class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getUserState();
    this._onChange = this._onChange.bind(this);
  }
  /** DOMにcomponent追加したばかりの後、API読み込む*/
  componentDidMount() {
    if (!this.state.user) {
      this.requestCurrentUser();
    }

    UserStore.addChangeListener(this._onChange);
  }
  /** DOMからcomponentを削除前に*/
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getUserState());
  }
  /** ユーザ情報取得*/
  requestCurrentUser() {
    UserService.getCurrentUser();
  }

  getUserState() {
    return {
      user: UserStore.user
    };
  }
  render() {
    return (<h1>API response: {this.state.user}</h1>);
  }
});
