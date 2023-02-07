import { toast } from "react-toastify";

import {
  login,
  register,
} from "../../services/authServices/authServices";
import { getAddonsMenu } from "../../services/menuServices/menuServices";
import { GET_MENU_LIST_ITEM, GET_MENU_LIST_ITEM_FAIL, GET_MENU_LIST_ITEM_SUCCESS, SET_CARTLIST, SET_ITEM_AMOUNT, SET_PAYMENT, SET_PAYMENT_SUCCESS } from "../types/actionTypes";

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

