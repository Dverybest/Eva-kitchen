import React,{useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../menuPage/MenuPage.css';
import '../landingPage/LandingPage.css';
import './AboutPage.css';
import Card from '../../components/reusableCard/Card';
import pickMeals from '../landingPage/landingPageImages/pickMeals.svg';
import fastDelivery from '../landingPage/landingPageImages/fastDelivery.svg';
import checkout from '../landingPage/landingPageImages/checkout.svg';
import AboutDish from './about dish.png'
import ProfilePic from './profile-pic.png'
import Footer from '../../components/footer/Footer';

const AboutPage = () => {

    const [data, setData] = useState([
        {
            img: pickMeals,
            title: "Pick meals",
            description: "Choose your meal from our diversed weekly menu"
        },
        {
            img: checkout,
            title: "Checkout",
            description: "Enter a delivery location within our specified region and pay to checkout"
        },
        {
            img: fastDelivery,
            title: "Fast Delivery",
            description: "Your order is processed and delivered within 10 ~ 15 minutes"
        }
    ]);

    return (
        <div className='about'>
            <Navbar />
            <section className='menu-header about-header'>
                <h1>
                    Welcome to Evakitchen where your satisfaction is our goal
                </h1>
            </section>

            <section className='landingPage-order about-order'>
                <h2>ORDER AND DELIVERY</h2>
                <p className="text_two">Our delivery service is top notch</p>
                <div className='card-container'>
                    {
                        data.map((item, index) => {
                            return (
                                <Card key={index} {...item} />
                            )
                        })
                    }
                </div>
            </section>

            <section className='landingPage-about'>
                <h2>ABOUT US</h2>
                <p className="text_two">All you need to know about us</p>
                <div className='landingPage-about-content'>
                    <img src={AboutDish} alt='' />
                    <div className='landingPage-about-info'>
                        <p> “Healthy” isn’t just an idea. “Healthy” is science, and we take it seriously. Every delicious dish and drink at EvaKitchen is crafted to be better for your taste buds and your body. </p>
                        <p>At EvaKitchen, our menu is carefully crafted so that every bite and every refreshing sip serve up big flavor, an abundance of fresh ingredients and a taste of the unexpected. Our artisan chefs create crave-worthy classics alongside a steady rotation of seasonal offerings that take advantage of naturally ripe fruits and vegetables so their flavor is full and their nutrients, rich. Creative, hand-crafted beverages built around seasonality, quality ingredients and simple preparations complement every occasion from brunch, lunch, dinner and, of course, dessert. Always room for dessert.</p>
                    </div>
                </div>
            </section>

            <section className='testimonial'>
                <h2>TESTIMONIES</h2>
                <p className='text_two'>What our customers say about us</p>
             
                <div className='testimony-info'>
                    <span className='quote1'>"</span>
                    <div className='shapes'>
                        <div className='rectangle'>
                            <p>This has been the best hotel I have ever been to. Their hospitality was top notch, their services was the best. Do patronize them.</p>
                            <h5>Adefiwa George</h5>
                            <p>CEO Fiwa Groups</p>
                        </div>
                        <div className='triangle'></div>
                    </div>
                </div>
                <div className='testimony-profile'>
                    <div className='profilePic'><img src={ProfilePic} alt='' /></div>
                    <span className='quote2'>"</span>
                </div>
                
            </section>
            <Footer />
        </div>
    )
}

export default AboutPage
