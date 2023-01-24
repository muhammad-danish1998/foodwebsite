import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import RestaurantsGrid from "./RestaurantsGrid";
import HeaderToggle from "./Header-Toggle";
import HeaderTextSlider from "./HeaderTextSlider";
import OpenResturant from "./OpenResturant";
import RatiingHeader from "./RatiingHeader";
import { useParams } from "react-router-dom";
import axios from 'axios';

const user = {
  name: "Tom Cook",
  email: "tom@Restaurants.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Restaurants() {
  const params = new URLSearchParams(window.location.search);
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [filterRating , setFilterRating] = useState({});
  const [freeDelivery , setFreeDelivery] = useState(false);
  useEffect(() => {
    const city = params.get("city")
    const zip = params.get("zip")
    axios.get(`https://liefermars.de/ajax/resturents_api_ajax.php?city=${city}&zip=${zip}&page=1`).then((res) => {
      console.log("🚀 ~ file: Restaurants.jsx:37 ~ Restaurants ~ res", res)
      if(res?.data?.data){
        setRestaurantItems(res.data.data)
      }
    })
  }, [window.location.search])


  return (
    <>
      {/*
        This Restaurants requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-12xl  px-4 sm:px-6 border-2 border-black lg:px-8">
                <div className="flex h-16  justify-between">
                  <div className="flex  lg:w-full">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="./images/logo.png"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="./images/logo.png"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:-my-px  lg:w-full   sm:ml-6 sm:flex sm:space-x-8 ">
                      {/* {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-indigo-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))} */}
                      <HeaderToggle />
                      <span className=" p-2 m-2 flex  rounded-xl  w-3/6 bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8 font-bold lg:mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        <input
                          className=" w-3/5 bg-transparent outline-transparent border-none outline-none ring-0 "
                          type={"text"}
                        />
                      </span>
                      <span className="flex items-center p-2 justify-end w-2/3 ">
                        <button className=" hover:bg-gray-400 hover:text-white px-6 py-1 rounded-xl">
                          sign in
                        </button>
                        <button className="px-6 ml-2 py-1 bg-gray-300  hover:bg-gray-400 hover:text-white rounded-xl">
                          sign up
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* --------------- login -------------  */}
                  {/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                   
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div> */}
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* --------------- text crousel ---------------  */}
        <div className="bg-gray-100">
          <HeaderTextSlider />
        </div>
        {/* --------------- header grid check switch ------------ */}
        <div className=" max-w-7xl lg:mt-2 m-auto flex items-center p-2">
          <p className=" bg-gray-100 rounded-xl p-2 flex items-center">
            <span className="mr-8">Open Resturant</span>
            <OpenResturant />
          </p>
          <p className=" bg-gray-100 ml-4 rounded-xl p-2 flex items-center">
            <span className="mr-8">Free Delivery</span>
            <OpenResturant freeDelivery={freeDelivery} setFreeDelivery={setFreeDelivery} />
          </p>
          {/* ---------------- rating ------------  */}
          <p className="ml-4">
            <RatiingHeader filterRating={filterRating} setFilterRating={setFilterRating} />
          </p>
          {/* -------------- minimum order ---------------  */}
          <p className="ml-4">
            <button className="border-2 p-2 rounded-lg bg-gray-100">
              Minimum Order

            </button>
          </p>
        </div>
        <div className="py-1">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
          </header>
          {/* ----------------- menu categray -----------------  */}

          <main>
            <div className="mx-auto lg:max-w-12xl sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-1 sm:px-0">
                <RestaurantsGrid items={restaurantItems} filterRating={filterRating} freeDelivery={freeDelivery} />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
