"use client";

import { useState } from "react";

const UseStateDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto my-8 text-center ">
      <h2 className="text-2xl font-bold mb-4">UseState DropDown</h2>
      <div className="relative block">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer border border-gray-300 py-2 px-4 rounded bg-gray-200 hover:bg-gray-300 "
        >
          Click here
        </div>
        {isOpen && (
          <div className="mt-2 border border-gray-300 rounded bg-white shadow p-4 absolute right-0 z-10">
            <p>This is the dropdown created using React useState</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseStateDropDown;
