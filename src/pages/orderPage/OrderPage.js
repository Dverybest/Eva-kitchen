import React, {useEffect, useState} from 'react';
import Footer  from "../../components/footer/Footer";
import HeaderNavbar from "./orderNavbar/OrderNavbar";
import './OrderPage.css';
import { connect } from 'react-redux';
import {getMenuAction} from "../../reduxSetup/actions/allMenuAction";
import {addToCartAction,} from "../../reduxSetup/actions/orderMenuAction";
import Dish from '../../components/reusableMenuCard/Dish';


const OrderPage = (props)=> {
    const meal = props.location.state;        
    const [quantity, setquantity] = useState(
        0
    )
    const addItemToCart =()=>{
        props.addToCartAction({...meal, quantity});
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
                <HeaderNavbar/>
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
                                <h4 className="price">{meal.price}</h4>
                                <div className="py-4">
                                    <span className="numberButton" onClick={handleDecrement} disabled={quantity < 1}><i class="fa fa-minus" aria-hidden="true"></i></span>
                                    <span className="mx-2">{quantity}</span>
                                    <span className="numberButton" onClick={handleIncrement}><i class="fa fa-plus" aria-hidden="true"></i></span>
                                </div>
                                <h6 className="mealName">{meal.name}</h6>
                                <p className='description'>{meal.description}</p>
                                <h6 className="priceTotal">{meal.price}</h6>
                                <div className="my-3">
                                    <span className="starColourOrange"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span className="starColourOrange"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span className="starColourOrange"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span className="starColourOrange"><i class="fa fa-star-half-o" aria-hidden="true"></i></span>
                                    <span className="starColourOrange"><i class="fa fa-star-o" aria-hidden="true"></i></span>
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
                        {props.allMenu?.slice(0,3).map((dish, index)=>{
                                return <Dish key={index} {...dish} />
                        })}
                    </div>
                </div>
            </section>
            <section className="p-5">
                <div className="container">
                    <h3 className="tabHeading">other Dishes</h3>
                    <div className="row">
                        {props.allMenu?.slice(0,3).map((dish, index)=>{
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
