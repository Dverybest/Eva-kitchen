import { ADD_TO_CART, DECREMENT, INCREMENT, ITEMS_IN_CART } from "../constants";
export const addToCartAction = (payload)=>(dispatch, getState)=>{
    let orderQuantity = 0
    const itemInCart = getState().cart.cartItem
    const itemsToAdd = [...itemInCart, payload]
    itemsToAdd.forEach(item=> {orderQuantity += item.quantity});
    dispatch({
        type: ITEMS_IN_CART,
        payload: orderQuantity
    })
    dispatch({
        type: ADD_TO_CART,
        payload: itemsToAdd,
    })

}


export const handleIncrementChange = (payload) => (dispatch, getState) => {
    const itemInCart = getState().cart.cartItem
    itemInCart[payload].quantity += 1 
    dispatch({
        type: INCREMENT,
        payload:itemInCart
    })
}

export const handleDecrementChange = (payload) => (dispatch, getState) => {
     const itemInCart = getState().cart.cartItem
     itemInCart[payload].quantity -= 1 
     dispatch({
         type: DECREMENT,
         payload:itemInCart
     })
 }