import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MenuDishes from '../../components/menu-page-tabs/Menutabs'
import './MenuPage.css';
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
            < MenuDishes />
            <Footer />
        </div>
    )
}

export default MenuPage
