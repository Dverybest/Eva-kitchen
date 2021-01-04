import React,{useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Navlink from '../../components/menu-page-navlinks/Navlink'
import friedRice from '../../components/reusableMenuCard/dishImages/friedRice.png'
import jollofRice from '../../components/reusableMenuCard/dishImages/jollofRice.png'
import egusiSoup from '../../components/reusableMenuCard/dishImages/egusiSoup.png'
import oraSoup from '../../components/reusableMenuCard/dishImages/oraSoup.png'
import whiteRice from '../../components/reusableMenuCard/dishImages/whiteRice.png'
import okroSoup from '../../components/reusableMenuCard/dishImages/okroSoup.png'
import Dish from '../../components/reusableMenuCard/Dish'
import './MenuPage.css';
import Footer from '../../components/footer/Footer';

const MenuPage = () => {
    const [list, setList] = useState([
        {
            image: friedRice,
            name: 'Fried Rice',
            price: '₦1000',
            description: 'Fried rice with chicken laps'
        },
        {
            image: jollofRice,
            name: 'Jellof Rice',
            price: '₦800',
            description: 'Nigerian party jellof'
        },
        {
            image: egusiSoup,
            name: 'Egusi Soup',
            price: '₦1500',
            description: 'Egusi Soup with plenty meat'
        },
        {
            image: oraSoup,
            name: 'Ora Soup',
            price: '₦1500',
            description: 'Ora soup with fish and two beef and semo'
        },
        {
            image: whiteRice,
            name: 'White Rice',
            price: '₦1200',
            description: 'White rice and stew with chicken'
        },
        {
            image: okroSoup,
            name: 'Okro Soup',
            price: '₦1000',
            description: 'Okro soup with plenty meat and fish'
        }
    ])

    return (
        <div className='menu'>
            <Navbar />
            <section className='menu-header'>
                <h1>
                    Test the goodness of fresh and healthy foods
                </h1>
            </section>
            <section >
                < Navlink />
                {
                   <div className='container dish-menu'>
                        <div className='row px-0 mx-0'>
                            {list.map((dish, index) => {
                                return (
                                    <Dish key={index} {...dish} />
                                )
                            })}
                        </div>
                   </div>
                }
            </section>
            <section className='dish-menu2'>
                {
                    <div className='container '>
                        <h3>Recommended Dishes</h3>
                        <div className='row px-0 mx-0'>
                            {
                                list.slice(3, 6).map((dish, index) => {
                                    return(
                                        <Dish key={index} {...dish} />
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </section>
            <Footer />
        </div>
    )
}

export default MenuPage
