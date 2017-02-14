import React from 'react';
import Router, {Route} from 'react-router';
import cookie from 'react-cookie';
import AuthenticatedApp from './components/AuthenticatedApp'
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';
import AddProduct from './components/Product';
import SearchProduct from './components/SearchProduct';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';


var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
    <Route name="home" path="/" handler={Home}/>
    <Route name="user" handler={User}/>
    <Route name="products/add" handler={AddProduct}/>
    <Route name="products/search" handler={SearchProduct}/>
    <Route name="*" handler={Home}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

//var jwtParam = cookie.load('jwt');
var jwtParam = window.location.search.split("=")[1]

if (!!jwtParam) {
      console.log(jwtParam);
      localStorage.setItem('jwt', jwtParam);
}

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

