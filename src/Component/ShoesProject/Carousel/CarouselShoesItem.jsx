import React, { Component } from "react";
import { Carousel } from "antd";

export default class CarouselShoesItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <Carousel>
        <div className="carousel-item">
          <div className="box-carousel">
            <div className="img-shoes-item">
              <img src={item.image} alt="" />
            </div>

            <div className="content-shoes-item">
              <h4 className="name-item">{item.name}</h4>
              <p className="description-item">{item.shortDescription}</p>

              <button className="detail btn btn-success">Detail</button>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
