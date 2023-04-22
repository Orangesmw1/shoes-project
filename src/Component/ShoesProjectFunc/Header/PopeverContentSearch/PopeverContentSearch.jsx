import React from "react";
import ContentSearchClone from "./ContentSearchClone";
import "./PopeverContentSearch.css";

const PopeverContentSearch = (props) => {
  const { itemContentSearch } = props;

  return (
    <div style={{ width: "300px" }}>
      {itemContentSearch.map((item) => {
        return <ContentSearchClone item={item} key={item.id} />;
      })}
    </div>
  );
};

export default PopeverContentSearch;
