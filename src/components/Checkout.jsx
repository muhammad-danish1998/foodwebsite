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
const plans = [
  {
    id: "small",
    name: "Small",
    description: "4 GB RAM / 2 CPUS / 80 GB SSD Storage",
  },
  {
    id: "medium",
    name: "Medium",
    description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
  },
];
const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@SingleResOverview.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function SingleResOverview() {
const [deliveryOption , setDeliveryOption] = useState("deliver")

  const [menuArray, setMenuArray] = useState([]);
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
  return (
    <div className="min-h-screen bg-gray-100">
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <a
                    href="#"
                    className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-5 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
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
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
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

                  <a
                    href="#"
                    className="ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    New Project
                  </a>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
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
                <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="py-6">
        <div className="mx-auto max-w-8xl sm:px-6 lg:grid lg:max-w-9xl lg:grid-cols-12 lg:gap-8 lg:px-8">
          <main className="lg:col-span-9 xl:col-span-8 border-2">
            {/* -------------- card ----------------  */}
            <section class="text-gray-600 body-font mt-4">
              <div class="container px-5  mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class=" md:w-full">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="p-6">
                        <div class="flex items-center flex-wrap ">
                          <div className=" rounded-lg p-4  mt-16 mb-4  w-5/6">
                            <h1 className="text-4xl font-bold text-black mb-2">
                              Checkout
                            </h1>
                          </div>
                          <div>
                            {
                          
                          deliveryOption == "delivery" ? <Delivery /> : <Pickup />  
                            }

                            </div>
                          <div className="border-2 border-gray-400 rounded-lg p-8   mt-4 mb-4 bg-white  w-5/6">
                        
                            <div>
                              <label
                                htmlFor="comment "
                                className="block text-xl  font-medium text-gray-700"
                              >
                                Personal detail and adress
                              </label>
                              <div className="mt-1">
                                <input className="p-4  w-full" type={"text "} />
                              </div>
                            </div>
                          </div>
                          <div className="border-2 border-gray-400 rounded-lg p-8   mt-4 mb-4 bg-white  w-5/6">
                            <div>
                              <label
                                htmlFor="comment "
                                className="block text-xl  font-medium text-gray-700"
                              >
                                Payment method
                              </label>
                              <div className="mt-1">
                                <input className="p-4  w-full" type={"text "} />
                              </div>
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

                          <div className="border-2 border-gray-400 border-x-0 rounded-lg p-8   mt-4 mb-4 bg-white  w-5/6">
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
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                 Order And Pay
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
