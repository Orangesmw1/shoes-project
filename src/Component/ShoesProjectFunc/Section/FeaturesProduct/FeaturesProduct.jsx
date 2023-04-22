import React from "react";
import "./FeaturesProduct.css";
import TabShowProduct from "./TabShowProduct/TabShowProduct";

const FeaturesProduct = (props) => {
  const { listShoesProduct, handleAddCart } = props;
  return (
    <div className="features-product container ">
      <h2 className="features-title">
        FEATURES
        <span className="features-title-up">- Features Products</span>
      </h2>

      <TabShowProduct listShoesProduct={listShoesProduct} handleAddCart={handleAddCart} />
    </div>
  );
};

export default FeaturesProduct;
