import API from '../constants/ApiConstants';
import BaseStore from './BaseStore';

class ProductStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._product = {};
    this._products = [];
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case API.PRODUCT_URL:
        this._product = action.product;
        this.emitChange();
        break;
      case API.PRODUCT_URL + "SEARCH":
        this._products = action.products;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get product() {
    return this._product;
  }

  get products() {
    return this._products;
  }

}

export default new ProductStore();
