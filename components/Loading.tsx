/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex flex-col justify-center text-center items-center my-auto ">
      <div className="flex items-center space-x-2 mb-5">
        <img
          src="https://images.pexels.com/photos/8830899/pexels-photo-8830899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-20 h-20 rounded-full"
          alt="loading..."
        />{" "}
        <h1 className="text-white text-lg text-bold">
          Loading the SHINGBY DRAW
        </h1>
      </div>
      <PropagateLoader color="white" size={20} />
    </div>
  );
}

export default Loading;
