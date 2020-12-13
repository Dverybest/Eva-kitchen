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
                        <button>Order Now     <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                    <div className='hero-image'>
                        <img src={Dish1} alt='' />
                    </div>
                </div>
                <div className='hero-contact'></div>
            </section>
            
        </div>
    )
}

export default LandingPage
