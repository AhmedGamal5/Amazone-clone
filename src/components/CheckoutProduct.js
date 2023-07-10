import React from "react";
import { useAuth } from "../Context/Globalstate";
import { BsStarFill } from "react-icons/bs";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating, hiddenButton }) => {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
       <img src={image} className="checkoutProductimg" alt="product imge" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
               <BsStarFill className="staricon" />
              </p>
            ))}
        </div>
        {!hiddenButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
