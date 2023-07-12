import Header from "@/components/Header";
import {
  SmartContract,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import BuyButton from "./BuyButton";
import Footer from "./Footer";
import { toast } from "react-hot-toast";
import Marquee from "react-fast-marquee";
import AdminControls from "./AdminControls";

function HomePage() {
  const [amount, setAmount] = useState<number>(0);
  const [userTickets, setUserTickets] = useState<number>(0);
  const { contract } = useContract<string>(
    process.env.NEXT_PUBLIC_SMART_CONTRACT
  );
  const smart = process.env.NEXT_PUBLIC_SMART_CONTRACT;
  const address = useAddress();
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: currentWinning } = useContractRead(
    contract,
    "CurrentWinningReward"
  );

  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    [address]
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: commission } = useContractRead(contract, "ticketCommission");
  const { data: getTickets } = useContractRead(contract, "getTickets");
  const { data: lastWinner } = useContractRead(contract, "lastWinner");
  const { data: lastWinnerAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );

  const { data: lotteryOperator } = useContractRead(
    contract,
    "lotteryOperator"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAmount(e.target.valueAsNumber);
  };

  const handleAction = async (contract: SmartContract<ethers.BaseContract>) => {
    const notify = toast.loading("Withdrawing your winnings...");
    try {
      const data = await contract.call("WithdrawWinnings", [], {});
      toast.success("Winnings successfully withdrawn!", { id: notify });
      console.log("payment successful", data);
    } catch (error) {
      toast.error("Whoops something went wrong!!!", { id: notify });
      console.error("contract call faliure", error);
    }
  };

  useEffect(() => {
    if (!getTickets) return;
    const totalTickets: string[] = getTickets;

    const noOfUserTickets: number = totalTickets.reduce(
      (total, ticketAddress) => (ticketAddress === address ? total + 1 : total),
      0
    );
    setUserTickets(noOfUserTickets);
  }, [address, getTickets]);

  return (
    <>
      <Header />
      <Marquee className="bg-[#0A1F1C] p-5 mb-5" speed={100} gradient={false}>
        <div className="flex space-x-3 mx-10">
          <h4 className="text-white font-bold">
            Last Winner: {lastWinner?.toString()}
          </h4>
          <h4 className="text-white font-bold">
            Previous Winnings:
            {lastWinnerAmount &&
              ethers.utils.formatEther(lastWinnerAmount?.toString())}{" "}
            MATIC
          </h4>
        </div>
      </Marquee>
      {lotteryOperator === address && (
        <div className="mx-auto">
          <AdminControls />
        </div>
      )}
      {winnings > 0 && (
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
          <Web3Button
            contractAddress={smart!.toString()}
            action={handleAction}
            className="win-btn"
          >
            <p>Winner!!! Winner!!! </p>
            <p>
              {" "}
              Total winnings: {ethers.utils.formatEther(
                winnings.toString()
              )}{" "}
              MATIC
            </p>
            <br />
            <p>Click here to withdraw</p>
          </Web3Button>
        </div>
      )}
      {/* new draw */}
      <div className="relative z-0 space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 mb-[85px]">
        <div className="stats-container">
          <h1 className="text-4xl text-white font-semibold text-center capitalize">
            the next draw
          </h1>
          <div className="flex justify-between p-2 space-x-2">
            <div className="stats">
              <h2 className="text-sm capitalize">total pool</h2>
              <p className="text-lg uppercase">
                {currentWinning &&
                  ethers.utils.formatEther(currentWinning.toString())}{" "}
                MATIC
              </p>
            </div>
            <div className="stats">
              <h2 className="text-sm">Tickets Remaining</h2>
              <p className="text-lg">{remainingTickets?.toNumber()}</p>
            </div>
          </div>
          {/* {countdwon timer} */}
          <div className="mt-5 mb-3">
            <CountDown />
          </div>
        </div>
        <div className="stats-container space-y-2">
          <div className="stats-container">
            <div className="flex justify-between items-center text-white pb-2">
              <h2>Price per ticket</h2>
              <p>
                {" "}
                {ticketPrice &&
                  ethers.utils.formatEther(ticketPrice.toString())}{" "}
                MATIC
              </p>
            </div>
            <div className="flex text-white items-center space-x-2 bg-[#091B18] border-[#004337] border p-4">
              <p>TICKETS</p>
              <input
                className="flex w-full bg-transparent text-right outline-none"
                type="number"
                min={1}
                max={10}
                value={amount}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between text-emerald-300 text-sm italic font-extrabold">
                <p>Total Costs of Ticket</p>
                <p>
                  {ticketPrice &&
                    Number(ethers.utils.formatEther(ticketPrice.toString())) *
                      amount}{" "}
                  MATIC
                </p>
              </div>
              <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                <p>Service Fees</p>
                <p>
                  {" "}
                  {commission &&
                    ethers.utils.formatEther(commission.toString())}{" "}
                  MATIC
                </p>
              </div>
              <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                <p>+ Network Fees</p>
                <p>TBC</p>
              </div>
            </div>
            <BuyButton amount={amount} />
          </div>
          {userTickets > 0 && (
            <div className="stats">
              <p className="text-lg mb-2">
                You have {userTickets} Tickets in this draw.
              </p>
              <div className="flex max-w-sm flex-wrap gap-x-2 gap-y-4">
                {Array(userTickets)
                  .fill("")
                  .map((_, id) => (
                    <p
                      className="text-emerald-300 h-20 w-12 bg-emerald-500/30 rounded-lg flex flex-shrink-0 items-center justify-center text-xs italic"
                      key={id}
                    >
                      {id + 1}
                    </p>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
