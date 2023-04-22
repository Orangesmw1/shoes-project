import React, { useEffect, useState } from "react";
import CarouselShoesFunc from "./Carousel/CarouselShoesFunc";
import SectionShoesFunc from "./Section/SectionShoesFunc";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoesProjectFunc = () => {
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

  useEffect(() => {
    if (listProductCart.length > 0) {
      localStorage.setItem("listCart", JSON.stringify(listProductCart));
    }
  }, [listProductCart]);

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
      <CarouselShoesFunc listShoesProduct={listShoesProduct} />
      <SectionShoesFunc listShoesProduct={listShoesProduct} handleAddCart={handleAddCart} />
      <ToastContainer />;
    </div>
  );
};

export default ShoesProjectFunc;
