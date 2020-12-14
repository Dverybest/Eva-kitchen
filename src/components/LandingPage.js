import React from 'react'
import './LandingPage.css'
import Dish1 from '../images/dish1.svg'
import image1 from '../images/about image.svg'


const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <section className='hero'>
                <div className='hero-intro container'>
                    <div className='hero-info'>
                        <h1>Your Favourite Food Delivered Hot And Fresh</h1>
                        <p>Satisfy your craving by getting the food you want delivered to you fast. EvaKitchen is now available in selected areas in Enugu.</p>
                        <button>Order Now                  <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                    <div className='hero-image'>
                        <img src={Dish1} alt='' />
                    </div>
                </div>
                <div className='hero-contact'>
                    <div className='hero-contact-info clock'>
                        <div className='icons'><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                        <span>10:00am - 07:00pm</span>
                        <span>Working Hours</span>
                    </div>
                    <div className='hero-contact-info'>
                        <div className='icons'><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <span>Independence Layout Enugu</span>
                        <span>Get Direction</span>
                    </div>
                    <div className='hero-contact-info phone'>
                        <div className='icons'><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <span>+234 706 121 1353</span>
                        <span>Call Online</span>
                    </div>
                </div>
            </section>
            <section className='landingPage-about'>
                <span className='sec-text'>ABOUT US</span>
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
            
        </div>
    )
}

export default LandingPage
