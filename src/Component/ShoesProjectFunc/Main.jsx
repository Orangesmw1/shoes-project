import React, { Component } from "react";
import ShoesProjectFunc from "./ShoesProjectFunc";
import axios from "axios";

export default class Main extends Component {
  state = {
    listShoesProduct: []
  };

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

  render() {
    return (
      <div>
        <ShoesProjectFunc listShoesProduct={this.state.listShoesProduct} />
      </div>
    );
  }
}
