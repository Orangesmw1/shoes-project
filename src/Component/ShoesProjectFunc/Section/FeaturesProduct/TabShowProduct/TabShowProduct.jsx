import React, { useState } from "react";
import { Tabs } from "antd";
import "./TabShowProduct.css";
import ProductRandom2 from "./Product/ProductRandom2";
import ProductRandom3 from "./Product/ProductRandom3";
import Product from "./Product/Product";

const TabShowProduct = (props) => {
  const { listShoesProduct, handleAddCart } = props;

  const items = [
    {
      key: "1",
      label: `ALL`,
      children: <Product listShoesProduct={listShoesProduct} handleAddCart={handleAddCart} />
    },
    {
      key: "2",
      label: `ADIDAS`,
      children: <ProductRandom2 listShoesProduct={listShoesProduct} />
    },
    {
      key: "3",
      label: `NIKE`,
      children: <ProductRandom3 listShoesProduct={listShoesProduct} />
    }
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default TabShowProduct;
