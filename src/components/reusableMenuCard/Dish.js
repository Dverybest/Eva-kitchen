import React from 'react'
import './Dish.css'


const Dish = ({ image, name, price, description }) => {
    return (
        <div className='col-md-4 px-0 mx-0'>
            <div className="dish">
                <div className='dish-image '>
                    <div className='rating'>4.5</div>
                    <img src={image} alt='' />
                </div>
                <div className='dish-info'>
                    <h5>{name}</h5>
                    <span> {price} </span>
                </div>
                <p> {description} </p>
                <button>Order Now</button>
            </div>
        </div>
    )
}

export default Dish;