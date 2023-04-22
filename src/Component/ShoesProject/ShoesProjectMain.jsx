import React, { Component } from "react";
import "./ShoesProjectMain.css";
import HeaderShoes from "./Header/HeaderShoes";
import axios from "axios";
import CarouselShoes from "./Carousel/CarouselShoes";
import SectionShoes from "./Section/SectionShoes";
import CartModalShoes from "./Header/CartModal/CartModalShoes";

export default class ShoesProjectMain extends Component {
  state = {
    listShoesProduct: [],
    listShowCart: []
  };

  handleShowCart = (item, minus) => {
    const isMinus = minus ? minus : null;
    const listItemCart = [...this.state.listShowCart];

    const itemShoesUpdate = { ...item, count: 1 };

    const index = listItemCart.findIndex((itemShoes, i) => itemShoes.id === itemShoesUpdate.id);

    if (index !== -1) {
      if (isMinus) {
        if (listItemCart[index].count <= 1) {
          listItemCart[index].count = 1;
          this.setState({
            listShowCart: listItemCart
          });
        } else {
          listItemCart[index].count += minus;
          this.setState({
            listShowCart: listItemCart
          });
        }
      } else {
        listItemCart[index].count += 1;

        this.setState({
          listShowCart: listItemCart
        });
      }
    } else {
      listItemCart.push(itemShoesUpdate);
      this.setState({
        listShowCart: listItemCart
      });
    }
  };

  render() {
    return (
      <div>
        <HeaderShoes />
        <CarouselShoes listShoesProduct={this.state.listShoesProduct} />
        <SectionShoes listShoesProduct={this.state.listShoesProduct} handleShowCart={this.handleShowCart} />

        <CartModalShoes listShowCart={this.state.listShowCart} handleShowCart={this.handleShowCart} />
      </div>
    );
  }

  async componentDidMount() {
    await axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product"
    }).then((response) => {
      if (response) {
        this.setState({
          listShoesProduct: response.data.content
        });
      }
    });
  }
}
