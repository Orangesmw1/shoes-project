import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  const { itemCard, listShoesProduct, handleAddCart } = props;

  const handleRelated = () => {
    const relatedProducts = JSON.parse("[" + itemCard.relatedProducts + "]");
    const arrRelated = [];

    if (relatedProducts) {
      listShoesProduct.forEach((item) => {
        relatedProducts[0].forEach((element) => {
          if (item.id === element) {
            arrRelated.push(item);
          }
        });
      });
    }

    if (arrRelated.length > 0) {
      return arrRelated.map((item) => {
        return (
          <li key={item.id}>
            <NavLink to={`/product/${item.id}`}>
              <img src={item.image} alt="" />
            </NavLink>
          </li>
        );
      });
    }
  };

  return (
    <div className="card col-4">
      <div className="box-img-card">
        <NavLink to={`/product/${itemCard.id}`}>
          <img src={itemCard.image} alt="" />
        </NavLink>
      </div>

      <div className="product-related">
        <ul className="img-related">{handleRelated()}</ul>
      </div>

      <div className="box-card-content">
        <div className="content-card">
          <h5>{itemCard.name}</h5>
          <p>{itemCard.shortDescription}</p>
        </div>

        <div className="box-price">
          <div className="price-card">${itemCard.price}</div>
          <button className="btn btn-success" onClick={() => handleAddCart(itemCard)}>
            <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
