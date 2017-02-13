import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import ProductStore from '../stores/ProductStore.js';
import ProductService from '../services/ProductService.js';

export default AuthenticatedComponent(class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
      price: '',
      image: ''
    };
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState(this.getProductState());
  }

  getProductState() {
    return {
      id: ProductStore.product.id,
      title: ProductStore.product.title,
      description: ProductStore.product.description,
      price: ProductStore.product.price,
      image: ProductStore.product.image
    };
  }

  addProduct(e) {
    ProductService.addProduct(this.state.title, this.state.description, this.state.price, this.state.image);
    ProductStore.addChangeListener(this._onChange);
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  changeDescription(e) {
    this.setState({description: e.target.value});
  }

  changePrice(e) {
    this.setState({price: e.target.value});
  }

  changeImage(e) {
    this.setState({image: e.target.files[0]});
  }

  render() {

    if (this.state.id != '') {
      return (<div>登録しました</div>)
    }

    return (
      <form role="form">
        <div className="form-group">
          <dt>Title : </dt>
          <dd><input type="text"  defaultValue={this.state.title} onChange={this.changeTitle.bind(this)}  placeholder="Title" /></dd>
          <dt>Description: </dt>
          <dd><input type="text"  defaultValue={this.state.description} onChange={this.changeDescription.bind(this)}  placeholder="Description" /></dd>
          <dt>Price: </dt>
          <dd><input type="text"  defaultValue={this.state.price} onChange={this.changePrice.bind(this)}  placeholder="Price" /></dd>
          <dt>Image: </dt>
          <dd><input type="file"  defaultValue={this.state.image} onChange={this.changeImage.bind(this)} placeholder="Image" /></dd>
        </div>
        <button type="submit" onClick={this.addProduct.bind(this)}>Submit</button>
      </form>
      );
  }
});
