import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

const ProductRandom3 = (props) => {
  const { listShoesProduct } = props;

  const handleRandomePush = () => {
    const arrRandomProduct = [];

    if (listShoesProduct) {
      for (let index = 4; index < 10; index++) {
        arrRandomProduct.push(listShoesProduct[index]);
      }
    }

    if (arrRandomProduct.length > 0) {
      return arrRandomProduct.map((itemCard) => {
        return <ProductCard itemCard={itemCard} key={itemCard.id} listShoesProduct={listShoesProduct} />;
      });
    }
  };

  return (
    <div className="product row">
      {/* {listShoesProduct.map((itemCard) => {
        return <ProductCard itemCard={itemCard} key={itemCard.id} listShoesProduct={listShoesProduct} />;
      })} */}

      {listShoesProduct && handleRandomePush()}
    </div>
  );
};

export default ProductRandom3;
