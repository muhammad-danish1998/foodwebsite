import HeaderToggle from "./Header-Toggle";

/*
  This Signin requires some changes to your config:
  
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
export default function Signup() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign In or Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <HeaderToggle value1={"Sign in"} value2="Sign Up" />
          </p>
        </div>
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-10 mx-auto">
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                     First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                    Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                     Password
                    </label>
                    <input
                      type="passwrd"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      confirm password
                    </label>
                    <input
                      type="password"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full ">
                  <div class="relative ">
                    <input
                    value={"Sign Up"}
                      type="submit"
                      id="email"
                      name="email"
                      class="w-full  rounded-2xl border   text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-red-700 text-white"
                    />
                  </div>
                  <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">or </span>
                    </div>
                  </div>
                  <div className="flex bg-blue-500 mt-4 text-white justify-center p-2 rounded-2xl items-center border-2">
                    <p>
                      <img src="./images/goo 1.png" height={30} width={30} />
                    </p>
                    <p className="ml-2">Continue With Google</p>
                  </div>
                  <div
                    style={{ background: "#001E6D" }}
                    className="flex mt-4 mb-4 text-white justify-center p-2 rounded-2xl items-center border-2"
                  >
                    <p>
                      <img src="./images/fb.png" height={30} width={30} />
                    </p>
                    <p className="ml-2">Continue With Google</p>
                  </div>
                  <div className="flex bg-black text-white justify-center p-2 rounded-2xl items-center border-2">
                    <p>
                      <img src="./images/apple.png" height={30} width={30} />
                    </p>
                    <p className="ml-2">Continue With Google</p>
                  </div>
                  <p className="mt-8 text-lg font-semibold text-black">
                    By tapping ”Sign Up”or”Continue with Google, Facebook, or
                    Apple,”you agree to Liefermars.de <span className="text-blue-700"> Terms and Conditions </span> and
                    Privacy. Police.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
