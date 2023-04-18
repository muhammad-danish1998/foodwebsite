import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function ResInfo() {
  const [open, setOpen] = useState(true);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto  ">
          <div className="flex min-h-full items-center  justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  transform overflow-hidden rounded-lg bg-white  pb-4  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm ">
                <div>
                  <h1 className="p-4">Restaurant Info</h1>
                </div>
                <div className="h-96">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
                <div className="bg-gray-400 p-2 mb-2">
                  <p className="text-2xl">Colophon</p>
                </div>
                <div>
                  <p className="mb-2 p-2">
                    Brandenburger Straße 11, <br />
                    67065, Ludwigshafen <br />
                    Legal Representative: Hamayoon Rasoly
                  </p>
                  <a className="p-2 text-blue-500" href="#">
                    Info@Liefermars.De
                  </a>
                  <br />
                  <a className="p-2 text-blue-500" href="#">
                    {" "}
                    Https://Liefermars.De
                  </a>
                </div>
                <div className="bg-gray-400 p-2 mb-2">
                  <p className="text-2xl">Delivery Costs</p>
                </div>
                <div className="flex justify-between p-2">
                  <p>Minimum Order Amount</p>
                  <p>15 €</p>
                </div>
                <div className="flex justify-between p-2">
                  <p>Delivery Costs</p>
                  <p>Free Delivery €</p>
                </div>
                <div className="bg-gray-400 p-2 mb-2">
                  <p>Opening Hours</p>
                </div>
                <div className="flex justify-between p-2 border-b-4  ">
                  <p className="">Monday</p>
                  <p>20:12-00:00</p>
                </div>
                <div className="flex justify-between p-2 border-b-4  ">
                  <p className="">Tuesday</p>
                  <p>Closed For Delivery</p>
                </div>
                <div className="flex justify-between p-2 border-b-4  ">
                  <p className="">Wednesday</p>
                  <p>20:12-00:00</p>
                </div>
                <div className="flex justify-end mt-2 p-2">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
