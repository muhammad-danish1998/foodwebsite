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
export default function Signin() {
    return (
      <>
   
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
         
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sing In or Sign Up</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <HeaderToggle value1 = {"Sign in"} value2 = "Sign Up" />
              
            </p>
            <div className="flex bg-blue-500 mt-4 text-white justify-center p-2 rounded-2xl items-center border-2">
              <p><img src="./images/goo 1.png" height={30} width={30} /></p>
              <p className="ml-2">Continue With Google</p>
            </div>
            <div style={{background:"#001E6D"}} className="flex mt-4 mb-4 text-white justify-center p-2 rounded-2xl items-center border-2">
              <p><img src="./images/fb.png" height={30} width={30} /></p>
              <p className="ml-2">Continue With Google</p>
            </div>
            <div className="flex bg-black text-white justify-center p-2 rounded-2xl items-center border-2">
              <p><img src="./images/apple.png" height={30} width={30} /></p>
              <p className="ml-2">Continue With Google</p>
            </div>
            

           
            <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">or continue with email</span>
                  </div>
                </div>
          </div>
          
          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2  "
                  >
                  Continue to Sign In
                  </button>
                </div>
              </form>
  
             
            </div>
          </div>
        </div>
      </>
    )
  }
  