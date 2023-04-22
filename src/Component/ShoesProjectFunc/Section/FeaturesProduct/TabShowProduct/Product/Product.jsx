import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

const Product = (props) => {
  const { listShoesProduct, handleAddCart } = props;

  return (
    <div className="product row">
      {listShoesProduct.map((itemCard) => {
        return (
          <ProductCard
            itemCard={itemCard}
            key={itemCard.id}
            listShoesProduct={listShoesProduct}
            handleAddCart={handleAddCart}
          />
        );
      })}
    </div>
  );
};

export default Product;
