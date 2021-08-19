import React, {useEffect, useState} from 'react';
import Footer  from "../../components/footer/Footer";
import Navbar from '../../components/navbar/Navbar';
import './OrderPage.css';
import { connect } from 'react-redux';
import { NotificationManager } from "react-notifications";
import {getMenuAction} from "../../reduxSetup/actions/menuAction";
import {addToCartAction,} from "../../reduxSetup/actions/orderMenuAction";
import Dish from '../../components/reusableMenuCard/Dish';
import { discounter } from '../../utils/discounter';
import StarRatings from 'react-star-ratings';

const OrderPage = (props)=> {
    let formatPrice =  new Intl.NumberFormat() 
    const meal = props.location.state;
    const [quantity, setquantity] = useState(0)
    const addItemToCart =(e)=>{
        e.preventDefault();
        if (quantity === 0 ){
            return NotificationManager.warning('please enter a quantity') 
        }
        props.addToCartAction({...meal, quantity});
        setquantity( 0)

    }
    const handleIncrement=()=>{
        setquantity(quantity + 1);
    }
    const handleDecrement=()=>{
        if (quantity === 0){
            return
        }
        setquantity(quantity - 1);
    }
   
    useEffect(() => {
        props.getMenuAction();        
    }, []);
    return (
        <div>
            <div>
                <Navbar/>
               <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span> 
            </div>
            <section className="orderSection p-5 mt-3">
                <div className="container p-5 ">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-sm-6">
                            <div className='mealImage'>
                                <img src={meal.image} alt="" className="mealImg"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mealDetails">
                                <h4 className="price">₦{formatPrice.format(meal.price)}</h4>
                                <h4 className="price">₦{formatPrice.format(discounter(meal.price, meal.discount))}</h4>
                                <div className="py-4">
                                    <span className="numberButton" onClick={handleDecrement} disabled={quantity < 1}><i class="fa fa-minus" aria-hidden="true"></i></span>
                                    <span className="mx-2">{quantity}</span>
                                    <span className="numberButton" onClick={handleIncrement}><i class="fa fa-plus" aria-hidden="true"></i></span>
                                </div>
                                <h6 className="mealName">{meal.name}</h6>
                                <p className='description'>{meal.description}</p>
                                <h6 className="priceTotal">₦{formatPrice.format(meal.price * quantity)}</h6>
                                <div className="my-3">
                                    <StarRatings
                                        numberOfStars = {5}
                                        starRatedColor="rgba(255, 141, 35, 1)"
                                        starEmptyColor="grey"
                                        rating = {meal.rating}
                                        starDimension="20px"
                                        starSpacing="3px"
                                    />
                                </div>
                                <div>
                                    <button className="btn cartButton" onClick={addItemToCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="border-grey border mx-5 my-3"></div>
            <div className="reviews px-5 mx-5">
                <h4 className="">Reviews</h4>
            </div>
            <section className="p-5">
                <div className="container">
                    <h3 className="tabHeading">Related Dishes</h3>
                    <div className="row">
                        {props.allMenu?.docs?.slice(0,3).map((dish, index)=>{
                                return <Dish key={index} {...dish} />
                        })}
                    </div>
                </div>
            </section>
            <section className="p-5">
                <div className="container">
                    <h3 className="tabHeading">other Dishes</h3>
                    <div className="row">
                        {props.allMenu?.docs?.slice(0,3).map((dish, index)=>{
                            return <Dish key={index} {...dish} />
                        })}
                    </div>
                </div>
            </section>
            
            <Footer/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        allMenu: state.meals.allMenu,
    };
};
const connector = connect(mapStateToProps,  {
    getMenuAction, addToCartAction,
});
export default connector(OrderPage);
