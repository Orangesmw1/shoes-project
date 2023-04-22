import React, { Component } from "react";
import "./CartModalShoes.css";
import CartModalItem from "./CartModalItem";

export default class CartModalShoes extends Component {
  render() {
    const { listShowCart, handleShowCart } = this.props;

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="box-show-cart">
                {listShowCart.map((item, index) => {
                  return <CartModalItem key={item.id} index={index} item={item} handleShowCart={handleShowCart} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
