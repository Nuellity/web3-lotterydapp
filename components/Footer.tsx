/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer className=" z-10 border-t border-emerald-500/20  bg-emerald-800 flex items-center text-white justify-between p-5 fixed bottom-0 left-0 w-full">
      <Image
        src="https://img.icons8.com/fluency/96/money-bag-bitcoin.png"
        alt="logo"
        className="w-10 h-10 rounded-full "
        width={10}
        height={10}
      />
      <p className="text-xs text-emerald-200 pl-5">SHINGBY DRAW </p>
      <p className="text-xs text-emerald-200 pl-5">{currentYear} </p>
    </footer>
  );
}

export default Footer;
