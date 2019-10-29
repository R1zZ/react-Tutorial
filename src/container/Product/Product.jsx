import React, { Component,Fragment } from 'react';
import '../../style/Product.css';
import CardProduct from '../CardProduct/CardProduct';
class Product extends Component {
  state ={
    order:0
  }

  //fungsi change pada Child
  handleCounterChange = (newValue) => {
    this.setState({
      order:newValue
    })
  }

  render() {
    const {order} = this.state
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            Logo
          </div>
          <div className="troley">
            <img src="https://cdn0.iconfinder.com/data/icons/shopping-and-commerce-3-7/48/103-512.png" alt=""/>
            <div className="count">{order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value)=>this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;