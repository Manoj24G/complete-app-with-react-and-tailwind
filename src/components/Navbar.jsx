import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[60px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-xl text-green-800 font-medium ml-12 sm:text-md">
            LZY
          </h1>
        </div>

        <div className="hidden md:flex pr-12 items-baseline">
          <ul className="hidden md:flex p-2 items-baseline text-center">
            <li>Intro</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Login</li>
          </ul>

          <div classNane="hidden md:flex pr-4">
            <button className="px-4 py-2 m-4 ease-in-out duration-300">
              Sign Up
            </button>
          </div>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "md:hidden absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full text-left">Intro</li>
        <li className="border-b-2 border-zinc-300 w-full text-left">
          Features
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-left">Pricing</li>
        <li className="border-b-2 border-zinc-300 w-full text-left">Login</li>
        <div className="flex flex-col my-4 mx-12">
          <button className="bg-transparent text-green-600 px-8 py-2 my-2">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
