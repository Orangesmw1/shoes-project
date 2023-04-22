import React, { Component } from "react";
import "./CarouselShoes.css";
import CarouselShoesItem from "./CarouselShoesItem";
import { Carousel } from "antd";

export default class CarouselShoes extends Component {
  render() {
    const { listShoesProduct } = this.props;

    return (
      <Carousel>
        {listShoesProduct.map((item) => {
          return <CarouselShoesItem item={item} key={item.id} />;
        })}
      </Carousel>
    );
  }
}
