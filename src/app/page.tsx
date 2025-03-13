'use client'
import React from "react";
import Image from "next/image";
import logo from '../assests/image1.png'
import twit from '../assests/Variant6.png'
import git from '../assests/Variant7.png'
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <div  className="grid   pt-[10%] overflow-hidden    justify-center gap-[4rem]  items-center bg-cover bg-center" style={{ backgroundImage: "url('/image3.svg')", backgroundPosition : "center" }}>
   <div className="flex justify-between px-[2rem] lg:px-0 items-center  ">
   <Image 
   src={logo}
   alt="logo"
   width={100}
   height={100}
   className="lg:w-[180px] lg:h-[40px] w-[120px] h-[25px]  "
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
    
   <div className="flex flex-col items-center lg:items-baseline gap-[1rem] ">
   <h2 className="lg:text-[37px] text-[25px] font-[600]">
   Crypto <span className="bg-gradient-to-r from-[#4FA6FF] to-[#5553F6] bg-clip-text text-transparent">accepted.</span> Cash delivered.<span className="text-[#909090]"> <br></br> Everyone </span> <span className="text-[#FFB767]">{';)'}</span> <span  className="text-[#909090]" >smiles.</span>
   </h2>
   <h4 className=" font-[400] text-center px-[0.5rem] lg:text-start text-[15px] lg:text-[18px] text-[#24292E]">
   Unlock crypto liquidity for your business effortlessly and receive<br></br> cash instantly. No waiting time. No reconciliation. 
   </h4>
   </div>

   <div className="lg:grid flex flex-col gap-[1.5rem] lg:gap-[1.5rem] items-center justify-center">
   <div className="flex flex-row items-center justify-between gap-[2rem] lg:gap-[5rem]">
   <PrimaryButton className="cursor-pointer" onClick={handleClick}>
   <h3 className="text-[#FFFFFF] font-[600] mr-[0.5rem] text-[17px]">Start accepting</h3>
   </PrimaryButton>

   <SecondaryButton className="cursor-pointer" >
   <h3  className="text-black font-[600] mr-[0.5rem] text-[14px] lg:text-[16px]">Apply for payments kit</h3>
   </SecondaryButton>
   </div>
   <div className="flex ">
   <h3 className="text-[14px] font-[400] text-[#909090] ">By logging in, you agree to our <span className="text-[#1E90FF]">Terms of service</span> & <span className="text-[#1E90FF]">Privacy Policy.</span></h3>
   </div>
   </div>
    </div>
  );
}
