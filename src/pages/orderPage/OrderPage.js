import React from 'react';
import Footer  from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import orangeStar  from "../../assets/orangeStar.svg";
import jollofRice  from "./orderImages/jollofRice.png";
import './OrderPage.css';
const OrderPage = ()=> {
    return (
        <div>
            <Navbar/>
            <section className="p-5 mt-3">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={jollofRice} alt=""/>
                        </div>
                        <div className="col-md-7">
                            <h4 className="price">N1000</h4>
                            <div className="py-4">
                                <span className="numberButton">-</span>
                                <span className="mx-2">1</span>
                                <span className="numberButton">+</span>
                            </div>
                            <h6 className="mealName">Fried Rice</h6>
                            <p className='description'>Fried rice with chicken laps</p>
                            <h6 className="priceTotal">N 1400</h6>
                            <div className="my-3">
                                <span><img src={orangeStar} alt=""/></span>
                                <span><img src={orangeStar} alt=""/></span>
                                <span><img src={orangeStar} alt=""/></span>
                                <span><img src={orangeStar} alt=""/></span>
                                <span><img src={orangeStar} alt=""/></span>
                            </div>
                            <div>
                                <button className="btn cartButton">Add to Cart</button>
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
                        <div className="col-md-4">
                            <div className="p-1">
                                <img src={jollofRice} alt=""/>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <p className= 'dishName'>Jolof Rice</p>
                                    <h6 className="dishPrice">800</h6>
                                </div>
                                <div><p className='dishDescription'>Nigerian party jollof rice ..</p></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-1">
                                <img src={jollofRice} alt=""/>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <p className= 'dishName'>Jolof Rice</p>
                                    <h6 className="dishPrice">800</h6>
                                </div>
                                <div><p className='dishDescription'>Nigerian party jollof rice ..</p></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-1">
                                <img src={jollofRice} alt=""/>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <p className= 'dishName'>Jolof Rice</p>
                                    <h6 className="dishPrice">800</h6>
                                </div>
                                <div><p className='dishDescription'>Nigerian party jollof rice ..</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5">
                <div className="container">
                    <h3 className="tabHeading">other Dishes</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-1">
                                <img src={jollofRice} alt=""/>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <p className= 'dishName'>Jolof Rice</p>
                                    <h6 className="dishPrice">800</h6>
                                </div>
                                <div><p className='dishDescription'>Nigerian party jollof rice ..</p></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-1">
                                <img src={jollofRice} alt=""/>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <p className= 'dishName'>Jolof Rice</p>
                                    <h6 className="dishPrice">800</h6>
                                </div>
                                <div><p className='dishDescription'>Nigerian party jollof rice ..</p></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-1">
                                <img src={jollofRice} alt=""/>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <p className= 'dishName'>Jolof Rice</p>
                                    <h6 className="dishPrice">800</h6>
                                </div>
                                <div><p className='dishDescription'>Nigerian party jollof rice ..</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </div>
    )
}
export default OrderPage;
