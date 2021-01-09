import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

import Footer from '../../components/footer/Footer';

const MenuPage = () => {


    return (
        <div className='menu'>
            <Navbar />
            <section className='menu-header'>
                <h1>
                    Test the goodness of fresh and healthy foods
                </h1>
            </section>
            <Footer />
        </div>
    )
}

export default MenuPage
