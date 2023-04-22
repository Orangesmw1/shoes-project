import React from "react";
import "./DetailProduct.css";
import HeaderShoesFunc from "../Header/HeaderShoesFunc";

const DetailProduct = (props) => {
  return (
    <div>
      {/* <HeaderShoesFunc /> */}

      <div className="detail-product container ">
        <h2 className="detail-title">
          FEATURES
          <span className="detail-title-up">- Features Products</span>
        </h2>
      </div>
    </div>
  );
};

export default DetailProduct;
