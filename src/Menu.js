import React from "react";

const Menu = ({ item }) => {
  return (
    <div className="item">
      <div className="image-sec">
        <img src={item.img} alt={item.title} />
      </div>
      <div>
        <div className="price">
          <p>{item.title}</p>
          <p className="price-color">{item.price} $</p>
        </div>
        <div>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
