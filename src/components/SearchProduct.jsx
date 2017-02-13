import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import ProductStore from '../stores/ProductStore.js';
import ProductService from '../services/ProductService.js';

export default AuthenticatedComponent(class SearchProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      results: []
    };
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState(this.getSearchProductState());
  }

  getSearchProductState() {
    return {
      keyword: this.state.keyword,
      results: ProductStore.products,
    };
  }

  searchProduct(e) {
    ProductService.searchProduct(this.state.keyword);
    ProductStore.addChangeListener(this._onChange);
  }

  changeKeyWord(e) {
    this.setState({keyword: e.target.value});
  }

  render() {
    const results = this.state.results;
    return (
      <form role="form">
        <div className="form-group">
          <dt>Search : </dt>
          <dd><input type="text"  defaultValue={this.state.keyword} onChange={this.changeKeyWord.bind(this)}  placeholder="Search" /></dd>
        </div>
        <button type="submit" onClick={this.searchProduct.bind(this)}>Submit</button>
        <dt>{this.state.results}</dt>
      </form>
    );
  }
});
