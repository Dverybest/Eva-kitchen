import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './ContactPage.css';
import Footer from '../../components/footer/Footer';
import MapView from './MapView';
const ContactPage = () => {


    return (
        <div className='contact'>
            <Navbar />
            {/* <header className='header'>
                <h1>
                    We would love to hear from you
                </h1>
            </header> */}
            <section className="container pt-4 sendMail">
                <p className='title'>Let’s get in touch</p>
                <div className='contactUs'>
                    <form method='POST' className="contact-form">
                        <div className='contactUs'>
                            <TextBox title={'Full Name'} placeholder={'Doe'} />
                            <TextBox title={'Email'} type='email' placeholder={'example@xyz.com'} />
                        </div>
                        <TextBox title={'Subject'} placeholder={'Subject'} />
                        <TextBox title={'Message'} placeholder={''} type='textarea' />
                        <button>Leave us a message</button>
                    </form>
                    <div className='info'>
                        <div className='contact-info'>
                            <div className='icons'><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                            <p className='mid_text'>10:00am - 07:00pm</p>
                            <p>Working Hours</p>
                        </div>
                        <div className='contact-info '>
                            <div className='icons'><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <p className='mid_text'>Independence Layout Enugu</p>
                            <p>Get Direction</p>
                        </div>
                        <div className='contact-info'>
                            <div className='icons'><i className="fa fa-phone" aria-hidden="true"></i></div>
                            <p className='mid_text'>+234 706 121 1353</p>
                            <p>Call Online</p>
                        </div>
                    </div>
                </div>


            </section>
            <section>
                <MapView/>
            </section>
            <Footer />
        </div>
    )
}

const TextBox = ({ title, placeholder, type }) => {

    return (
        <div className='textBox'>
            <p>{title}</p>
            {
                type === 'textarea' ?
                    <textarea rows='7'>

                    </textarea>
                    :
                    <input type={type ? type : 'text'} placeholder={placeholder} />
            }
        </div>
    )
}


export default ContactPage;
