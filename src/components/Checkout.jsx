import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderToggle from "./Header-Toggle";
import Pickup from "./Pickup";


import CartInc from "./CartInc";

import { Link } from "react-router-dom";
import axios from "axios";
import Delivery from "./Delivery";
import HeaderNavbar from "./HeaderNavbar";
import PopupDeliver from "./PopupDeliver";
// import Popuppickup from "./Popuppickup";

// import { useDispatch, useSelector } from "react-redux";

import { getAddonsMenu } from "../redux/services/menuServices/menuServices";
import { getMenuList, setPaymentValue } from "../redux/store/actions/menuAction";
import Popuppickup from "./Popuppickup";

import { useDispatch, useSelector } from "react-redux";



const plans = [
  {
    id: "small",
    name: "Cash On Delivery",
    description: "4 GB RAM / 2 CPUS / 80 GB SSD Storage",
  },
  {
    id: "medium",
    name: "Paypal",
    description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function SingleResOverview() {
  const dispatch = useDispatch();
const [deliveryOption , setDeliveryOption] = useState("pickup")

const [showDetail, setShowDetail] = useState(false);
  const [menuArray, setMenuArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] =  useState(false)
  const handleClose = () => {
    if(selectValue == "Delivery"){
      setShowModal(false);
    }else{
       setShowModal1(false);
    }
  };

  const {selectValue} = useSelector(state => state?.menu);
  
  const [currentRestaurantImg, setCurrentRestaurantImg] = useState();
  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    const restaurantSlug = params.get("resturent_slug");
    const restuarantCode = params.get("resturent_code");
    axios
      .get(
        `https://liefermars.de/_api_ajax_menu.php?resturent_slug=${restaurantSlug}&resturent_code=${restuarantCode}`
      )
      .then((response) => {
        setMenuArray(response.data.menuarr);
        setCurrentRestaurantImg(response?.data?.restlogo);
      });
  }, [window.location.search]);
  const showpersonalDetail = () =>{
    setShowDetail(true)                            
  }
  const handleClick = (id, price) => {
    if(selectValue == "Delivery"){
      setShowModal(true);
    }else{
       setShowModal1(true);
    }
    
    // dispatch(getMenuList(id));
    // dispatch(setPaymentValue(price));
    
  }
  return (
    <div className="min-h-screen">
     <HeaderNavbar />

      <div className="py-6">
        <div className="mx-auto max-w-8xl sm:px-6 lg:grid lg:max-w-9xl lg:grid-cols-12 lg:gap-8 lg:px-8">
          <main className="lg:col-span-9 xl:col-span-8">
            {/* -------------- card ----------------  */}
            <section class="text-gray-600 body-font mt-4">
              <div class="container px-5  mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class=" md:w-full">
                    <div class="h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="p-6">
                        <div class="flex items-center flex-wrap ">
                          <div className=" rounded-lg px-1  mt-16 mb-4  w-5/6">
                            <h1 className="text-4xl font-bold text-black mb-2">
                              Checkout
                            </h1>
                          </div>
                          <div>
                            {/* {
                             
                          showDetail  &&  <Delivery />   
                            } */}

                            </div>
                          <div className="border-2 border-gray-400 rounded-lg p-8   mt-4 mb-4 bg-white  w-5/6">
                        
                            <div className="cursor-pointer">
                              <label
                              onClick={() => {
                                handleClick()
                              }}
                                htmlFor="comment "
                                className="block text-xl cursor-pointer font-medium text-gray-700"
                              >
                                Personal detail and adress
                              </label>
                              {/* <div className="mt-1">
                                <input className="p-4  w-full" type={"text "} />
                              </div> */}
                            </div>
                          </div>
                          <div className="border-2 border-gray-400 rounded-lg p-8   mt-4 mb-4 bg-white  w-5/6">
                            <div>
                              <label
                                htmlFor="comment "
                                className="block text-xl cursor-pointer  font-medium text-gray-700"
                              >
                                Payment method
                              </label>
                              {/* <div className="mt-1">
                                <input className="p-4  w-full" type={"text "} />
                              </div> */}
                            </div>
                          </div>
                          <div className="border-2 border-x-0 border-gray-400  p-1   mt-4 mb-4 bg-white  w-5/6">
                            <div className="p-4">
                              <label
                                htmlFor="comment "
                                className="block text-xl  font-medium text-gray-700"
                              >
                                Delivery Time
                              </label>
                              <div className="mt-1">
                                <input
                                  placeholder="ASAP"
                                  className="p-2  w-full bg-gray-200"
                                  type={"text "}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="border-2 border-x-0 border-gray-400  p-1   mt-4 mb-4 bg-white  w-5/6">
                            <div className="p-4">
                              <label
                                htmlFor="comment "
                                className="block text-xl  font-medium text-gray-700"
                              >
                                AddNote (Optional)
                              </label>
                              <div className="mt-1">
                                <input
                                  placeholder="Please don’t ring the bell baby is sleeping."
                                  className="p-4  w-full bg-gray-200"
                                  type={"text "}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="border-2 border-gray-400 border-x-0  p-8   mt-4 mb-4 bg-white  w-5/6">
                            <div>
                              <label
                                htmlFor="comment "
                                className="block text-xl  font-medium text-gray-700"
                              >
                                Payment
                              </label>
                              <div className="mt-1 ">
                                <fieldset className="mt-4">
                                  <div className="space-y-5">
                                    {plans.map((plan) => (
                                      <div
                                        key={plan.id}
                                        className="relative flex items-start"
                                      >
                                        <div className="flex h-5 items-center">
                                          <input
                                            id={plan.id}
                                            aria-describedby={`${plan.id}-description`}
                                            name="plan"
                                            type="radio"
                                            defaultChecked={plan.id === "small"}
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                        </div>
                                        <div className="ml-3 text-sm">
                                          <label
                                            htmlFor={plan.id}
                                            className="font-medium text-gray-700"
                                          >
                                            {plan.name}
                                          </label>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                          </div>

                          {/* ------------------------ button ---------------------  */}
                          <div className=" border-gray-400  p-1   mt-4 mb-4 bg-transparent  w-5/6">
                            <div className="">
                              <div className="mt-1">
                                <Link
                                to="/invoice"
                                  type="button"
                                  className="inline-flex items-center rounded-md border border-transparent bg-greencheckout px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                 Order And Pay
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <PopupDeliver
                currentRestaurantImg={currentRestaurantImg}
                onClose={handleClose}
                visible={showModal}
              />
               <Popuppickup
                currentRestaurantImg={currentRestaurantImg}
                onClose={handleClose}
                visible={showModal1}
              />
              {/* <Popuppickup /> */}
            </section>
          </main>
          <aside className=" xl:col-span-4 xl:block border-2">
            <div className="sticky top-6 space-y-4 lg:p-4">
              <h1 className="text-2xl font-bold">Basket</h1>
              <div className="checkout flex text-white justify-between bg-red-500 p-4 rounded-2xl">
                <p>Checkout</p>
                <p>€120,00</p>
              </div>
              <CartInc />
              <div className="flex justify-between font-semibold">
                <p>Subtutel</p>
                <p>€ 125,99</p>

              </div>
              <div className="flex justify-between font-semibold">
                <p>Delivery  Costs</p>
                <p>€ 2,009</p>

              </div>
              <div className="flex justify-between font-semibold">
                <p>Totel</p>
                <p>€ 125,99</p>

              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
