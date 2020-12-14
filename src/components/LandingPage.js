import React from 'react'
import './LandingPage.css'
import Dish1 from '../images/dish1.svg'


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
            
        </div>
    )
}

export default LandingPage
