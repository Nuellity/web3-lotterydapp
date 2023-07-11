/* eslint-disable @next/next/no-img-element */

import { useMetamask } from "@thirdweb-dev/react";

function Login() {
  const connectMetaMask = useMetamask();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    connectMetaMask();
  };
  return (
    <div className="flex flex-col justify-items-center text-center items-center ">
      <div className="flex flex-col justify-items-center text-center items-center ">
        {" "}
        <img
          src="https://images.pexels.com/photos/8830899/pexels-photo-8830899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          className="w-40 h-40 rounded-full mt-5 mb-10"
        />
        <h1 className="font-bold text-4xl text-white">SHINGBY LOTTO DAPP</h1>
        <h2 className="text-white mt-3 mb-3">
          Login with MetaMask to get started
        </h2>
        <button
          onClick={handleClick}
          className="px-8 py-5 mt-10 font-bold rounded-lg shadow-lg bg-white"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
}

export default Login;
