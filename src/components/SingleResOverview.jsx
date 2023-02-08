/*
  This SingleResOverview requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderToggle from "./Header-Toggle";
import HeaderTextSlider from "./HeaderTextSlider";
import { useDispatch, useSelector } from "react-redux";

import CartInc from "./CartInc";

import { Link } from "react-router-dom";
import axios from "axios";
import PopupCard from "./PopupCard";
import HeaderNavbar from "./HeaderNavbar";
import { getAddonsMenu } from "../redux/services/menuServices/menuServices";
import { getMenuList, setCartList, setPaymentValue } from "../redux/store/actions/menuAction";


// import {
//   getMenuList,
//   setPaymentValue,
// } from "../redux/store/actions/menuAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleResOverview() {
  const dispatch = useDispatch();

  const [menuArray, setMenuArray] = useState([]);
  const [currentRestaurantImg, setCurrentRestaurantImg] = useState();
  const {menuList, totalAmount, itemAmount, cartlist} = useSelector(state => state?.menu);
  console.log("total amount", totalAmount)
  // const { menuList, totalAmount } = useSelector((state) => state?.menu);
  console.log("total amount", totalAmount);
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
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = (id, price, name) => {
    setShowModal(true);
    dispatch(getMenuList(id));
    dispatch(setPaymentValue(price));
    let val = cartlist?.filter((e) => {
       return e.description ==  name;
    })
    console.log("value ", val);
    debugger;
    if(val.length == 0){
      dispatch(setCartList({
        description: name,
        price: price,
        count:1
      }))
  }
    
  }
  // };
  return (
    <div className="">
      {/* ------------- navbar here ---------  */}
      <HeaderNavbar />
      <HeaderTextSlider />
      <div className="py-0">
        <div className="mx-auto max-w-8xl sm:px-6 lg:grid lg:max-w-9xl lg:grid-cols-12 lg:gap-0 lg:px-8">
          <main className="lg:col-span-9 xl:col-span-8 ">
            {/* -------------- card ----------------  */}
            <section className="text-gray-600  mt-4">
              <div className="container px-5  mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className=" md:w-full">
                    <div className="h-full   border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 object-cover w-full  "
                        // src={currentRestaurantImg}
                        src="https://www.trgplc.com/wp-content/uploads/2022/03/Pubs_our_brand.jpg"
                        alt="blog"
                      />
                      <div className="pt-4">
                        <div className="flex justify-between border-2">
                          <div className="">
                            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                              Asiawok Heimservice
                            </h1>

                            {/* -------- review ------------  */}
                            <span className="flex items-center">
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 "
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                            </span>
                            <p className="leading-relaxed mb-3">
                              <HeaderToggle
                                value1={"Delivery"}
                                value2="Pickup"
                              />
                            </p>
                          </div>
                          <div>
                            {/* --------------- logo -------------  */}
                            <div className="mt-2 ">
                              <img
                                className="inline-block lg:h-24 lg:w-24 h-14 w-14 rounded-full"
                                src="./images/Ellipse 20.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap ">
                          {menuArray?.map((eachMenuCatergory) => (
                            console.log("eachMenuCatergory ==>", eachMenuCatergory),
                            <>
                              <div className="border-2 border-gray-400 p-4 rounded-lg mt-4 w-full">
                                <h1 className="text-4xl font-bold text-black">
                                  {eachMenuCatergory.catname}
                                </h1>
                                <p>{eachMenuCatergory.catedesc}</p>
                              </div>
                              {eachMenuCatergory?.menuarr?.map(
                                (eachMenuItem) => (
                                  <div className="border-2 p-4  mt-4 w-full">
                                    <h1 className="text-2xl">
                                      {eachMenuItem.name}
                                    </h1>
                                    <p className="text-green-500 font-semibold">
                                      {" "}
                                      € {eachMenuItem.price}
                                    </p>

                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: eachMenuItem.description,
                                      }}
                                    />
                                    <p className="mt-2">
                                      {" "}
                                      <button
                                        onClick={() => {
                                          handleClick(
                                            eachMenuItem.id,
                                            eachMenuItem.price,
                                            eachMenuItem?.name
                                          );
                                        }}
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-redColor px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                      >
                                        Add to cart
                                      </button>
                                    </p>
                                  </div>
                                )
                              )}
                            </>
                          ))}

                          {/* <div className="border-2 rounded-lg p-4  mt-16 mb-4  w-5/6">
                            <h1 className="text-4xl font-bold text-black mb-2">
                              Asia - Sparmenüs
                            </h1>
                            <p>
                              all dishes with boiled rice as a side dish. On
                              request, there are also advised noodles instead of
                              rice - surcharge 2.00 €
                            </p>
                          </div>
                          <div className="border-2 p-4  mt-4 w-5/6">
                            <h1 className="text-2xl">Fried chicken meat</h1>
                            <p className="text-green-500 font-semibold">
                              {" "}
                              € 10,90
                            </p>
                            <ul>
                              <li>• mit rotem Curry und Kokosmilch</li>
                              <li>• Gaeng Kiew Wan Gai mit Hühnerfleisch</li>
                              <li>• mit rotem Curry und Kokosmilch</li>
                              <li>• mit rotem Curry und Kokosmilch</li>
                              <li>• mit rotem Curry und Kokosmilch</li>
                            </ul>
                          </div>
                          <div className="border-2 p-4  mt-4 w-5/6">
                            <h1 className="text-2xl">Fried chicken meat</h1>
                            <p className="text-green-500 font-semibold">
                              {" "}
                              € 10,90
                            </p>
                            <p>
                              all dishes with boiled rice as a side dish. On
                              request, there are also advised noodles instead of
                              rice - surcharge 2.00 €
                            </p>
                          </div>
                          <div className="border-2 p-4  mt-4 w-5/6">
                            <h1 className="text-2xl">Fried chicken meat</h1>
                            <p className="text-green-500 font-semibold">
                              {" "}
                              € 10,90
                            </p>
                            <p>
                              all dishes with boiled rice as a side dish. On
                              request, there are also advised noodles instead of
                              rice - surcharge 2.00 €
                              <Link to={"/modalcard"}>
                                shop
                              </Link>
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PopupCard
                currentRestaurantImg={currentRestaurantImg}
                onClose={handleClose}
                visible={showModal}
              />
            </section>
          </main>
          <aside className=" xl:col-span-4 xl:block border-2">
            <div className="sticky top-6 space-y-4 lg:p-4">
              <h1 className="text-2xl font-bold">Shopping Cart</h1>
              <div className="checkout flex text-white justify-between font-bold bg-redColor p-4 rounded-2xl">
                <p>Checkout</p>
                <p>€{itemAmount}</p>
              </div>
              <CartInc />
              <p className="mt-2">
                {" "}
                <Link
                 to="/checkout"
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-redColor px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                 Checkout
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
  
}
