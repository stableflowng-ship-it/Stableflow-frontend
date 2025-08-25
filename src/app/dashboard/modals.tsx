"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import close from "../../assests/add.svg";
import { PrimaryButton } from "@/components";
import yellow from "../../assests/image6.svg";
import green from "../../assests/tick-circle.svg";
import image5 from "../../assests/import.svg";
import { BusinessDropdownSelector } from "./BusinessDropdwon";
import export2 from "../../assests/export2.svg";
import { motion, AnimatePresence } from "framer-motion";
import { StepBack } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { useAppDispatch } from "../store/store";
import { setInputValue } from "../store/inputSlice";

type ChildProps = {
  closefunction: () => void;
  step: number;
  forward: () => void;
  back: () => void;
  progress: number;
  checked: boolean;
  finalize: () => void;
  close1: () => void;
};

// Shared animation variants
const modalVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Modals: React.FC<ChildProps> = ({
  closefunction,
  step,
  forward,
  back,
  progress,
  checked,
  finalize,
  close1,
}) => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountType, setAccountType] = useState("");

  const dispatch = useAppDispatch();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setInputValue(e.target.value));
    },
    [dispatch]
  );

  const handleFocus = useCallback((inputName: string) => {
    setFocusedInput(inputName);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedInput(null);
  }, []);

  const checklist = [
    "Business name added",
    "Configure receiver account",
    "Creating a crypto wallet",
    "You're set up!",
  ];

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed px-[0.5rem] inset-0 bg-black/50 z-30 backdrop-blur-md">
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4 }}
        />
      </Dialog.Overlay>
      <Dialog.Content>
        <motion.div
          className="fixed left-1/2 top-4/6   transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-[20px] w-[90%] lg:w-[500px]"
          style={{ borderRadius: "20px" }}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <style jsx>{`
            @keyframes gradient {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 200% 0%;
              }
            }
          `}</style>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                className="grid gap-[16px]"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
              >
                <motion.div
                  className="flex flex-row items-center justify-between"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">
                    Set up your business entity
                  </Dialog.Title>
                  <Image
                    src={close}
                    width={30}
                    height={30}
                    alt="close"
                    className="cursor-pointer"
                    onClick={close1}
                  />
                </motion.div>
                <div className="grid">
                  <p className="font-[400] text-[16px] mb-[8px]">
                    Business Name
                  </p>
                  <div className="relative w-full">
                    {/* Gradient Border Container */}
                    <div
                      className={`relative rounded-[10px] ${
                        focusedInput === "businessName" ? "p-0.5" : "p-0"
                      }`}
                    >
                      {/* Animated gradient background (only visible when focused) */}
                      {focusedInput === "businessName" && (
                        <div
                          className="absolute inset-0 rounded-[10px]"
                          style={{
                            background:
                              "linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)",
                            backgroundSize: "200% auto",
                            animation: "gradient 2s linear infinite",
                          }}
                        />
                      )}

                      {/* Input container */}
                      <div
                        className={`
                          relative flex items-center p-2 px-4 h-9 rounded-[10px]
                          ${
                            focusedInput === "businessName"
                              ? "bg-white"
                              : "bg-gray-100 border border-gray-200"
                          }
                        `}
                      >
                        <input
                          type="text"
                          placeholder="Enter business name"
                          onChange={handleInputChange}
                          className={`
                            w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                            border-none outline-none focus:ring-0
                          `}
                          aria-label="Business name"
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-[#959595] font-[500] text-[12px]">
                    *Use your business name as incorperated
                  </h3>
                </div>
                <div className="grid">
                  <p className="font-[400] text-[16px] mb-[8px]">
                    Business contact
                  </p>
                  <div className="relative w-full">
                    {/* Gradient Border Container */}
                    <div
                      className={`relative rounded-[10px] ${
                        focusedInput === "businessContact" ? "p-0.5" : "p-0"
                      }`}
                    >
                      {/* Animated gradient background (only visible when focused) */}
                      {focusedInput === "businessContact" && (
                        <div
                          className="absolute inset-0 rounded-[10px]"
                          style={{
                            background:
                              "linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)",
                            backgroundSize: "200% auto",
                            animation: "gradient 2s linear infinite",
                          }}
                        />
                      )}

                      {/* Input container */}
                      <div
                        className={`
                          relative flex items-center p-2 px-4 h-9 rounded-[10px]
                          ${
                            focusedInput === "businessContact"
                              ? "bg-white"
                              : "bg-gray-100 border border-gray-200"
                          }
                        `}
                      >
                        <input
                          type="text"
                          placeholder="Enter business phone number"
                          onBlur={handleBlur}
                          className={`
                            w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                            border-none outline-none focus:ring-0
                          `}
                          aria-label="Business contact"
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <p className="font-[400] text-[16px] mb-[8px]">
                    Business category
                  </p>
                  <BusinessDropdownSelector
                    placeholder="Select Payment Method"
                    options={["Cash", "POS"]}
                    value={paymentMethod}
                    onChange={(option: string) => setPaymentMethod(option)}
                    width="100%"
                  />
                </div>
                <PrimaryButton
                  shortcut=""
                  onClick={forward}
                  className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-[10px] border-0"
                >
                  Continue
                </PrimaryButton>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                className="grid gap-[16px]"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
              >
                <motion.div
                  className="flex flex-row items-center justify-between"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <StepBack
                        className="lg:text-[20px] text-[15px] font-[600] cursor-pointer"
                        onClick={back}
                        aria-label="Go back"
                      />
                    </motion.div>
                    <Dialog.Title
                      className="lg:text-[24px] text-[18px] font-[600]"
                      id="modal-title"
                    >
                      <motion.span layoutId="modal-title">
                        Set up receiver account
                      </motion.span>
                    </Dialog.Title>
                  </div>
                  <Image
                    src={close}
                    width={30}
                    height={30}
                    alt="close"
                    className="cursor-pointer"
                    onClick={close1}
                  />
                </motion.div>
                <div className="grid">
                  <p className="font-[400] text-[16px] mb-[8px]">
                    Business category
                  </p>
                  <BusinessDropdownSelector
                    placeholder="Select a bank name"
                    options={[
                      "Sterling bank",
                      "First bank",
                      "Access bank",
                      "UBA",
                    ]}
                    value={bankName}
                    onChange={(option: string) => setBankName(option)}
                    width="100%"
                  />
                </div>
                <div className="grid">
                  <p className="font-[400] text-[16px] mb-[8px]">
                    Account number
                  </p>
                  <div className="relative w-full">
                    {/* Gradient Border Container */}
                    <div
                      className={`relative rounded-[10px] ${
                        focusedInput === "accountNumber" ? "p-0.5" : "p-0"
                      }`}
                    >
                      {/* Animated gradient background (only visible when focused) */}
                      {focusedInput === "accountNumber" && (
                        <div
                          className="absolute inset-0 rounded-[10px]"
                          style={{
                            background:
                              "linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)",
                            backgroundSize: "200% auto",
                            animation: "gradient 2s linear infinite",
                          }}
                        />
                      )}

                      {/* Input container */}
                      <div
                        className={`
                          relative flex items-center p-2 px-4 h-9 rounded-[10px]
                          ${
                            focusedInput === "accountNumber"
                              ? "bg-white"
                              : "bg-gray-100 border border-gray-200"
                          }
                        `}
                      >
                        <input
                          type="text"
                          placeholder="Enter account number"
                          onFocus={() => handleFocus("accountNumber")}
                          onBlur={handleBlur}
                          className={`
                            w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                            border-none outline-none focus:ring-0
                          `}
                          aria-label="Account number"
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-[#868686] border-blue-600 rounded-[100px] border-[1px] w-fit flex items-start px-[8px] py-[4px] mt-[8px] text-[14px] font-[500]">
                    Temidayo Folajin
                  </div>
                </div>
                <div className="grid">
                  <p className="font-[400] text-[16px] mb-[8px]">
                    Account type
                  </p>
                  <BusinessDropdownSelector
                    placeholder="Select an account type"
                    options={["Cash", "POS"]}
                    value={accountType}
                    onChange={(option: string) => setAccountType(option)}
                    width="100%"
                  />
                </div>
                <PrimaryButton
                  shortcut=""
                  onClick={forward}
                  className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-[10px] border-0"
                >
                  Start accepting
                </PrimaryButton>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                className="grid gap-[16px]"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
              >
                <motion.div
                  className="flex flex-row items-center justify-between"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <StepBack
                        className="lg:text-[20px] text-[15px] font-[600] cursor-pointer"
                        onClick={back}
                        aria-label="Go back"
                      />
                    </motion.div>
                    <Dialog.Title
                      className="lg:text-[24px] text-[18px] font-[600]"
                      id="modal-title"
                    >
                      <motion.span layoutId="modal-title">
                        Set up receiver account
                      </motion.span>
                    </Dialog.Title>
                  </div>
                  <Image
                    src={close}
                    width={30}
                    height={30}
                    alt="close"
                    className="cursor-pointer"
                    onClick={close1}
                  />
                </motion.div>
                <div
                  className="flex justify-between p-[1rem] items-center border-[2px] cursor-pointer rounded-2xl border-[#E2E2E2]"
                  role="button"
                  tabIndex={0}
                >
                  <h3 className="text-black font-[600] text-[16px]">
                    Read our terms of service
                  </h3>
                  <button
                    onClick={finalize}
                    className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-[#8D8D8D] bg-white rounded-full shadow-sm hover:bg-gray-50"
                    aria-label="Read terms of service"
                  >
                    <span>Read</span>
                    <Image src={export2} height={16} width={16} alt="export" />
                  </button>
                </div>
                <div className="w-full">
                  {checked ? (
                    <PrimaryButton
                      shortcut=""
                      onClick={forward}
                      className="mt-4 cursor-pointer px-4 py-2 w-full text-white rounded-[10px] border-0"
                    >
                      I consent
                    </PrimaryButton>
                  ) : (
                    <button
                      className="bg-[#D3D3D3] w-full rounded-[10px] border-0 text-white p-[0.5rem] cursor-not-allowed"
                      disabled
                      aria-disabled="true"
                    >
                      I consent
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                className="grid gap-[1rem]"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
              >
                <motion.div
                  className="flex flex-row items-center justify-between"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">
                    <motion.span layoutId="modal-title">
                      {progress > 4 ? (
                        <div className="flex items-center justify-center gap-[0.3rem]">
                          <div>You are ready</div>
                          <ThumbsUp className="lg:text-[18px] text-[15px] font-[600] cursor-pointer" />
                        </div>
                      ) : (
                        <div>Setting up your account</div>
                      )}
                    </motion.span>
                  </Dialog.Title>
                  <Image
                    src={close}
                    width={30}
                    height={30}
                    alt="close"
                    className="cursor-pointer"
                    onClick={closefunction}
                  />
                </motion.div>

                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-[1rem]"
                >
                  {checklist.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-[1rem]"
                      variants={fadeInVariants}
                    >
                      <Image
                        src={progress > index ? green : yellow}
                        width={20}
                        height={20}
                        alt={progress > index ? "completed" : "in progress"}
                        className="transition-all duration-300"
                      />
                      <p
                        className={`text-[16px] ${
                          progress > index
                            ? "text-green-600 font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {progress > 4 && (
                  <motion.button
                    className="flex items-center left-[50%] lg:left-[65%] relative"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    aria-label="Download QR code"
                  >
                    <Image src={image5} width={20} height={20} alt="import" />
                    <h3 className="text-[#8D8D8D] cursor-pointer text-[16px]">
                      Download QR code
                    </h3>
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default Modals;
