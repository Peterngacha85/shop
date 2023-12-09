import React, { useEffect, useState } from "react";
import "./styles/shop.css";
import data from "../data.jsx";

const Shoping = () => {
  const { productItem } = data;
  const [test, setTest] = useState({});

  return (
    <div className="products">
      {productItem.map((item) => (
        <div className="image-container" key={item.id}>
          <img
            className="image"
            src={item.image}
            alt={`image for ${item.name}`}
          />
            <div className="item-details">
            <h2>{item.name}</h2>
            <p>$ {item.price}</p>
            <button
              className="add-to-cart-btn"
            >
              Add to cart  
            </button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Shoping;
