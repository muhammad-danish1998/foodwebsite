import React, {useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemList, updateCartMenuList } from "../redux/services/menuServices/menuServices";
import { deleteAddToCartMenu, getCartMenuListItem, setItemValue, UpdateAddToCartMenu } from "../redux/store/actions/menuAction";

let amount;


const CartInc = () => {
  const dispatch = useDispatch();
  const {menuList, totalAmount, cartlist, itemAmount, selectValue, cartlistItem} = useSelector(state => state?.menu);
  const [val, setVal] = useState();
  console.log("cartlist ==>", cartlist)

  
  const [count, setCount] = useState(0);
  const [cartlistItemm, setCartListItemm] = useState();
  

  useEffect(()=> {
    let priceVal = 0;
    cartlist?.map((es)=> {
      console.log("----",Number(es.price))
      priceVal += Number(es.price);
    })
    dispatch(setItemValue(priceVal.toFixed(2)))
  },[cartlist]);

  useEffect(() => {
    setCartListItemm(null)
      dispatch(getCartMenuListItem(selectValue, "hello00"))
  },[])

  useEffect(() => {
     setCartListItemm(cartlistItem);
  },[cartlistItem])


console.log("cartlistItemm ===>", cartlistItemm)

  const decrementValue = (quan , code) => {
    if(Number(quan) > 1){
      // setCount((count) => count - 1);
      let val = Number(quan) - 1
      dispatch(UpdateAddToCartMenu({
        sessid: "hello00",
        cartTempID: code,
        quantity: val
      })).then((res) => {
        console.log("delete item", res)
        if (res === 200) {
          console.log("delete item", res)
          dispatch(getCartMenuListItem(selectValue, "hello00"));
        }
      });
    }
    // if(quan == "1"){
    //   debugger;
    //   dispatch(deleteAddToCartMenu({
    //     sessid: "hello00",
    //     code: code
    //   })).then(res => {
        
    //     if (res === 200) {
    //       dispatch(getCartMenuListItem(selectValue, "hello00"));
    //     }
    //     console.log("delete item", res)
    //   });
    // }
    // amount = totalAmount;
    amount = (Number(itemAmount) * count).toFixed(2);
    // dispatch(setPaymentValue(val))
    // dispatch(setItemValue(amount))
    
   } 
   const incrementValue = (quan , code) => {
    // setCount((count) => count + 1);


    let val = Number(quan) + 1
    dispatch(UpdateAddToCartMenu({
      sessid: "hello00",
      cartTempID: code,
      quantity: val
    })).then(res => {
      console.log("delete item", res)
      if (res === 200) {
        console.log("delete item", res)
        dispatch(getCartMenuListItem(selectValue, "hello00"));
      }
    });
    // amount = totalAmount
    amount = (Number(itemAmount) * count).toFixed(2);
    // console.log("amount", amount)
    // console.log("val", val);
    // dispatch(setItemValue(amount))
    // dispatch(setPaymentValue(val))
   } 

  return (
    <div>
      <div>
       
          {cartlistItemm?.items?.map((cart) => (
              //  setVal(cart?.price),
              <>
             <div className="card-list-uper flex justify-between p-6">
              <ol className="list-decimal">
              <li>{cart.name}</li>
              </ol>

              <p className="font-bold">€{cart.itemprice}</p>

              
              </div>

              <div className="card-list-uper flex justify-end p-6">
          {/* <p className="ml-4">Note</p> */}
          <p className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              onClick={() => decrementValue(cart?.quantity, cart?.temp)}
              stroke="currentColor"
              className="w-8 h-8 p-1 border-2 cursor-pointer rounded-full border-red-600 text-red-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <span className="m-2" >{cart.quantity}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => incrementValue(cart?.quantity, cart?.temp)}
              className="w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </p>
        </div>

              </>
          ))}
         
      
        {/* <div className="card-list-uper flex justify-between p-6">
          <p className="ml-4">Note</p>
          <p className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 p-1 border-2 cursor-pointer rounded-full border-red-600 text-red-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <span className="m-2">1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </p>
        </div> */}
        <hr />
      </div>
      {/* <div>
        <div className="card-list-uper flex justify-between p-6">
          <ol className="list-decimal">
            <li>Geberatene Nudeln mit Hühnerfleisch</li>
          </ol>

          <p className="font-bold">€120,00</p>
        </div>
        <div className="card-list-uper flex justify-between p-6">
          <p className="ml-4">Note</p>
          <p className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 p-1 border-2 cursor-pointer rounded-full border-red-600 text-red-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <span className="m-2">1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </  p>
        </div>
        <hr />
      </div> */}
    </div>
  );
};

export default CartInc;
