"use client"
import { useState } from "react"
import { Eye, EyeOff, Zap } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import { SecondaryButton } from "./secondary-button"
import share from '../assests/export.svg'
import Image from "next/image"
export default function VolumeWidget() {
  const [isHidden, setIsHidden] = useState(false)
  const [volumeValue] = useState("300 USDC")

  return (
    <div className="relative lg:w-[573px] bg-[#FFFFFF]  grid lg:items-start lg:justify-normal items-center justify-center w-screen lg:pl-0  rounded-[20px] overflow-hidden shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <div className="absolute inset-0 dotted-background"></div>
      <div className="relative z-10 px-[24px] py-[16px]">
        {/* Total volume section with eye icon */}
        <div className="flex items-center">
          <span className="text-[#B0B0B0] text-[16px] font-medium">Total volume</span>
          <button onClick={() => setIsHidden(!isHidden)} className="ml-2 p-1 rounded-full cursor-pointer hover:bg-gray-100">
            {isHidden ? (
              <EyeOff size={16} className="text-[#B0B0B0]" />
            ) : (
              <Eye size={16} className="text-[#B0B0B0]" />
            )}
          </button>
        </div>

        {/* Volume value and Switch to NGN in column layout */}
        <div className="flex flex-col">
          <span className="text-[32px] text-[#121212] font-medium">{isHidden ? "⊛⊛⊛⊛⊛⊛" : volumeValue}</span>

          {/* Switch to NGN button with gradient text */}
          <button className="cursor-pointer px-[8px] py-[4px] text-[12px] rounded-full w-fit bg-white border border-[#EDEDED] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(90deg, #4AA3FF 0%, #7276F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Switch to NGN
            </span>
          </button>
        </div>

        {/* Buttons with 52px spacing from top */}
        <div className="mt-[52px] flex gap-[12px]">
          <PrimaryButton className="cursor-pointer" shortcut="">
            <div className="flex items-center">
              <Zap className="mr-2 h-4 w-4" />
              <span>Start accepting crypto</span>
            </div>
          </PrimaryButton>

          <SecondaryButton className="cursor-pointer min-w-max">
            <div className="flex flex-row items-center whitespace-nowrap gap-[0.2rem]">
              <Image
                src={share}
                width={20}
                height={20}
                alt="share"
                className="w-[20px] h-[20px]"
              />
              <span>Apply for payments kit</span>
            </div>
          </SecondaryButton>
        </div>

        {/* Supercharge text with 6px spacing */}
        <div className="mt-[6px]">
          <p className="text-[14px] text-[#B0B0B0]">Supercharge your business with our payment kit</p>
        </div>
      </div>

      <style jsx>{`
        .dotted-background {
          background-image: radial-gradient(#E0E0E0 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
} 