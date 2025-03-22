'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import logo from '../../assests/image1.png'
import twit from '../../assests/x-logo.png'
import git from '../../assests/warpcast-logo.svg'
import newlogo from '../../assests/newlogo.svg'
import { useRouter } from "next/navigation";

export default function Home() {
  const targetDate = new Date('2025-03-26T00:00:00Z').getTime(); // March 26, 2025 @ 00:00 UTC

  const [countdown, setCountdown] = useState<string>('Loading...');

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown('0h 0m 0s');
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
     <>
       <style jsx global>{`
         @keyframes backgroundPulse {
           0% {
             opacity: 0.8;
           }
           50% {
             opacity: 1;
           }
           100% {
             opacity: 0.8;
           }
         }
         
         @keyframes glowing {
           0% {
             text-shadow: 0 0 5px rgba(79, 166, 255, 0.5), 0 0 10px rgba(85, 83, 246, 0.3);
           }
           50% {
             text-shadow: 0 0 10px rgba(79, 166, 255, 0.8), 0 0 20px rgba(85, 83, 246, 0.5);
           }
           100% {
             text-shadow: 0 0 5px rgba(79, 166, 255, 0.5), 0 0 10px rgba(85, 83, 246, 0.3);
           }
         }
         
         .animate-background {
           animation: backgroundPulse 8s infinite ease-in-out;
         }
         
         .glow-text {
           animation: glowing 2s infinite ease-in-out;
         }
       `}</style>
       <div className="flex flex-col pt-[5%] overflow-hidden justify-center  h-screen bg-gradient-to-r  from-[#1F1F1F] to-[#6E6E6E] w-full items-center bg-cover bg-center">
       <div className=" absolute opacity-[0.5] left-[45%] w-[70%] h-[70%]" style={{ backgroundImage: "url('/image3.svg')",  backgroundPosition: "" }}>
       </div>
       <div className="grid  gap-[5rem]">
         <div className="flex justify-between px-[2rem] lg:px-0 items-center z-20">
           <Image 
             src={newlogo}
             alt="logo"
             width={100}
             height={100}
             className="lg:w-[170px] lg:h-[38px] w-[120px] h-[25px]"
           />
           <div className="flex flex-row gap-[1rem]">
             <Image
               src={git}
               alt="logo"
               width={24}
               height={24}
               className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] cursor-pointer"
             />
             <Image
               src={twit}
               alt="logo"
               width={50}
               height={50}
               className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] cursor-pointer"
             />
           </div>
         </div>
         <div className="flex flex-col pl-[1rem]  lg:items-baseline gap-[0.5rem] z-20">
           <h2 className="lg:text-[37px] text-[25px] font-[600] text-white">
             Crypto <span className="bg-gradient-to-r from-[#4FA6FF] to-[#5553F6] bg-clip-text text-transparent ">accepted.</span> Cash delivered.<span className="text-[#909090]"> <br></br> Everyone </span> <span className="text-[#FFB767]">{';)'}</span> <span className="text-[#909090]">smiles.</span>
           </h2>
           <h4 className="font-[400]  lg:px-0 px-[0.5rem] lg:text-start text-[15px] lg:text-[18px] text-white">
             Unlock crypto liquidity for your business effortlessly and receive<br></br> cash instantly. No waiting time. No reconciliation.
           </h4>
         </div>
         <div className=" z-20 flex flex-row gap-[16px] w-full items-center justify-between px-[0.5rem]">
         <p className="text-[16px] font-[500] text-[#909090]">Countdown till launch</p>
         <p className="text-[20px] font-[900] bg-gradient-to-r from-[#4FA6FF] to-[#555AF7] bg-clip-text text-transparent   ">{countdown}</p>
         </div>
         </div>
       </div>
     </>
   );
}