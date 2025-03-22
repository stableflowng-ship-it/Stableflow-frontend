'use client'
import React from "react";
import Image from "next/image";
import logo from '../assests/image1.png'
import twit from '../assests/x-logo.png'
import git from '../assests/warpcast-logo.svg'
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/onboarding");
  };
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
      <div className="grid pt-[10%] overflow-hidden justify-center gap-[4rem] items-center bg-cover bg-center" style={{ backgroundImage: "url('/image3.svg')", backgroundPosition: "center" }}>
        <div className="flex justify-between px-[2rem] lg:px-0 items-center">
          <Image 
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="lg:w-[175px] lg:h-[38px] w-[120px] h-[25px]"
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

        <div className="flex flex-col  items-center lg:items-baseline gap-[1rem] pt-[5rem] lg:pt-0">
          <h2 className="lg:text-[37px] text-[25px] font-[600] text-center lg:text-left">
            Crypto <span className="bg-gradient-to-r from-[#4FA6FF] to-[#5553F6] bg-clip-text text-transparent glow-text">accepted.</span> Cash delivered.<span className="text-[#909090]"> <br></br> Everyone </span> <span className="text-[#FFB767]">{';)'}</span> <span className="text-[#909090]">smiles.</span>
          </h2>
          <h4 className="font-[400] text-center lg:px-0 px-[0.5rem] lg:text-start text-[14px] lg:text-[18px] text-[#24292E]">
            Unlock crypto liquidity for your business effortlessly and receive<br></br> cash instantly. No waiting time. No reconciliation.
          </h4>
        </div>
        <div className="flex flex-col gap-[16px] w-full items-center  justify-center lg:items-left lg:justify-left">
          <div className="flex flex-row items-center gap-[5px] px-[1.5rem]">
            <PrimaryButton className="cursor-pointer" onClick={handleClick}>
              <h3 className="text-[#FFFFFF] font-[600] lg:mr-[0.5rem] text-[16px]">Start accepting</h3>
            </PrimaryButton>
            <SecondaryButton className="cursor-pointer">
              <h3 className="text-black font-[600] lg:mr-[0.5rem] text-[14px] lg:text-[16px]">Apply for payments kit</h3>
            </SecondaryButton>
          </div>
          <div className="flex text-left">
            <h3 className="text-[14px] font-[400] text-[#909090]">By logging in, you agree to our <span className="text-[#1E90FF]">Terms of service</span> & <span className="text-[#1E90FF]">Privacy Policy.</span></h3>
          </div>
        </div>

      </div>
    </>
  );
}