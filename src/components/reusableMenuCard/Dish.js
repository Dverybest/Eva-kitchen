import React from "react";
import "./Dish.css";
import { useHistory } from "react-router-dom";

const Dish = ({ image, name, price, rating, description, discount, _id}) => {
  let formatPrice =  new Intl.NumberFormat() 
  const scrollToTop =()=>{
    window.scrollTo(0,0)
  }
  const history = useHistory();
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6  px-0 mx-0 d-flex justify-content-center">
        <div className="dish mx-2">
          <div className="dish-image ">
            <div className="rating">{rating}</div>
            <img className="dish-img" src={image} alt="" />
          </div>
          <div className="dish-info">
            <h5>{name}</h5>
            <span>₦{formatPrice.format(price)} </span>
          </div>
          <p> {description} </p>
          <button onClick={() => {
            history.push({pathname:"/order", state:{name, image, price, rating, description, _id, discount}});
            scrollToTop();
          }}>Order</button>
        </div>
      </div>
    </>
  );
};
export default Dish;
