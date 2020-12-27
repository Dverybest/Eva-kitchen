import React from 'react'
import Logo from './EvaKitchen.png'
import './Footer.css'


const Footer = () =>{
    return (
        <div className='footer'>
            <div className='footer-info'>
                <div className='footer-image'>
                <img src={Logo} alt='' />
                </div> 
                <div className='footer-menu'>
                    <span className='title'>Menu</span>
                    <li>Soup</li> 
                    <li>Rice</li> 
                    <li>Meat</li> 
                </div> 
                <div className='footer-about'>
                    <span className='title'>About Us</span>
                    <p> <i className="fa fa-envelope" aria-hidden="true"></i> info@evakitchen.com</p>
                    <p> <i className="fa fa-phone" aria-hidden="true"></i> +234 706 1911 567</p>
                </div> 
                <div className='footer-hours'>
                    <span className='title'>Opening Hours</span>
                    <p>Monday - Saturday</p>
                    <p>10:50am - 07:00pm</p>
                    <p>Sunday</p>
                    <p>11:00am - 08:00pm</p>
                </div> 
                <div className='footer-social'>
                    <span className='title'>Follow us on social media</span>
                    <div className='social-icons'>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                </div> 
            </div>
            <footer> Copyright 2020 evakitchen. All right reserved </footer>
        </div>
    )
}

export default Footer
