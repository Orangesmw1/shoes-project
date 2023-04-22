import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  const [itemProduct, setItemProduct] = useState(null);
  const [newID, setNewID] = useState(0);

  const param = useParams();
  const id = param.id;

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

  return (
    <div>
      {itemProduct ? (
        <div className="detail" key={itemProduct.id}>
          <div className="detail-product container   ">
            <div className="box-content">
              <h2 className="detail-title">
                PRODUCT
                <span className="detail-title-up">- Detail Products</span>
              </h2>

              <div className="box-content-item">
                <h4>{itemProduct.name}</h4>
                <p className="short-description">{itemProduct.shortDescription}</p>
                <p className="price">{itemProduct.price}$</p>

                <div className="box-size">
                  <p>Size: </p>
                  <div className="row">
                    {itemProduct.size.map((sizeItem, index) => {
                      return (
                        <div key={index} className="col-3">
                          {sizeItem}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button className="btn btn-success">ADD TO CART</button>

                {/* <p className="description-item-detail">{itemProduct.description}</p> */}
              </div>
            </div>

            <div className="box-img" key={itemProduct.id}>
              <div className="img-main">
                <img src={itemProduct.image} alt="" />
              </div>
              <ul>
                {itemProduct.relatedProducts.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <img width={100} src={item.image} alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailProduct;
