import AppDispatcher from '../dispatchers/AppDispatcher.js';
import API from '../constants/ApiConstants.js';

export default {
  addProduct: (response) => {
    AppDispatcher.dispatch({
      actionType: API.PRODUCT_URL,
      product: response
    })
  },
  searchProduct: (response) => {
    AppDispatcher.dispatch({
      actionType: API.PRODUCT_URL + "SEARCH",
      products: response
    })
  }
}
