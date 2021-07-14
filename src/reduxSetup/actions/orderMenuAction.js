import { ADD_TO_CART, DECREMENT, INCREMENT, ITEMS_IN_CART } from "../constants";
export const addToCartAction = (payload) => (dispatch, getState) => {
  let orderQuantity = 0;
  const itemInCart = getState().cart.cartItem;
  const itemsToAdd = [...itemInCart, payload];
  itemsToAdd.forEach((item) => {
    orderQuantity += item.quantity;
  });
  dispatch({
    type: ITEMS_IN_CART,
    payload: orderQuantity,
  });
  dispatch({
    type: ADD_TO_CART,
    payload: itemsToAdd,
  });
};
//

export const handleIncrementChange = (payload)=>(dispatch, getState) => {
    const itemInCart = getState().cart.cartItem.map((item,index)=>{
        if(index === payload){
            let quantity = item.quantity + 1
            item.quantity = quantity
        }
        return  item;
    })    
  dispatch({ type: INCREMENT, payload:itemInCart })
};

export const handleDecrementChange = (payload) => (dispatch, getState) => {
  const itemInCart = getState().cart.cartItem.map((item, index)=>{
      if (index === payload) {
        let quantity = item.quantity - 1

        item.quantity = quantity
      }
      return item;
  });
  
  dispatch({
    type: DECREMENT,
    payload: itemInCart,
  });
};
