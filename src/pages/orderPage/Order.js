import React from 'react';
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { orangeStar } from "../../assets";

const Order = ()=> {
    return (
        <div>
            <Navbar/>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="" alt=""/>
                        </div>
                        <div className="col-6">
                            <h4 className="price">N1000</h4>
                            <div>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <h6>Fried Rice</h6>
                            <p>Fried rice with chicken laps</p>
                            <h6 className="priceTotal">N 1400</h6>

                            <span><img src={orangeStar} alt=""/></span>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h3>Related Dishes</h3>
                    <img src="" alt=""/>
                    <div>
                        <p>Jolof Rice</p>
                        <h6>800</h6>
                    </div>
                    <div><p>Nigerian party jollof rice ..</p></div>
                </div>
            </section>
            <section>
                <div>
                    <h3>Other Dishes</h3>
                    <img src="" alt=""/>
                    <div>
                        <p>Jolof Rice</p>
                        <h6>800</h6>
                    </div>
                    <div><p>Nigerian party jollof rice ..</p></div>
                </div>
            </section>
            
            <Footer/>
        </div>
    )
}
export default Order;
