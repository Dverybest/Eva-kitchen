import React, {useState} from 'react'
import CardData from './CardData'
import Card from './Card'
import'./Card.css'


const Cards = () => {
    const [data, setData] = useState(CardData)
    return (
        <div className='card-container'>
            {data.map((item, index) => {
                return(
                    
                    <Card key={index} {...item}/>
                )
            })}
        </div>
    )
}

export default Cards




