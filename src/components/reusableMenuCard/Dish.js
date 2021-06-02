import React from 'react'
import './Dish.css'
import {useHistory} from 'react-router-dom';
// import { connect } from 'react-redux';
// import popularMenuAction from "../../reduxSetup/actions/popularMenuAction";

const Dish = ({ image, name, price, description }) => {
    const history = useHistory();
    return (
        <div className='col-md-4 px-0 mx-0 '>
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
                <button onClick={()=>history.push('/order')}>Order</button>
            </div>
        </div>
    )
}
// const mapStateToProps = (state)=>{
//     return{
//         popularMenu: state.menu.popularMenu
//     }
// }
// const connector = connect(mapStateToProps, {popularMenuAction})
export default Dish;