/* eslint-disable @next/next/no-img-element */

import { useMetamask } from "@thirdweb-dev/react";
import Image from "next/image";

function Login() {
  const connectMetaMask = useMetamask();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    connectMetaMask();
  };
  return (
    <div className="flex flex-col justify-items-center text-center items-center ">
      <div className="flex flex-col justify-items-center text-center items-center ">
        {" "}
        <Image
          src="https://img.icons8.com/fluency/96/money-bag-bitcoin.png"
          alt="logo"
          className="w-40 h-40 rounded-full mt-5 mb-10"
          width={50}
          height={50}
        />
        <h1 className="font-bold text-4xl text-white">SHINGBY LOTTO DAPP</h1>
        <h2 className="text-white mt-3 mb-3">Login to get started</h2>
        <button
          onClick={handleClick}
          className="p-3 mt-10 font-bold rounded-lg shadow-lg bg-white flex justify-center items-center"
        >
          <Image
            src="https://img.icons8.com/color/48/metamask-logo.png"
            alt="metamask-logo"
            className="mr-3"
            width={48}
            height={48}
          />
          Login with MetaMask
        </button>
      </div>
    </div>
  );
}

export default Login;
