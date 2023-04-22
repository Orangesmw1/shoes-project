import React, { Component } from "react";
import ShoesProductCard from "./ShoesProductCard/ShoesProductCard";

export default class ShowProductShoes extends Component {
  render() {
    const { listShoesProduct, handleShowCart } = this.props;

    return (
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row">
          {listShoesProduct.map((item) => {
            return <ShoesProductCard item={item} key={item.id} handleShowCart={handleShowCart} />;
          })}
        </div>
      </div>
    );
  }
}
