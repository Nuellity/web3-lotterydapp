/* eslint-disable @next/next/no-img-element */

import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-4">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h-10 w-10"
          src="https://images.pexels.com/photos/8830899/pexels-photo-8830899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div>
          <h1 className="text-lg text-white font-bold">SHINGBY DRAW</h1>
          <p className="text-xs text-emerald-500 truncate">
            User: {address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center rounded md:col-span-3">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton isActive title="BUY TICKETS" />
          <NavButton onClick={disconnect} title="LOGOUT" />
        </div>
      </div>
      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 text-white cursor-pointer mx-auto" />
        <span className="md:hidden">
          <NavButton onClick={disconnect} title="Logout" />
        </span>
      </div>
    </header>
  );
}

export default Header;
