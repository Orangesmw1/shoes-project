import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  const param = useParams();
  const id = param.id;

  const [itemProduct, setItemProduct] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
    }).then((response) => {
      if (response) {
        setItemProduct(response.data.content);
      }
    });
  }, []);

  console.log("itemProduct", itemProduct);

  return (
    <div>
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
