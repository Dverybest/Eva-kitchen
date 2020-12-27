import React, {useState} from 'react'
import menuData from './menuData'
import './Dish.css'
import Dish from './Dish'


const MenuList = () => {
    const[list, setList] = useState(menuData)
    return(
        <div className='menu-list'>
            {list.map((dish, index) =>{
                console.log(index)
                return(
                    <Dish key={index} {...dish} />
                )
            })}
        </div>
    )
}


export default MenuList;
