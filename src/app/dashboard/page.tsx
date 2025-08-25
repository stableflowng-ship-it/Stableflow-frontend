"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import logo from "../../assests/image1.png";
import x_icon from "../../assests/new/x-coin.svg";
import h_icon from "../../assests/new/coin-half.svg";
import { VolumeWidget } from "@/components/volume-widget";
import {
  PrimaryButton,
  TertiaryButton,
  TransactionHistoryContainer,
} from "@/components";
import edit from "../../assests/magicpen.svg";
import { TransactionNotification } from "@/components";
import * as Dialog from "@radix-ui/react-dialog";
import twit from "../../assests/x-logo.png";
import git from "../../assests/warpcast-logo.svg";
import Modals from "./modals";
import Dropdown from "./dropDown";
import { Clock, Zap } from "lucide-react";
import { useBusinessStore } from "@/zustand_store/counter_example";

export default function Page() {
  const isPending = useBusinessStore((state) => state.isPending);
  const updatePending = useBusinessStore((state) => state.updatePending);
  // const isCompleted = useBusinessStore((state => state.isCompleted));
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  function closee() {
    setOpen(false);
    setStep(1);
    setProgress(0);
    setChecked(false);
  }

  function close1() {
    setOpen(false);
    setStep(1);
    setProgress(0);
    setChecked(false);
    // handleReset();
  }
  function forward() {
    setStep(step + 1);
  }
  function back() {
    setStep(step - 1);
  }

  useEffect(() => {
    if (step === 4) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 5 ? prev + 1 : 5));
      }, 1500);
      updatePending();
      return () => clearInterval(interval);
    }
  }, [step, updatePending]);

  function Finalize() {
    setChecked(true);
  }
  function openModal() {
    setOpen(true);
  }
  return (
    <div className="w-screen h-screen overflow-y-scroll bg-[#f7f7f7] pt-5 pb-5">
      <div className="w-[600px] m-auto flex flex-col justify-between h-full grow">
        <div className="flex w-full justify-between items-center">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="lg:w-[180px] lg:h-[40px] w-[100px] h-[22px]"
          />
          <div className="flex flex-row gap-[1rem]">
            <Dropdown />
          </div>
        </div>

        <div className="grow flex flex-col items-center justify-center">
          {!isPending && (
            <div>
              <div className="relative w-full lg:h-[100px]">
                <Image src={x_icon} alt={"x-icon"} fill />
              </div>
              <h3 className="mt-9 font-bold text-2xl w-[247px] text-center">
                Hoohoo 🎉 welcome to Stableflow
              </h3>
              <p className="w-72 text-center mt-3 text-sm text-[#B3B3B3] font-medium">
                To get start you need to create a business and fill the
                necessary details.
              </p>
              <div className="flex justify-center">
                <PrimaryButton
                  className="cursor-pointer mt-12"
                  shortcut=""
                  onClick={openModal}
                >
                  <div className="flex items-center w-fit">
                    <Zap className="h-3 w-3 mr-1" />
                    <span className="text-[12px] lg:text-[16px] ">
                      Create your business
                    </span>
                  </div>
                </PrimaryButton>
              </div>

              <div className="flex items-center justify-between w-[300px] mt-10">
                <p className="text-sm font-medium text-[#B3B3B3]">
                  Time required to setup
                </p>
                <div className="bg-white rounded-full py-1 px-2 flex items-center gap-1 text-sm font-medium">
                  <Clock size={16} color="#E0C600" /> 2mins
                </div>
              </div>
            </div>
          )}
          {isPending && (
            <div>
              <div className="relative w-full h-[100px]">
                <Image src={h_icon} alt={"x-icon"} fill />
              </div>
              <h3 className="mt-9 font-bold text-2xl w-[247px] m-auto text-center">
                We received your business registration
              </h3>
              <p className="w-70 text-center mt-3 m-auto text-sm text-[#B3B3B3] font-medium">
                Our team is currently reviewing your application
              </p>

              <div className="flex items-center justify-between w-[300px] mt-20 m-auto">
                <p className="text-sm font-medium text-[#B3B3B3]">Status</p>
                <div className="bg-white rounded-full py-1 px-2 flex items-center gap-1 text-sm font-medium">
                  <Clock size={16} color="#E0C600" /> Pending
                </div>
              </div>
            </div>
          )}

          {/* <div className="flex flex-col  overflow-hidden lg:items-start items-center  justify-center gap-[24px] h-full bg-[#f7f7f7] ">
            <div className="flex flex-col items-center justify-center m-auto lg:w-full border-[#EFEFEF] rounded-t-[20px] bg-[#EFEFEF]">
              <Dialog.Root open={open} onOpenChange={closee}>
                <div className="flex items-center justify-between w-full py-[0.7rem] px-[1rem] bg-transparent">
                  <div
                    className="grid decoration-0 cursor-pointer"
                    onClick={openModal}
                  >
                    <h3 className="text-[16px] flex text-[#828282] font-[500]">
                      Hola👋,
                    </h3>

                    <h3 className="text-[16px] text-[#121212] underline underline-offset-1 flex items-start font-[500]">
                      Enter your business name
                    </h3>
                  </div>
                </div>

                <VolumeWidget openDialog={openModal} />
              </Dialog.Root>
            </div>

            <div className="w-full flex flex-col gap-[8px]">
              <TransactionNotification />
              <TransactionHistoryContainer />
            </div>
          </div> */}
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="text-[#8F8F8F] text-sm font-medium flex items-center">
            Built with ❤️
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-md">
                <Image src={twit} alt="X icon" className="text-[#8F8F8F]" />
              </div>
              <span className="text-[#8F8F8F] text-sm font-medium">
                X(formerly Twitter)
              </span>
            </div>
            <div className="w-px h-6 bg-[#8F8F8F]"></div>
            <div className="flex flex-row items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-md">
                <Image
                  src={git}
                  alt="Warpcast icon"
                  className="text-[#8F8F8F]"
                />
              </div>
              <span className="text-[#8F8F8F] text-sm font-medium">
                Warpcast
              </span>
            </div>
          </div>
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={closee}>
        <div className="flex items-center justify-between w-full py-[0.7rem] px-[1rem] bg-transparent">
          <Modals
            closefunction={closee}
            close1={close1}
            step={step}
            forward={forward}
            back={back}
            checked={checked}
            progress={progress}
            finalize={Finalize}
          />
        </div>
      </Dialog.Root>
    </div>
  );
}
