import React, { Component } from 'react';
import '../../style/Product.css';
class CardProduct extends Component {
  state ={
    order:0
  }

  // fungsi menerima nilai dari parent
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue)
  }

  handlePlus = () => {
    this.setState({
      order:this.state.order + 1
    }, () => {
      this.handleCounterChange(this.state.order) // mengembalikain nilai balik dari parent
    })
  }

  handleMinus = () => {
    if (this.state.order > 0) {      
      this.setState({
        order:this.state.order - 1
      },() => {
        this.handleCounterChange(this.state.order)
      })
    }
  }

  render() {
    const {order} = this.state
    return (
        <div className="card">
          <div className="img-thumb-prod">
            <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/Ayam+Utuh+0708.jpg" alt="" />
          </div>
          <p className="product-title">Hardisk Abal2</p>
          <p className="product-price">Rp.35.000,-</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>-</button>
            <input type="text"  value={order} disabled />
            <button className="plus" onClick={this.handlePlus}>+</button>
          </div>
        </div>
    );
  }
}

export default CardProduct;