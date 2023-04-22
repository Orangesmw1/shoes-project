import React from "react";
import { NavLink } from "react-router-dom";

const ContentSearchClone = (props) => {
  const { item } = props;
  return (
    <NavLink style={{ textDecoration: "none" }} to={`/product/${item.id}`}>
      <ul className="pop-search">
        <li className="img-search">
          <img width={100} src={item.image} />
        </li>
        <li className="name-search text-dark ">{item.name}</li>
      </ul>
    </NavLink>
  );
};

export default ContentSearchClone;
