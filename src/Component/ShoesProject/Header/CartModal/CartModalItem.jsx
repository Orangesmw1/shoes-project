import React, { Component } from "react";

export default class CartModalItem extends Component {
  render() {
    const { item, handleShowCart } = this.props;

    return (
      <ul>
        <li>
          <img width={100} height={100} src={item.image} alt="" />
        </li>
        <li className="title-item-cart">
          <p>{item.name}</p>
        </li>
        <li className="count">
          <span className="minus btn-success">
            <i className="fa fa-minus" onClick={() => handleShowCart(item, -1)}></i>
          </span>
          <span className="number">{item.count}</span>
          <span className="plus btn-success">
            <i className="fa fa-plus" onClick={() => handleShowCart(item)}></i>
          </span>
        </li>
        <li>
          <p className="price-item-cart">{item.price * item.count}</p>
        </li>
        <li>
          <button className="btn-detail-cart btn btn-success">Details</button>
        </li>
      </ul>
    );
  }
}
