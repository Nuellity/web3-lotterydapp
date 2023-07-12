/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex flex-col justify-center text-center items-center my-auto ">
      <div className="flex items-center space-x-2 mb-5">
        <Image
          src="https://img.icons8.com/fluency/96/money-bag-bitcoin.png"
          alt="logo"
          width={80}
          height={80}
        />
        <h1 className="text-white text-lg text-bold">
          Loading the SHINGBY DRAW
        </h1>
      </div>
      <PropagateLoader color="white" size={20} />
    </div>
  );
}

export default Loading;
