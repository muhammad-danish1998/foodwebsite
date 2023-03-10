import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import CartInc from "./CartInc";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCartMenu,
  getCartMenuListItem,
  getLoadMoreMenuList,
  setCartList,
  setPaymentValue,
} from "../redux/store/actions/menuAction";

let amount;
let valTotalAmount;



export default function Checkoutpopup({
  visible,
  onClose,
  currentRestaurantImg,
  response,
  menuresName,
  menuresdes,
  menuresimg,
  setCheckOutModal,
}) {
  if (!visible) return null;
  const [open, setOpen] = useState(true);
  const {
    menuList0,
    totalAmount,
    loadMenuList,
    loading,
    cartlist,
    selectValue,
    menu_id,
  } = useSelector((state) => state?.menu);

  const [count, setCount] = useState(1);
  const [menuList, setMenuList] = useState(menuList0);
  const [updatedAmount, setUpdatedAmount] = useState();
  const [loadUpdatedMenuList, setLoadUpdatedMenuList] = useState({});
  const [data01, setData01] = useState(null);
  const [data02, setData02] = useState(null);
  const [multi01, setMulti01] = useState([]);

  let addons01 = [];

  let addons_id = [];
  // let addons = [];

  let addons = {};

  const dispatch = useDispatch();

  useEffect(() => {
    // if(data02 != "test"){

    setMenuList(menuList0);
    console.log("menuList data inside useEffect");
    // }
  }, [menuList0]);

  useEffect(() => {
    setLoadUpdatedMenuList({});
  }, [menuList0]);

  useEffect(() => {
    setLoadUpdatedMenuList(loadMenuList);
  }, [loadMenuList]);


  useEffect(() => {
    amount = totalAmount;
    setUpdatedAmount(totalAmount);
    console.log(response);
    valTotalAmount = 0;
  }, []);

  const handleAddons = (e) => {
    let data = e.split(",");
    addons01.push(data[0]);
    addons_id.push(data[1]);
    console.log("addons", addons_id);
    addons = {
      ...addons,
      [data[0]]: data[1],
    };
  };

  const handleMultiaddon = (id) => {
    // console.log(id);
    let data = id.split(",");
    // multi01.push(data[0]);

    //   console.log("multi ===>", multi01);
    let valData = multi01?.filter((e) => {
      console.log("e", e, data[0]);
      return e == data[0];
    });

    let valData01 = multi01?.filter((e) => {
      console.log("e", e, data[0]);
      return e != data[0];
    });

    console.log("valData =============>", valData);

    if (valData.length < 1) {
      setUpdatedAmount(Number(updatedAmount) + Number(data[1]));
      setMulti01([...multi01, data[0]]);
    } else {
      setUpdatedAmount(Number(updatedAmount) - Number(data[1]));
      setMulti01([]);
      setMulti01(valData01);
    }
    console.log("mutli01 ====>", multi01);

    
  };

  const handleSeeMore = () => {
    setShowCount(70);
  };

  console.log(
    "menulist, totalAmount",
    totalAmount == Number(localStorage.getItem("amount")).toFixed(2)
      ? 0
      : Number(localStorage.getItem("amount")).toFixed(2)
  );

  const cancelButtonRef = useRef(null);

  const [showCount, setShowCount] = useState(2);

  const decrementValue = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
   
    amount = (Number(totalAmount) * count).toFixed(2);
  
  };
  const incrementValue = () => {
    setCount((count) => count + 1);
   
    amount = (Number(totalAmount) * count).toFixed(2);
    console.log("amount", amount);
   
  };

  const handleOnClose = (val) => {
   
    onClose();
  };

  const handleSubmit = () => {
    dispatch(setPaymentValue(amount));
    debugger;
   
    dispatch(
      addToCartMenu({
        hidden_price: totalAmount,
        menu: menu_id,
        quantity: count,
        sessid: localStorage.getItem("uuid"),
       
        addons,
        option: data01,
        multiaddons: multi01,
      })
    ).then((res) => {
      if (res === 200) {
        dispatch(
          getCartMenuListItem(selectValue, localStorage.getItem("uuid"))
        );
        onClose();
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("amount", 0);
  }, []);

  const handleOptions = (e) => {
    let data = e.split(",");
    localStorage.setItem("data01", data[0]);
    localStorage.setItem("data02", data[1]);
    localStorage.setItem("amount", data[2]);
    console.log(data[2]);
    setData02(e);
   
    setMulti01([]);
    setUpdatedAmount(Number(data[2]));
    hanldeChangeValue(data[0], data[1]);

    valTotalAmount =
      totalAmount == Number(localStorage.getItem("amount")).toFixed(2)
        ? 0
        : Number(localStorage.getItem("amount")).toFixed(2);
  };

  const hanldeChangeValue = (value1, value2) => {
    dispatch(getLoadMoreMenuList(value1, value2));
  };

  useEffect(() => {
    return (
      console.log("clear component"),
      localStorage.setItem("data01", ""),
      localStorage.setItem("data02", ""),
      setLoadUpdatedMenuList({}),
      setMenuList({})
    );
  }, []);

  return (
   
    <Dialog
    
      className="relative z-10 lg:hidden "
    
      onClose={handleOnClose}
      open={open}
    >
      <div className="fixed border-2  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    
      {loading ? null : (
        <div className="fixed  inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative border-2 w-full  transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <span className="flex justify-end ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 hover:text-red-600 cursor-pointer "
                    onClick={() => setCheckOutModal(false)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
       
              </div>
              <div className="mt-5  border-black sm:mt-6 sm:flex lg:justify-between sm:gap-3">
                <div className="card-list-uper">
                  ds
                 {/* <CartInc /> */}
                </div>
              
              </div>
            </Dialog.Panel>
           
          </div>
        </div>
      )}
    </Dialog>

   
  );
}
