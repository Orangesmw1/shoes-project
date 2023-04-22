import React, { useState } from "react";
import logo from "../../../assist/image/ShoesProjectFunc/logo.png";
import "./HeaderShoesFunc.css";
import ModalCart from "./ModalCart/ModalCart";
import { Popover } from "antd";
import PopeverContentSearch from "./PopeverContentSearch/PopeverContentSearch";
import { NavLink } from "react-router-dom";

const HeaderShoesFunc = (props) => {
  const { listProductCart, handleAddCart, listShoesProduct } = props;

  const [open, setOpen] = useState(false);
  const [itemContentSearch, setItemContentSearch] = useState([]);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleSearch = (e) => {
    const valueSearch = e.target.value.toLowerCase().replace(/\s/g, "");

    const arrSearch = [];
    listShoesProduct.find((element) => {
      let isValid = element.name.toLowerCase().replace(/\s/g, "").includes(valueSearch);
      isValid && arrSearch.push(element);
    });

    arrSearch.length > 0 && setItemContentSearch(arrSearch);
  };

  return (
    <div className="headerShoesFunc container">
      <div className="logo-box">
        <NavLink to={"/"}>
          <img src={logo} className="logo-img" alt="" />
        </NavLink>
      </div>

      <nav className="category-box">
        <ul>
          <li>HOME</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>NEWS</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      <div className="search-cart">
        <form>
          {/* <button className=" btn-searchh">
            <i className="fa fa-search"></i>
          </button> */}

          <Popover
            content={<PopeverContentSearch itemContentSearch={itemContentSearch} />}
            trigger="hover"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <input type="text" className="search-header" placeholder="Search Product" onChange={handleSearch} />
          </Popover>
        </form>

        <ModalCart listProductCart={listProductCart} handleAddCart={handleAddCart} />
      </div>
    </div>
  );
};

export default HeaderShoesFunc;
