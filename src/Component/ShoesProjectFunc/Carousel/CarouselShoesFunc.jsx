import { Carousel } from "antd";
import React from "react";
import "./CarouselShoesFunc.css";
import CarouselItemFunc from "./CarouselItemFunc";

const CarouselShoesFunc = (props) => {
  const { listShoesProduct } = props;

  return (
    <Carousel className="carousel " autoplay>
      {listShoesProduct.map((item) => {
        return <CarouselItemFunc item={item} key={item.id} />;
      })}
    </Carousel>
  );
};

export default CarouselShoesFunc;
