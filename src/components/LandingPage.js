import React from 'react'
import './LandingPage.css'
import Dish1 from '../images/dish1.svg'
import image1 from '../images/about image.svg'
import Navbar from './Navbar'
import Cards from './Cards'

const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <Navbar />
            <section className='hero'>
                <div className='hero-intro'>
                        <div className='hero-info '>
                            <h1>Your Favourite Food Delivered Hot And Fresh</h1>
                            <p>Satisfy your craving by getting the food you want delivered to you fast. EvaKitchen is now available in selected areas in Enugu.</p>
                            <button>Order Now <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </div>
                        <div className='hero-image'>
                        <img src={Dish1} alt='' className='img-fluid' />
                        </div>
                </div>
                <div className='container hero-contact'>
                    <div className='row px-0  justify-content-center'>
                        <div className='hero-contact-info col-md-4'>
                            <div className='icons'><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                            <p className='mid_text'>10:00am - 07:00pm</p>
                            <p>Working Hours</p>
                        </div>
                        <div className='hero-contact-info col-md-4'>
                            <div className='icons'><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <p className='mid_text'>Independence Layout Enugu</p>
                            <p>Get Direction</p>
                        </div>
                        <div className='hero-contact-info col-md-4'>
                            <div className='icons'><i className="fa fa-phone" aria-hidden="true"></i></div>
                            <p className='mid_text'>+234 706 121 1353</p>
                            <p>Call Online</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='landingPage-about'>
                <h2 className='sec-text'>ABOUT US</h2>
                <h3>All you need to know about us</h3>
                <div className='landingPage-about-content'>
                    <img src={image1} alt='' />
                    <div className='landingPage-about-info'>
                        <p>“Healthy” isn’t just an idea. “Healthy” is science, and we take it seriously. Every delicious dish and drink at EvaKitchen is crafted to be better for your taste buds and your body.</p>
                        <p>At EvaKitchen, our menu is carefully crafted so that every bite and every refreshing sip serve up big flavor, an abundance of fresh ingredients and a taste of the unexpected. Our artisan chefs create crave-worthy classics alongside a steady rotation of seasonal offerings that take advantage of naturally ripe fruits and vegetables so their flavor is full and their nutrients, rich. Creative, hand-crafted beverages built around seasonality, quality ingredients and simple preparations complement every occasion from brunch, lunch, dinner and, of course, dessert. Always room for dessert.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>
            <section className='landingPage-ad'>
                <p>Looking for the best affordable hospitality in town?</p>
                <button>Book Now</button>
            </section>
            
            <section className='landingPage-order'>
                <h2 className='sec-text'>ORDER AND DELIVERY</h2>
                <h3>Our delivery service is top notch</h3>
                <Cards />
            </section>

        </div>
    )
}

export default LandingPage
