var prefix = 'http://cuong-loadblancer-174542059.ap-northeast-1.elb.amazonaws.com/';
//var prefix = 'http://localhost:9000/';

var API = {
  TWITTER_URL: prefix + 'twitter/auth',
  FACEBOOK_URL: prefix + 'facebook/auth',
  GITHUB_URL: prefix + 'github/auth',
  CURRENT_USER_URL: prefix + 'current_user',
  PRODUCT_URL: prefix + 'app/products',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  CURRENT_USER: 'CURRENT_USER'
  }

  export default API