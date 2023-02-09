import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import CartInc from "./CartInc";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCartMenu, getCartMenuListItem, setCartList, setPaymentValue } from "../redux/store/actions/menuAction";

let amount;

export default function ModalRating({
  visible,
  onClose,
  currentRestaurantImg,
}) {
  if (!visible) return null;
  const [open, setOpen] = useState(true);

  const [count, setCount] = useState(1);
  // const [addons01, setAddons01] = useState([]); /
  let addons01 = [];
  let multi01 = [];

  const dispatch = useDispatch();

  const {menuList, totalAmount, cartlist, selectValue, menu_id} = useSelector(state => state?.menu);
  useEffect(() =>{
    amount  = totalAmount;
  },[])


  const handleAddons = (id) => {
    addons01.push(id);
  }

  const handleMultiaddon = (id) => {
    multi01.push(id);
  }

  

  console.log("menulist, totalAmount", menuList, amount, cartlist);

  const cancelButtonRef = useRef(null);

 const decrementValue = () => {
  if(count > 1){
    setCount((count) => count - 1);
  }
  // amount = totalAmount;
  amount = (Number(totalAmount) * count).toFixed(2);
  // dispatch(setPaymentValue(val))
  
 } 
 const incrementValue = () => {
  setCount((count) => count + 1);
  // amount = totalAmount
  amount = (Number(totalAmount) * count).toFixed(2);
  console.log("amount", amount)
  // console.log("val", val);
  // dispatch(setPaymentValue(val))
 } 

  const handleOnClose = (val) => {
    
    // dispatch(setCartList(amount));
    onClose();
    

  };

  const handleSubmit = () => {
    dispatch(setPaymentValue(amount));
    debugger;
    dispatch(addToCartMenu({
      hidden_price: totalAmount,
      menu: menu_id,
      quantity : count,
      sessid: "hello00",
      addons : addons01,
      multiaddons: multi01
    })).then(res => {
      if (res === 200) {
        dispatch(getCartMenuListItem(selectValue, "hello00"));
        onClose();
      }
    });
  }
  return (
    <Transition.Root show={open} as={Fragment} onClick={handleOnClose}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="mt-3  sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900"
                    >
                      Knusprige Ente mit Gemuse
                    </Dialog.Title>
                    <Dialog.Title
                      as="h3"
                      className="text-sm font-normal leading-6 text-gray-900"
                    >
                      Mit Gemuse,Ente,Verschiedene Nudeln Dazu
                      Minifruhlingsrollen oder Peking Suppe
                    </Dialog.Title>
                    <div className="mt-2   flex flex-col">
                      <p className="text-sm  text-gray-500 justify-center items-center flex">
                        <img src={currentRestaurantImg} className="h-36 w-36" />
                      </p>
                      {/* <p> */}
                        {menuList?.addons?.map((addVal) => (
                          // console.log("add val", addVal),
                        <div>
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700"
                          >
                            {addVal.name}
                          </label>
                          { addVal?.type == "single" &&
                          <select
                            id="location"
                            name="location"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            defaultValue="Canada"
                            onChange={(e)=> handleAddons(e.target.value)}
                          >
                            
                            {addVal?.type == "single" && addVal?.opt?.map((val) => (
                              // console.log("val",val),
                                <>
                                <option value={val.addon_id}>{val.title}</option>
                                {/* <option>Canada</option>
                                <option>Mexico</option> */}
                                </>
                            ))}
                          </select>
                        }
                      {/* </p> */}
                        <p>
                          {
                            addVal?.type == "multi" && addVal?.opt?.map((val0)=>(
                              <p>
                              <label class="relative inline-flex items-center cursor-pointer mt-3">
                              <input type="checkbox" value={val0?.id} class="sr-only peer" onChange={(e) => handleMultiaddon(e.target.value)}/>
                              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{val0.title}</span>
                            </label>
                            </p>
                            ))
                          }
                      </p>
                    </div>
                ))}
                        {/* <div>
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Extra
                          </label>
                          <select
                            id="location"
                            name="location"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            defaultValue="Canada"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div> */}
                     
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                  // to="/checkout"
                    type="button"
                    className="mt-3 bg-red-500 text-white inline-flex w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 lg:text-lg sm:text-sm"
                    // onClick={() => setOpen(false)}
                    onClick={() => handleSubmit()}
                    ref={cancelButtonRef}
                  >
                    Add to cart €{amount}
                  </button>
                  <div className="card-list-uper">
                    <p className="flex justify-center items-center">
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => decrementValue()}
                        className="w-8 h-8 p-1 border-2 cursor-pointer rounded-full border-red-600 text-red-600 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      <span className="m-2">{count}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => incrementValue()}
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
