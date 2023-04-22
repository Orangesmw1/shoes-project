import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./ModalCart.css";
import ModalItem from "./ModalItem";

const ModalCart = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { listProductCart, handleAddCart } = props;

  const showModal = () => {
    if (listProductCart.length > 0) {
      setIsModalOpen(true);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleTotal = () => {
    const total = [];

    listProductCart.forEach((element) => {
      total.push(element.price * element.count);
    });

    if (total.length > 0) {
      const sum = total.reduce((a, b) => a + b, 0);

      return sum;
    }
  };

  return (
    <div>
      <div className="cart">
        <i className="fa fa-shopping-cart" onClick={showModal}></i>
      </div>

      <Modal title="Cart" className="modal-cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {listProductCart.map((itemCart) => {
          return <ModalItem itemCart={itemCart} key={itemCart.id} handleAddCart={handleAddCart} />;
        })}

        <div className="total">
          <span>
            <span className="title-total">Total:</span> {handleTotal()}$
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCart;
