import React from "react";
import FeaturesProduct from "./FeaturesProduct/FeaturesProduct";

const SectionShoesFunc = (props) => {
  const { listShoesProduct, handleAddCart } = props;
  return (
    <div>
      <FeaturesProduct listShoesProduct={listShoesProduct} handleAddCart={handleAddCart} />
    </div>
  );
};

export default SectionShoesFunc;
