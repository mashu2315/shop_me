import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopUp, setOrderPopUp }) => {
  return (
    <>
      {orderPopUp && ( // Corrected to wrap conditional rendering properly
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            <div>
              {/* Header Section */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-lg">Order Now</span>
                <IoCloseOutline
                  className="cursor-pointer text-2xl"
                  onClick={() => {setOrderPopUp(false);
                    console.log(`Printing the Ordered Status ${orderPopUp}`)
                  }}
                />
              </div>

              {/* Input Fields */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-2 rounded-md dark:bg-gray-800 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded-md dark:bg-gray-800 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border p-2 rounded-md dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;