/* eslint-disable @next/next/no-img-element */
import React from "react";
const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer className=" z-10 border-t border-emerald-500/20  bg-emerald-800 flex items-center text-white justify-between p-5 fixed bottom-0 left-0 w-full">
      <img
        src="https://images.pexels.com/photos/8830899/pexels-photo-8830899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="logo"
        className="h-10 w-10 filter  rounded-full"
      />
      <p className="text-xs text-emerald-200 pl-5">SHINGBY DRAW </p>
      <p className="text-xs text-emerald-200 pl-5">{currentYear} </p>
    </footer>
  );
}

export default Footer;
