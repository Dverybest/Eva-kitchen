import { ADD_TO_CART, ITEMS_IN_CART } from "../constants";
const addToCartAction = (payload)=>(dispatch, state)=>{
    
    let orderQuantity = 0
    const itemInCart = state().addItem.addToCart
    const ItemsToAdd = [...itemInCart, payload]
    ItemsToAdd.map(qty=> {orderQuantity += qty.quantity});
    dispatch({
        type: ITEMS_IN_CART,
        payload: orderQuantity
    })
    dispatch({
        type: ADD_TO_CART,
        payload: ItemsToAdd,
    })
    return{
        type: ADD_TO_CART, payload
    }
}
export {addToCartAction}