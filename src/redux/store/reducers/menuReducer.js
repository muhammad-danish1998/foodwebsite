import { REGISTRATION, REGISTER_SUCCESS, REGISTRATION_FAIL, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, GET_MENU_LIST_ITEM, GET_MENU_LIST_ITEM_SUCCESS, GET_MENU_LIST_ITEM_FAIL, SET_PAYMENT, SET_PAYMENT_SUCCESS, SET_CARTLIST, SET_ITEM_AMOUNT, SET_SELECT_VALUE, ADD_TO_CART_MENU_ITEM, ADD_TO_CART_MENU_ITEM_SUCCESS, ADD_TO_CART_MENU_ITEM_FAIL, GET_ADD_TO_CART_MENU_ITEM, GET_ADD_TO_CART_MENU_ITEM_SUCCESS, GET_ADD_TO_CART_MENU_ITEM_FAIL, DELETE_ADD_TO_CART_MENU_ITEM, DELETE_ADD_TO_CART_MENU_ITEM_SUCCESS, DELETE_ADD_TO_CART_MENU_ITEM_FAIL, UPDATE_ADD_TO_CART_MENU_ITEM, UPDATE_ADD_TO_CART_MENU_ITEM_SUCCESS, UPDATE_ADD_TO_CART_MENU_ITEM_FAIL, SET_MENU_ID, CHECK_OUT_ITEM_SUCCESS, CHECK_OUT_ITEM_FAIL, CHECK_OUT_ITEM, SET_CAT_VALUE, SET_MAX_REST_VALUE } from "../types/actionTypes";

const initialState = {
  totalAmount: null,
  itemAmount: null,
  menuList:{},
  loading: false,
  msg: null,
  cartlist:[],
  cartlistItem: null,
  selectValue: "delivery",
  catId: 1,
  max_rest_val: null,
  menu_id: null
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
      case SET_MENU_ID:
        return {
          ...state,
          menu_id: action.payload
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
              count: action.payload.count,
              menuId: action.payload.menuId 
            },
          ],
        };
      case SET_ITEM_AMOUNT:
        return {
          ...state,
          itemAmount: action.payload
        };
      case SET_SELECT_VALUE:
      return {
        ...state,
        selectValue: action.payload
      };
      case SET_CAT_VALUE:
        return {
          ...state,
          catId: action.payload
        };
      case SET_MAX_REST_VALUE:
        return {
          ...state,
          max_rest_val: action.payload
        };
      
      case ADD_TO_CART_MENU_ITEM:
        return {
          ...state,
          loading: true,
        };
      case ADD_TO_CART_MENU_ITEM_SUCCESS:
        return {
          ...state,
          msg: action.payload,
          loading: false,
        };
      case ADD_TO_CART_MENU_ITEM_FAIL:
        return {
          ...state,
          msg: action.payload,
          loading: false,
        };
      case GET_ADD_TO_CART_MENU_ITEM:
        return {
          ...state,
          loading: true,
        };
      case GET_ADD_TO_CART_MENU_ITEM_SUCCESS:
        return {
          ...state,
          cartlistItem: action.payload,
          loading: false,
        };
      case GET_ADD_TO_CART_MENU_ITEM_FAIL:
        return {
          ...state,
          msg: action.payload,
          loading: false,
        };
      case DELETE_ADD_TO_CART_MENU_ITEM:
        return {
          ...state,
          loading: true,
        };
      case DELETE_ADD_TO_CART_MENU_ITEM_SUCCESS:
        return {
          ...state,
          msg: action.payload,
          loading: false,
        };
      case DELETE_ADD_TO_CART_MENU_ITEM_FAIL:
        return {
          ...state,
          msg: action.payload,
          loading: false,
        };
      case UPDATE_ADD_TO_CART_MENU_ITEM:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_ADD_TO_CART_MENU_ITEM_SUCCESS:
        return {
          ...state,
          msg: action.payload,
          loading: false,
        };
      case UPDATE_ADD_TO_CART_MENU_ITEM_FAIL:
        return {
          ...state,
          msg: action.payload,
          loading: false,
        };
    case CHECK_OUT_ITEM:
      return {
        ...state,
        loading: true,
      };
    case CHECK_OUT_ITEM_SUCCESS:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      };
    case CHECK_OUT_ITEM_FAIL:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default menuReducer;
