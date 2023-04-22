import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./CarouselShoesFunc.css";
import { NavLink } from "react-router-dom";

const CarouselItemFunc = (props) => {
  const springs = useSpring({
    from: { y: -400 },
    to: { y: 15 }
  });

  const { item } = props;

  return (
    <div className="carousel-box" style={{ backgroundImage: `url(${item.image})` }}>
      <animated.div className="content-box" style={{ ...springs }}>
        <h3 className="name-product-carousel ">{item.name}</h3>
        <span className="line-title"></span>
        <p className="description">{item.description}</p>

        <NavLink to="/product">
          <button className="btn btn-success">PURCHASE NOW</button>
        </NavLink>
      </animated.div>
    </div>
  );
};

export default CarouselItemFunc;
