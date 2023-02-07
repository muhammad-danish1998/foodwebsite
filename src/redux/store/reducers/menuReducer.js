import { REGISTRATION, REGISTER_SUCCESS, REGISTRATION_FAIL, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, GET_MENU_LIST_ITEM, GET_MENU_LIST_ITEM_SUCCESS, GET_MENU_LIST_ITEM_FAIL, SET_PAYMENT, SET_PAYMENT_SUCCESS, SET_CARTLIST, SET_ITEM_AMOUNT,  } from "../types/actionTypes";

const initialState = {
  totalAmount: null,
  itemAmount: null,
  menuList:{},
  loading: false,
  msg: null,
  cartlist:[]
};

const menuReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MENU_LIST_ITEM:
      return {
        ...state,
        loading: true,
      };
    case GET_MENU_LIST_ITEM_SUCCESS:
      return {
        ...state,
        menuList: action.payload,
        loading: false,
      };
    case GET_MENU_LIST_ITEM_FAIL:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      };
      case SET_PAYMENT:
      return {
        ...state,
        totalAmount: action.payload
      };
      case SET_CARTLIST:
        debugger;
        return {
          ...state,
          cartlist: [
            ...state.cartlist,
            {
              description: action.payload.description,
              price: action.payload.price,
            },
          ],
        };
      case SET_ITEM_AMOUNT:
        return {
          ...state,
          itemAmount: action.payload
        };
    default:
      return state;
  }
};

export default menuReducer;
