import { requestProcessor } from "../../URLs/requestProcessor";
import { ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT, ITEMS_IN_CART } from "../constants";
import { loadingAction } from "./loadingAction";

export const addToCartAction = (payload) => (dispatch, getState) => {
  let orderQuantity = 0;
  const itemInCart = getState().cart.cartItem;
  const index = itemInCart.findIndex((item) => item.name === payload.name)
  let itemsToAdd;
  if (index !== -1) {
    itemsToAdd = itemInCart.map((item, itemIndex) => {
      if (index === itemIndex) item.quantity += payload.quantity
      orderQuantity += item.quantity;
      return item;
    })
  } else {
    itemsToAdd = [...itemInCart, payload];
    itemsToAdd.forEach((item) => orderQuantity += item.quantity);
  }
  dispatch({
    type: ITEMS_IN_CART,
    payload: orderQuantity,
  });
  dispatch({
    type: ADD_TO_CART,
    payload: itemsToAdd,
  });
};

export const handleIncrementChange = (payload) => (dispatch, getState) => {
  let orderQuantity = 0;
  const itemInCart = getState().cart.cartItem.map((item, index) => {
    if (index === payload) item.quantity += 1
    orderQuantity += item.quantity;
    return item;
  })
  dispatch({ type: INCREMENT, payload: itemInCart })
  dispatch({
    type: ITEMS_IN_CART,
    payload: orderQuantity,
  });
};

export const handleDecrementChange = (payload) => (dispatch, getState) => {
  let orderQuantity = 0;
  const itemInCart = getState().cart.cartItem.reduce((acc, item, index) => {
    if (index === payload) item.quantity -= 1

    if (item.quantity === 0) return [...acc];
    orderQuantity += item.quantity;
    return [...acc, item];
  }, []);
  dispatch({
    type: DECREMENT,
    payload: itemInCart,
  });
  dispatch({
    type: ITEMS_IN_CART,
    payload: orderQuantity,
  });
};

export const PostShippingAction = (payload) => (dispatch)=>
new Promise(async(resolve, reject) => {
  dispatch(loadingAction(true));
  try{
    const response = await requestProcessor({
      method:'post',
      url: '/makeorder',
      payload,
      dispatch,
    });
    dispatch({type:CLEAR_CART, payload: null})
    resolve(response);
  }
  catch(error){
    reject(error)
  }
  finally{
    dispatch(loadingAction(false));
  }
})