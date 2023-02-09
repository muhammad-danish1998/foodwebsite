import { toast } from "react-toastify";

import {
  login,
  register,
} from "../../services/authServices/authServices";
import { addToCart, getAddonsMenu, getCartItemList, removeCartMenuList, updateCartMenuList } from "../../services/menuServices/menuServices";
import { ADD_TO_CART_MENU_ITEM, ADD_TO_CART_MENU_ITEM_FAIL, ADD_TO_CART_MENU_ITEM_SUCCESS, DELETE_ADD_TO_CART_MENU_ITEM, DELETE_ADD_TO_CART_MENU_ITEM_FAIL, DELETE_ADD_TO_CART_MENU_ITEM_SUCCESS, GET_ADD_TO_CART_MENU_ITEM, GET_ADD_TO_CART_MENU_ITEM_SUCCESS, GET_MENU_LIST_ITEM, GET_MENU_LIST_ITEM_FAIL, GET_MENU_LIST_ITEM_SUCCESS, SET_CARTLIST, SET_ITEM_AMOUNT, SET_MENU_ID, SET_PAYMENT, SET_PAYMENT_SUCCESS, SET_SELECT_VALUE, UPDATE_ADD_TO_CART_MENU_ITEM, UPDATE_ADD_TO_CART_MENU_ITEM_FAIL, UPDATE_ADD_TO_CART_MENU_ITEM_SUCCESS } from "../types/actionTypes";

export const getMenuList =
  (state, navigate) => async dispatch => {
  
    dispatch({type: GET_MENU_LIST_ITEM});
    try {
    
      const response = await getAddonsMenu(state);
      console.log("response", response);

      // if (response.type == "success") {
        dispatch({
          type: GET_MENU_LIST_ITEM_SUCCESS,
          payload: response,
        });
        // toast.success(response?.msg);
        // navigate('/signin')

      // }
      // else{
      //   dispatch({
      //     type: GET_MENU_LIST_ITEM_FAIL,
      //     payload: 'Failed to fetch data',
      //   });
      //   console.log("hh", response)
      //   toast.error(response?.errorarr);
      // }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };


  export const setPaymentValue =
  (value) => async dispatch => {
    debugger;
    try {
        dispatch({
          type: SET_PAYMENT,
          payload: value,
        });

    } catch (e) {
      console.log(e);
      // toast.error(e);
    }
  };

  export const setMenuId =
  (value) => async dispatch => {
    debugger;
    try {
        dispatch({
          type: SET_MENU_ID,
          payload: value,
        });

    } catch (e) {
      console.log(e);
      // toast.error(e);
    }
  };

  export const setCartList =
 
  (value) => async dispatch => {
    debugger;
    try {
        dispatch({
          type: SET_CARTLIST,
          payload: value,
        });

    } catch (e) {
      console.log(e);
      // toast.error(e);
    }
  };

export const setItemValue =
(value) => async dispatch => {
  debugger;
  try {
      dispatch({
        type: SET_ITEM_AMOUNT,
        payload: value,
      });

  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setSelectValue =
(value) => async dispatch => {
  debugger;
  try {
      dispatch({
        type: SET_SELECT_VALUE,
        payload: value,
      });

  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};


export const addToCartMenu =
  (state, navigate) => async dispatch => {
  
    dispatch({type: ADD_TO_CART_MENU_ITEM});
    try {
    
      const response = await addToCart(state);
      console.log("response", response);

      // if (response.type == "success") {
        if(response?.type == "success"){
        dispatch({
          type: ADD_TO_CART_MENU_ITEM_SUCCESS,
          payload: response,
        });
        return 200;
      }else{
        dispatch({
          type: ADD_TO_CART_MENU_ITEM_FAIL,
          payload: response,
        });
        return 400;
      }
        // toast.success(response?.msg);
        // navigate('/signin')

      // }
      // else{
      //   dispatch({
      //     type: GET_MENU_LIST_ITEM_FAIL,
      //     payload: 'Failed to fetch data',
      //   });
      //   console.log("hh", response)
      //   toast.error(response?.errorarr);
      // }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };


  export const getCartMenuListItem =
  (state, navigate) => async dispatch => {
  
    dispatch({type: GET_ADD_TO_CART_MENU_ITEM});
    try {
    
      const response = await getCartItemList(state, navigate);
      console.log("response", response);

      // if (response.type == "success") {
        dispatch({
          type: GET_ADD_TO_CART_MENU_ITEM_SUCCESS,
          payload: response,
        });
        // toast.success(response?.msg);
        // navigate('/signin')

      // }
      // else{
      //   dispatch({
      //     type: GET_MENU_LIST_ITEM_FAIL,
      //     payload: 'Failed to fetch data',
      //   });
      //   console.log("hh", response)
      //   toast.error(response?.errorarr);
      // }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };



  export const deleteAddToCartMenu =
  (state, navigate) => async dispatch => {
  
    dispatch({type: DELETE_ADD_TO_CART_MENU_ITEM});
    try {
    
      const response = await removeCartMenuList(state);
      console.log("response", response);

      // if (response.type == "success") {
      
        if(response?.type == "success"){
          dispatch({
            type: DELETE_ADD_TO_CART_MENU_ITEM_SUCCESS,
            payload: response,
          });
          return 200;
         }else{
          dispatch({
            type: DELETE_ADD_TO_CART_MENU_ITEM_FAIL,
            payload: "failed to update",
          });
          return 400;
         }
        // return 200;
        // toast.success(response?.msg);
        // navigate('/signin')

      // }
      // else{
      //   dispatch({
      //     type: GET_MENU_LIST_ITEM_FAIL,
      //     payload: 'Failed to fetch data',
      //   });
      //   console.log("hh", response)
      //   toast.error(response?.errorarr);
      // }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
};

export const UpdateAddToCartMenu =
  (state, navigate) => async dispatch => {
  
    dispatch({type: UPDATE_ADD_TO_CART_MENU_ITEM});
    try {
    
      const response = await updateCartMenuList(state);
      console.log("response", response);

      // if (response.type == "success") {
         if(response?.type == "success"){
          dispatch({
            type: UPDATE_ADD_TO_CART_MENU_ITEM_SUCCESS,
            payload: response,
          });
          return 200;
         }else{
          dispatch({
            type: UPDATE_ADD_TO_CART_MENU_ITEM_FAIL,
            payload: "failed to update",
          });
          return 400;
         }
      
        // toast.success(response?.msg);
        // navigate('/signin')

      // }
      // else{
      //   dispatch({
      //     type: GET_MENU_LIST_ITEM_FAIL,
      //     payload: 'Failed to fetch data',
      //   });
      //   console.log("hh", response)
      //   toast.error(response?.errorarr);
      // }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };