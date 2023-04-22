import React, { Component } from "react";
import ShowProductShoes from "./ShowProduct/ShowProductShoes";

export default class SectionShoes extends Component {
  render() {
    const { listShoesProduct, handleShowCart } = this.props;

    return (
      <div>
        <ShowProductShoes listShoesProduct={listShoesProduct} handleShowCart={handleShowCart} />
      </div>
    );
  }
}
