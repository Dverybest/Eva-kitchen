import React from 'react'
import './Dish.css'


const Dish = ({ image, name, price, description }) => {
    return (
        <div className='col-md-4'>
            <div className="dish">
                <div className='dish-image '>
                    <img src={image} alt='' />
                    <div className='rating'>4.5</div>
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