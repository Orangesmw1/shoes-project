import React, { useState } from "react";
import HeaderShoesFunc from "./Header/HeaderShoesFunc";
import CarouselShoesFunc from "./Carousel/CarouselShoesFunc";
import SectionShoesFunc from "./Section/SectionShoesFunc";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailProduct from "./Detail/DetailProduct";

const ShoesProjectFunc = (props) => {
  const { listShoesProduct } = props;

  const [listProductCart, setListProductCart] = useState([]);

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
      <CarouselShoesFunc listShoesProduct={listShoesProduct} />
      <SectionShoesFunc listShoesProduct={listShoesProduct} handleAddCart={handleAddCart} />
      <ToastContainer />;
    </div>
  );
};

export default ShoesProjectFunc;
