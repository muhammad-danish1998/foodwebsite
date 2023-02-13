import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setMaxRestVal } from "../redux/store/actions/menuAction";

const files = [
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.willflyforfood.net/wp-content/uploads/2022/05/turkish-food-kisir.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.mazalv.com/wp-content/uploads/antakya-kunefesi-1024x576.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "http://cdn.cnn.com/cnnnext/dam/assets/200402101212-13-best-turkish-foods-testi-kebab.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "http://cdn.cnn.com/cnnnext/dam/assets/200402101212-13-best-turkish-foods-testi-kebab.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.willflyforfood.net/wp-content/uploads/2022/05/turkish-food-kisir.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.mazalv.com/wp-content/uploads/antakya-kunefesi-1024x576.jpg",
  },
  // More files...
];

export default function RestaurantsGrid({
  items,
  filterRating,
  freeDelivery,
  openResturant,
  minimumOrderValue,
  checkMinimumOrderValue,
}) {

  const dispatch = useDispatch();
  const FilterItems = (item) => {
    if (filterRating?.value) {
      if (item.overall_rating !== filterRating.value) {
        return false;
      }
    }
    if (freeDelivery) {
      if (item.free_delivery !== "1") {
        return false;
      }
    }
    if (openResturant) {
      if (!getSlugFromUrl(item.url)) {
        return false;
      }
    }
    if (checkMinimumOrderValue) {
      if (Number(item.minorder) > Number(minimumOrderValue)) {
        return false;
      }
    }
    return true;
  };

  const getSlugFromUrl = (url) => {
    return url.split("/")[4];
  };
  return (
    <ul
      role="list"
      className="grid grid-cols-1   gap-x-4 gap-y-6  sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-0"
    >
      {(items || []).filter(FilterItems).map((file) => {
        const restaurantUrl = getSlugFromUrl(file.url);
        const ForwardLink = restaurantUrl ? Link : "div";
        return (
          <li
            key={file.image}
            className="relative border-2 lg:w-11/12  rounded-xl focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
          >
            <ForwardLink
              to={`/singlerestaurant?resturent_slug=${restaurantUrl}&resturent_code=${file.code}`}
            >
              <div className="group  block  w-full overflow-hidden rounded-xl bg-gray-100" onClick={() => dispatch(setMaxRestVal(file.minorder))}>
                <img
                  src={file.banner}
                  alt=""
                  className="pointer-events-none group-hover:opacity-75 lg:h-44 md:h-36 w-full object-cover object-center"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
            </ForwardLink>

            {/* ---------------------- card logo -------------------  */}
            <div className="flex justify-between  items-center p-2 ">
              <div className="card-left ">
                {/* <p className="pointer-events-none    block truncate lg:text-lg text-sm lg:font-medium text-gray-900">
                  {file.name}
                </p> */}
                <h1 class="title-font  text-sm lg:text-lg font-medium text-gray-900 mb-1">
                  {" "}
                  {file.name}
                </h1>
                <p className="pointer-events-none block text-sm font-sm text-gray-500">
                  Thai deliciousness
                </p>
              </div>
              <div className="mt-2  ">
                <img
                  className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                  src={file.image}
                  alt=""
                />
              </div>
              {/* <div className="inline-flex  mt-2 flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className=" object-cover h-28 w-28 rounded-full"
                    src={file.image}
                    alt="imag not found"
                  />
                </div> */}
            </div>
            <p className="  p-1  pointer-events-none block  text-gray-500 ">
              {/* ------------------------- card bottom  ----------------  */}

              <div className="flex items-center   justify-between">
                <i className="fa-sharp  fa-solid fa-motorcycle ">
                  <span className="ml-1 font-sans font-semibold  ">€ {file.delivery_fee}</span>{" "}
                </i>

                {/* -------------- watch ----------------------- */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7   text-lg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  
                </svg> */}
                <i class="fa-solid fa-clock">
                  <span className="ml-1 font-sans font-semibold ">{file.deliveryTime}</span>
                </i>
                {/* ----------------------------- Shoping -----------------  */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6  h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg> */}
                {/* <i className="fa-sharp fa-regular fa-cart-shopping">
                <span className="ml-2  text-sm">
                  min € <span>{file.minorder}</span>
                </span>
                </i> */}
            
                <i class="fa-solid fa-cart-plus">

                <span className="ml-1 font-sans font-semibold">
                    <span>  min € {file.minorder}</span>
                  </span>
                </i>
                
                {/* --------------------- Euro ---------------------  */}
                {/* <p className=" text-lg">
                  Min € <span>${file.minorder}</span>
                </p> */}
                {/* -------------- Review ----------------------- */}
                <span className="flex items-center border-2 rounded-lg p-1 m-1 text-end">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-6 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>

                  <span className="text-gray-600 ml-1 text-lg">
                    {file.overall_rating}
                  </span>
                </span>
              </div>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
