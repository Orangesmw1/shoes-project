import React from "react";

export default function ModalItem(props) {
  const { itemCart, handleAddCart } = props;

  return (
    <ul>
      <li className="img-cart">
        <img src={itemCart.image} />
      </li>
      <li className="name-cart">{itemCart.name}</li>
      <li className="description-cart">{itemCart.description}</li>
      <li className="count">
        <span className="btn btn-success" onClick={() => handleAddCart(itemCart, -1)}>
          <i className="fa fa-minus"></i>
        </span>
        <span className="total-count">{itemCart.count}</span>
        <span className="btn btn-success" onClick={() => handleAddCart(itemCart)}>
          <i className="fa fa-plus"></i>
        </span>
      </li>

      <li className="price-cart">${itemCart.count * itemCart.price}</li>
    </ul>
  );
}
