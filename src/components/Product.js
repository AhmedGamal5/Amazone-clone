import React from "react";
import { BsStarFill } from "react-icons/bs";
// import { BsStarHalf } from "react-icons/bs";
// import { BsStar } from "react-icons/bs";
import "./Product.css";
import { useAuth } from "../Context/Globalstate";

const Product = ({ title, price, image, Rating, id }) => {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: Rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="productrating">      
        {Array(Rating)
          .fill()
          .map((_, i) => (
         <p key={i} > <BsStarFill className="staricon" /> </p>
         ))}       
      </div>
      <img src={image} alt="product imge" />
      <button onClick={addToBasket}>add to cart</button>
    </div>
  );
};

export default Product;
