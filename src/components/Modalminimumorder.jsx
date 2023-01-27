import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Modalminimumorder({ visible, onClose }) {
  if (!visible) return null;
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  const handleOnClose = () => {
    onClose();
  };
  return (
    <Transition.Root show={open} as={Fragment} onClick={handleOnClose}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="mt-3  sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900"
                    >
                     Mininum Order
                    </Dialog.Title>
                    <Dialog.Title
                      as="h3"
                      className="text-sm font-normal leading-6 text-gray-900"
                    >
                     10,00
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        <div class="">
                          <input
                            type="range"
                            list="tickmarks"
                            min="3"
                            max="5"
                            class="w-full"
                          />
                          <datalist id="tickmarks">
                            <option value="3"></option>
                            <option value="3.5"></option>
                            <option value="4"></option>
                            <option value="4.5"></option>
                            <option value="5"></option>
                          </datalist>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    View Results
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    // onClick={() => setOpen(false)}
                    onClick={onClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
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