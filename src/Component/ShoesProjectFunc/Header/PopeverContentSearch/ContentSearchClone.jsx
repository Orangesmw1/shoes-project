import React from "react";

const ContentSearchClone = (props) => {
  const { item } = props;
  return (
    <ul className="pop-search">
      <li className="img-search">
        <img width={100} src={item.image} />
      </li>
      <li className="name-search">{item.name}</li>
    </ul>
  );
};

export default ContentSearchClone;
