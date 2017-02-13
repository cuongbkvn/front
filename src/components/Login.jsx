import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'
import API from '../constants/ApiConstants';
import RouterContainer from '../services/RouterContainer';

export default class Login extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Login with </h1>
        <ul>
        <li><a href={API.TWITTER_URL}>Sign In Twitter</a></li>
        <li><a href={API.FACEBOOK_URL}>Sign In Facebook</a></li>
        <li><a href={API.GITHUB_URL}>Sign In Github</a></li>
        </ul>
    </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
