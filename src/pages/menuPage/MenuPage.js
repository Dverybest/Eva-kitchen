import React from 'react'
import Navbar from '../navbar/Navbar'
import './MenuPage.css'

const MenuPage = () => {
    return (
        <div className='menu'>
            <Navbar />
            <section className='menu-header'>
                <h1>
                    Test the goodness of fresh and healthy foods
                </h1>
            </section>
        </div>
    )
}

export default MenuPage
