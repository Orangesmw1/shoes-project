import React, { Component } from "react";
import { Card } from "antd";
import "./ShoesProductCard.css";

export default class ShoesProductCard extends Component {
  render() {
    const { item, handleShowCart } = this.props;

    return (
      <div className="col-4">
        <Card
          hoverable
          style={{
            width: 300,
            height: 430
          }}
          cover={<img height={250} alt="example" src={item.image} />}
        >
          <div className="box-content-card">
            <h6>{item.name}</h6>
            <p>{item.shortDescription}</p>
          </div>
          <div className="box-price-card">
            <h5 className="price">{item.price}$</h5>
            <button onClick={() => handleShowCart(item)}>
              <i className="fa fa-shopping-cart"></i>
            </button>
            <button className="detail-card">Detail</button>
          </div>
        </Card>
      </div>
    );
  }
}
