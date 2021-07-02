import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MenuDishes from '../../components/menu-page-tabs/Menutabs'
import './MenuPage.css';
import Footer from '../../components/footer/Footer';

const MenuPage = () => {


    return (
        <div className='menu'>
            <Navbar />
            {/* <section className='menu-header'>
                <h1>
                    Test the goodness of fresh and healthy foods
                </h1>
            </section> */}
            <div className="contain">
                <div className='search_container'>
                    <div className='search'>
                        <i class="fa fa-search"></i>
                        <input type='text' placeholder={"Search for food, coffe, etc.."} />
                    </div>
                        <button  className="button">
                            Search
                        </button>
                </div>
            </div>
            < MenuDishes />
            <Footer />
        </div>
    )
}

export default MenuPage
