import React from 'react'
import './Card.css'


const Card =({img, title, description}) => {
    return (
    <div className='Card '>
            <div className='icon '> <img src={img} alt='' /></div>
            <div className='Card-body'>
                <h4 className='Card-title '>{title}</h4>
                <p className='Card-text '>  {description} </p>
            </div>
        </div>
    )
}

export default Card;