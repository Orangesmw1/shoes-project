import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderShoesFunc from "./Header/HeaderShoesFunc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContainerFunc = ({ children }) => {
  const [listShoesProduct, setListShoesProduct] = useState([]);
  const [listProductCart, setListProductCart] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product"
    }).then((response) => {
      if (response) {
        setListShoesProduct(response.data.content);
      }
    });

    const listCartLocal = JSON.parse(localStorage.getItem("listCart"));
    if (listCartLocal) {
      setListProductCart(listCartLocal);
    }
  }, []);

  const notify = (type) => {
    switch (type) {
      case "info":
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        });

        break;
      case "success":
        toast.success("More successful products!", {
          position: toast.POSITION.TOP_LEFT
        });
        break;
      case "warning":
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        break;
      case "error":
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
        break;
    }
  };

  const handleAddCart = (item, minus) => {
    const isMinus = minus ? minus : null;

    const listItem = [...listProductCart];
    const itemUpdate = { ...item, count: 1 };
    const index = listItem.findIndex((itemCheck, i) => itemCheck.id === itemUpdate.id);

    if (index !== -1) {
      if (isMinus) {
        if (listItem[index].count <= 1) {
          listItem[index].count = 1;
          setListProductCart(listItem);
        } else {
          listItem[index].count += minus;
          setListProductCart(listItem);
        }
      } else {
        listItem[index].count += 1;
        setListProductCart(listItem);
      }
    } else {
      listItem.push(itemUpdate);
      setListProductCart(listItem);
      notify("success");
    }
  };

  return (
    <div>
      <HeaderShoesFunc
        listProductCart={listProductCart}
        handleAddCart={handleAddCart}
        listShoesProduct={listShoesProduct}
      />

      {children}
    </div>
  );
};

export default ContainerFunc;
