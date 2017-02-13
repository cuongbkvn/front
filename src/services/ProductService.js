import requests from 'superagent';
import when from 'when';
import API from '../constants/ApiConstants';
import LoginStore from '../stores/LoginStore.js';
import ProductAction from '../actions/ProductAction.js';

class ProductService {

  addProduct(title, description, price, image) {
        requests
           .post(API.PRODUCT_URL)
           .field("title", title)
           .field("description", description)
           .field("price", price)
           .attach('image', image)
           .set('Authorization', LoginStore.jwt)
           .end(function(err, res){
             if (err || !res.ok) {
               alert('Error');
             } else {
               //console.log(res);
               ProductAction.addProduct(res);
             }
           });
  }

  searchProduct(keyword) {
        requests
           .get(API.PRODUCT_URL + "?q=" + keyword)
           .set('Authorization', LoginStore.jwt)
           .end(function(err, res){
             if (err || !res.ok) {
               alert('Error');
             } else {
               //console.log(res);
               ProductAction.searchProduct(res.text);
             }
           });
  }

}

export default new ProductService()