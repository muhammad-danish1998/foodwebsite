
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

export default function RestaurantsGrid() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source} className="relative border-2 p-1 rounded-lg">
          <div className="group aspect-w-16  aspect-h-4 block  w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={file.source}
              alt=""
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>

          {/* ---------------------- card logo -------------------  */}
          <div className="flex justify-between  items-center">
            <div className="card-left">
              <p className="pointer-events-none mt-2 block truncate text-lg font-medium text-gray-900">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-sm text-gray-500">
                {file.size}
              </p>
            </div>
            <div className="card-right border-4 mt-2 rounded-full bg-green-700">
              <img src="./images/Ellipse 20.png" width={100} height={100} />
            </div>
          </div>
          <p className="mt-2  pointer-events-none block  text-gray-500 ">
            {/* ------------------------- card bottom  ----------------  */}

            <div className="flex items-center">
            <i className="fa-sharp fa-solid fa-motorcycle mr-2"> </i>€ 1,5

              {/* -------------- watch ----------------------- */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 ml-2  mr-1 text-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              45 min
              {/* ----------------------------- Shoping ------------------  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6  h-6 mr-2 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {/* --------------------- Euro ---------------------  */}
              <p className="mr-2 text-lg">
                Min € <span>20,000</span>
              </p>
              {/* -------------- Review ----------------------- */}
              <span class="flex items-center text-end">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <span class="text-gray-600 ml-1 text-lg">4.2</span>
              </span>
            </div>
          </p>
        </li>
      ))}
    </ul>
  );
}
