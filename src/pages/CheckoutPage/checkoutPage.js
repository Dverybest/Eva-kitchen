import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../components/Authentication/signIn';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import jollofRice from "../orderPage/orderImages/jollofRice.png";
import "./checkoutPage.css";

const checkoutPage =()=> {
    let formatPrice =  new Intl.NumberFormat() 

    return (
        <div className="checkoutBody">
            <Navbar/>
            <section className="container mt-5 pt-5 ">
                <div className="row px-0 mx-0">
                    <div className="col-sm-6 formBody">
                        <div className="processes px-5 py-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="px-2 activeText">Account</div>
                                <div className="px-2 dashSymbol"></div>
                                <span className="px-2" style={{}}><i class="fa fa-check-circle" aria-hidden="true"></i></span>
                                <span className="px-2 dashSymbol"></span>
                                <span className="px-2">Shipping</span>
                                <span className="px-2 dashSymbol"></span>
                                <span className='px-2'><i class="fa fa-check-circle" aria-hidden="true"></i></span>
                                <span className="px-2 dashSymbol"></span>
                                <span className="px-2">Payment</span>
                            </div>
                        </div>
                        <SignIn/>
                        {/* no cancel order option yet*/}
                        {/* <Link >Cancel Order</Link>
                        <Link>Shipping Details</Link> */}
                    </div>
                    <div className="col-sm-6 ">
                        <div className='py-4 px-5 orderSection'>
                            <div>
                               <h5>Order Summary</h5> 
                            </div>
                            <div className="mb-3">
                                <div className="row py-2">
                                    <div className="col-md-6">
                                        <div className="imageWrapper">
                                            <img src={jollofRice} alt="" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="">
                                            <p className="mb-0">Jollof Rice</p>
                                            <p className="mb-0"><strong>₦{formatPrice.format(2000)}</strong></p>
                                        </div>
                                        <div className="py-4">
                                            <span className="countButton" ><i class="fa fa-minus" aria-hidden="true"></i></span>
                                            <span className="mx-2">1</span>
                                            <span className="countButton"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-md-6">
                                        <div className="imageWrapper">
                                            <img src={jollofRice} alt="" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="">
                                            <p className="mb-0">Jollof Rice</p>
                                            <p className="mb-0"><strong>₦{formatPrice.format(2000)}</strong></p>
                                        </div>
                                        <div className="py-4">
                                            <span className="countButton" ><i class="fa fa-minus" aria-hidden="true"></i></span>
                                            <span className="mx-2">1</span>
                                            <span className="countButton"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="imageWrapper">
                                            <img src={jollofRice} alt="" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="">
                                            <p className="mb-0">Jollof Rice</p>
                                            <p className="mb-0"><strong>₦{formatPrice.format(2000)}</strong></p>
                                        </div>
                                        <div className="py-4">
                                            <span className="countButton" ><i class="fa fa-minus" aria-hidden="true"></i></span>
                                            <span className="mx-2">1</span>
                                            <span className="countButton"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>sub total</h6>
                                    <h6>₦316.55</h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Delivery fee</h6>
                                    <h6>₦3.45</h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Total</h6>
                                    <h6>₦320.45</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer/> */}
        </div>
    )
}
export default checkoutPage