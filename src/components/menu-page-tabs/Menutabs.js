import React,{useState, useEffect} from 'react';
import './Menutabs.css'
import friedRice from '../../components/reusableMenuCard/dishImages/friedRice.png'
import jollofRice from '../../components/reusableMenuCard/dishImages/jollofRice.png'
import egusiSoup from '../../components/reusableMenuCard/dishImages/egusiSoup.png'
import oraSoup from '../../components/reusableMenuCard/dishImages/oraSoup.png'
import whiteRice from '../../components/reusableMenuCard/dishImages/whiteRice.png'
import okroSoup from '../../components/reusableMenuCard/dishImages/okroSoup.png'
import Dish from '../../components/reusableMenuCard/Dish';

let DB = [
    {
        image: friedRice,
        name: 'Fried Rice',
        price: '₦1000',
        description: 'Fried rice with chicken laps',
        category: 'Breakfast'
    },
    {
        image: jollofRice,
        name: 'Jellof Rice',
        price: '₦800',
        description: 'Nigerian party jellof',
        category: 'Breakfast'
    },
    {
        image: egusiSoup,
        name: 'Egusi Soup',
        price: '₦1500',
        description: 'Egusi Soup with plenty meat',
        category: 'Lunch'
    },
    {
        image: oraSoup,
        name: 'Ora Soup',
        price: '₦1500',
        description: 'Ora soup with fish and two beef and semo',
        category: 'Lunch'
    },
    {
        image: whiteRice,
        name: 'White Rice',
        price: '₦1200',
        description: 'White rice and stew with chicken',
        category: 'Dinner'
    },
    {
        image: okroSoup,
        name: 'Okro Soup',
        price: '₦1000',
        description: 'Okro soup with plenty meat and fish',
        category: 'Dinner'
    }
]

const MenuTab = () => {
    
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [list, setList] = useState(DB)

    useEffect(() => {
        if(selectedCategory === 'All'){
            setList(DB)
            return;
        }

        const newList = DB.filter((dish) =>{
            return dish.category === selectedCategory
        })
        setList(newList);

    }, [selectedCategory])

    const handleClick =(category) => {
        setSelectedCategory(category);
    }

    return (
      
        <div className='menu-nav'>
            <ul className='menu-categories container'>
                <li><button className={` ${categories[0]=== selectedCategory?'active':''}`} onClick={() => handleClick('All')}> All </button> </li>
                <li ><button className={` ${categories[1] === selectedCategory ? 'active' : ''}`} onClick={() => handleClick('Breakfast')}> Breakfast </button> </li>
                <li ><button className={` ${categories[2] === selectedCategory ? 'active' : ''}`} onClick={() =>handleClick('Lunch')}> Lunch </button> </li>
                <li ><button className={` ${categories[3] === selectedCategory ? 'active' : ''}`} onClick={() =>handleClick('Dinner')}> Dinner </button> </li>

            </ul>

            <div className='container dish-menu'>
                <div className='row px-0 mx-0 dish-list'>
                    {list.map((dish, index) => {
                        return (
                            <Dish key={index} {...dish} />
                        )
                    })}
                </div>
            </div>

            <section className='container dish-menu2'>
                {
                    <div className=' '>
                        <h3>Recommended Dishes</h3>
                        <div className='row px-0 mx-0 dish-list'>
                            {
                                DB.slice(3, 6).map((dish, index) => {
                                    return(
                                        <Dish key={index} {...dish} />
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </section>

        </div>
    )
}

export default MenuTab;
