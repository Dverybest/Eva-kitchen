import React, { useEffect, useMemo, useState } from 'react'
import { connect,useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import SignIn from '../../components/Authentication/signIn';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { addToCartAction,handleIncrementChange, handleDecrementChange } from "../../reduxSetup/actions/orderMenuAction";
import "./checkoutPage.css";

const CheckoutPage = (props) => {
    console.log(props, 88);
    let formatPrice =  new Intl.NumberFormat();
    const [currentCart, setCurrentCart] = useState([])
    const handleIncrement=(index)=>{
        props.handleIncrementChange(index)
    }
    const cartItem = useSelector(state => state.cart.cartItem)
    const handleDecrement=(index, quantity)=>{
        if (quantity === 0){
            return
        }
        props.handleDecrementChange (index)
    }

    useEffect(() => {
        setCurrentCart(props.cart);
        
    }, [props.cartItem ])
    let subTotal = useMemo(() => {
        return props.cart.reduce((sumValue, current) => sumValue + (current.quantity * current.price), 0)
    },
    
    [props.cart])
    const deliveryCost = 500.00
    
    return (
        <div className="checkoutBody">
            <Navbar/>
            <section className="container formHolder mt-5 pt-5 ">
                <div className="row px-0 mx-0">
                    <div className="col-sm-6 formSection">
                        <div className="processes px-5 py-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="px-2 activeText">Account</div>
                                <span className="dashSymbol"></span>
                                <div className="px-2" ><i class="fa fa-check-circle" aria-hidden="true"></i></div>
                                <span className=" dashSymbol"></span>
                                <span className="px-2">Shipping</span>
                                <span className=" dashSymbol"></span>
                                <span className='px-2'><i class="fa fa-check-circle" aria-hidden="true"></i></span>
                                <span className=" dashSymbol"></span>
                                <span className="px-2">Payment</span>
                            </div>
                        </div>
                        <SignIn/>
                        {/* no cancel order option yet*/}
                        {/* <Link >Cancel Order</Link>*/}
                        {/* <Link>Shipping Details</Link> */}
                    </div>
                    <div className="col-sm-6 orderView">
                        <div className='py-4 px-5 orderSection'>
                            <div>
                               <h5>Order Summary</h5> 
                            </div>
                            <div className="mb-3 purchaseDetails">
                                    
                                        {currentCart?.map((order, index)=>{
                                            return(
                                                
                                                <div className="row py-2">
                                                <div className="col-6">
                                                    <div className="imageWrapper">
                                                        <img src={order.image} alt="" className="w-100 h-100"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="">
                                                        <p className="mb-0">{order.name}</p>
                                                        <p className="mb-0"><strong>₦{formatPrice.format(order.price * order.quantity)}</strong></p>
                                                    </div>
                                                    <div className="py-4">
                                                        <span className="countButton" onClick={()=>{handleDecrement(index, order.quantity)}}><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                        <span className="mx-2">{order.quantity}</span>
                                                        <span className="countButton" onClick={()=>{handleIncrement(index)} } ><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                </div>
                                                )
                                        })}
                            </div>
                           
                            <div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>sub total</h6>
                                    <h6>₦{formatPrice.format(subTotal)}</h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Delivery fee</h6>
                                    <h6>₦{formatPrice.format(deliveryCost)}</h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Total</h6>
                                    <h6>₦{formatPrice.format(deliveryCost + subTotal)}</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        cart: state.cart.cartItem
    }
}
export default connect(mapStateToProps, {addToCartAction, handleIncrementChange, handleDecrementChange})(CheckoutPage);