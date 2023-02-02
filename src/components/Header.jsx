import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderSlider from "./HeaderSlider";
import PlacesAutoComplete from "./PlacesAutoComplete";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { Menu } from "@headlessui/react";
import HomeNavbar from "./HomeNavbar";
const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@SingleResOverview.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
export default function Header() {
  const navigate = useNavigate();
  const handlePlaceSelect = (data) => {
    console.log("🚀 ~ file: Header.jsx:20 ~ handlePlaceSelect ~ data", data);
    // const formData = new URLSearchParams();
    // formData.append("lat", 49.4537628);
    // formData.append("long", 8.4183208);
    // formData.append("expedition", "all");
    // formData.append("city", "Ludwigshafen");
    // formData.append("postal_code", 67065);
    // formData.append("address", "67065 Ludwigshafen, Germany");

    // axios.post("https://liefermars.de/ajax/searchfood.php", formData,{
    //   headers: {

    //   }
    // }).then((response) => {
    //   console.log({ response })
    // })
    navigate(`/restaurant?city=${data.city}&zip=${data.zipCode}`);
  };
  return (
    <div className="relative overflow-hidden bg-pink-100">
      <div
        className="hidden lg:absolute lg:inset-0 lg:block"
        aria-hidden="true"
      >
        <svg
          style={{ background: "#FF2E00" }}
          className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform "
          width={640}
          height={850}
          fill="none"
          viewBox="0 0 640 784"
        >
          {/* <defs className="">
            <pattern
            
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
              className=""
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-white"
                fill="currentColor"
              />
            </pattern>
          </defs> */}
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50 "
           
          />
          <rect
          
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 pb-16  sm:pb-24 lg:pb-32">
        {/* ----------------- navbar ------------------  */}
        <HomeNavbar />

        <main className="mx-auto  max-w-9xl   px-6 ">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:mt-32 lg:col-span-6 lg:text-left">
              <h1>
                <span className="mainHeadingHeader mt-1 block text-4xl font-bold  sm:text-5xl xl:text-6xl">
                  <span className="block ">Liefermars Ist Eine</span>
                  <span className="block "> Online Essen Bestellplatform</span>
                </span>
              </h1>
              {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </p> */}
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="POST"
                  className="mt-3 sm:flex "
                >
                  <div className=" rounded-2xl shadow-sm p-2 flex justify-center items-center w-full   bg-white border-orange-500 ">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
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

                    {/* <input
                      ref={placesRef}
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full border-0 outline-none   py-3 text-base   sm:flex-1"
                    /> */}
                    <PlacesAutoComplete onPlaceSelect={handlePlaceSelect} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-orange-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                </form>
              </div>
              
            </div>
            <div className="relative mt-12    sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0  lg:mt-0 lg:p-8 lg:flex lg:max-w-none  lg:items-center">
              <div className="relative   mx-auto w-full rounded-lg  lg:max-w-full  ">
                <HeaderSlider />
             
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
