'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../assests/image1.png';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { TertiaryButton } from '@/components/tertiary-button';

// Utility function to combine classNames
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export default function AuthPage() {
  // States
  const [email, setEmail] = useState('');
  const [isPrimaryPressed, setIsPrimaryPressed] = useState(false);
  const [isSecondaryPressed, setIsSecondaryPressed] = useState(false);
  const [authState, setAuthState] = useState<'email' | 'otp'>('email');
  const router = useRouter();
  
  // OTP States
  const [verificationState, setVerificationState] = useState<'initial' | 'verifying' | 'error'>('initial');
  const [countdown, setCountdown] = useState(10);
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [shake, setShake] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  // Reset countdown when needed
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Send the actual email and transition to OTP verification
    setAuthState('otp');
    // Focus the first OTP input after transition
    setTimeout(() => {
      if (inputRefs[0].current) {
        inputRefs[0].current.focus();
      }
    }, 300);
  };
  
  const handleGoBack = () => {
    if (authState === 'otp') {
      setAuthState('email');
      setVerificationState('initial');
      setOtpValues(['', '', '', '']);
    } else {
      console.log('Go back clicked');
      router.push('/');
    }
  };
  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      if (value && index < 3 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0 && inputRefs[index - 1].current) {
      inputRefs[index - 1].current?.focus();
    }
  };
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Check if pasted content is numeric and has proper length
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("").slice(0, 4);
      const newOtpValues = [...otpValues];

      digits.forEach((digit, index) => {
        if (index < 4) newOtpValues[index] = digit;
      });

      setOtpValues(newOtpValues);

      // Focus last filled input or the next empty one
      const lastIndex = Math.min(digits.length, 3);
      if (inputRefs[lastIndex].current) {
        inputRefs[lastIndex].current.focus();
      }
    }
  };

  // Verify OTP
  const verifyOTP = () => {
    // Check if all fields are filled
    if (otpValues.every((val) => val !== "")) {
      setVerificationState("verifying");

      // Simulate verification process
      setTimeout(() => {
        // For demo - alternate between success and error
        if (otpValues.join("") === "2222") {
          // Redirect to dashboard on success
          router.push('/dashboard');
        } else {
          setVerificationState("error");
          setShake(true);
          setTimeout(() => setShake(false), 500);
        }
      }, 1500);
    }
  };

  // Handle resend
  const handleResend = () => {
    setCountdown(10);
    setOtpValues(['', '', '', '']);
    setVerificationState('initial');
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  };

  const getHeadingText = () => {
    switch (verificationState) {
      case "initial":
        return "Do you own this email? 🤔";
      case "verifying":
        return "We are confirming that 😉, take a chill pill";
      case "error":
        return "Hmm🧐, seems you entered the wrong code";
      default:
        return "Do you own this email? 🤔";
    }
  };

  const getSubtitleText = () => {
    switch (verificationState) {
      case "initial":
        return (
          <>
            If yes, verify the OTP code we sent to{' '}
            <span className="text-black font-medium">{email}</span>
          </>
        );
      case "verifying":
        return "Do you know 65% said they would like to make payments using crypto";
      case "error":
        return "Verify that the code sent was the one inputted";
      default:
        return (
          <>
            If yes, verify the OTP code we sent to{' '}
            <span className="text-black font-medium">{email}</span>
          </>
        );
    }
  };

  const getButtonText = () => {
    switch (verificationState) {
      case "initial":
        return "Verify";
      case "verifying":
        return "Verifying";
      case "error":
        return "Re-verify";
      default:
        return "Verify";
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('/image3.svg')",
        backgroundColor: "#f7f7f7",
        backgroundSize: "1016px 465px" 
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={authState}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-start gap-6 w-full max-w-md mx-auto"
        >
          {/* Logo */}
          <div className="flex flex-row justify-start items-center w-full">
            <Image 
              src={logo}
              alt="logo"
              width={135}
              height={26}
              className="w-[135px] h-[26px]"
              priority
            />
          </div>
          
          {authState === 'email' ? (
            /* Email Input Section */
            <div className="flex flex-col gap-6 w-full">
              {/* Heading - with specific line break */}
              <div className="flex flex-col gap-4 w-full">
                <h1 className="text-[28px] font-semibold leading-tight">
                  Just your <span className="text-gray-400">email address</span> and<br/>
                  start accepting <span className="text-blue-500">crypto</span> 💸
                </h1>
              </div>
              
              {/* Email Input */}
              <div className="w-full">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full h-11 px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    required
                  />
                </form>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-row gap-4 justify-start items-center">
                {/* Secondary Button (Go Back) */}
                <div 
                  className="flex flex-col items-start p-0.5 bg-white shadow-sm rounded-xl transition-all duration-200"
                  style={{
                    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <button
                    className={cn(
                      "flex flex-row justify-center items-center px-4 py-2 gap-2 rounded-lg transition-all duration-200",
                      isSecondaryPressed ? 'transform scale-95' : 'hover:bg-gray-50'
                    )}
                    style={{
                      background: isSecondaryPressed 
                        ? 'linear-gradient(180deg, rgba(200, 200, 200, 0.4) 0%, rgba(220, 220, 220, 0.2) 100%), #FFFFFF'
                        : 'linear-gradient(180deg, rgba(215, 215, 215, 0.25) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
                      boxShadow: isSecondaryPressed
                        ? 'inset 0px 0px 4px rgba(168, 168, 168, 0.4)'
                        : 'inset 0px 0px 2.5px rgba(168, 168, 168, 0.25)'
                    }}
                    onMouseDown={() => setIsSecondaryPressed(true)}
                    onMouseUp={() => setIsSecondaryPressed(false)}
                    onMouseLeave={() => setIsSecondaryPressed(false)}
                    onClick={handleGoBack}
                  >
                    <span 
                      className={`text-base font-medium text-center flex items-center transition-colors duration-200 ${
                        isSecondaryPressed ? 'text-gray-700' : 'text-gray-900'
                      }`}
                    >
                      Go back
                    </span>
                  </button>
                </div>
                
                {/* Primary Button (Continue) */}
                <button
                  className={cn(
                    "relative inline-flex items-center justify-center whitespace-nowrap",
                    "px-4 py-2",
                    "text-white text-base font-semibold",
                    "rounded-lg",
                    "shadow-md transition duration-200",
                    "disabled:opacity-50 disabled:pointer-events-none",
                    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  )}
                  style={{
                    background: 'linear-gradient(135deg, #1F90FF 0%, #504CF6 100%)',
                    boxShadow: '0px 1px 2px rgba(30, 144, 255, 0.65)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onClick={handleSubmit}
                  onMouseDown={() => setIsPrimaryPressed(true)}
                  onMouseUp={() => setIsPrimaryPressed(false)}
                  onMouseLeave={() => setIsPrimaryPressed(false)}
                >
                  {/* Base overlay gradient with opacity */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-200"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)',
                      pointerEvents: 'none',
                      borderRadius: '10px',
                    }}
                  />
                  
                  {/* Hover overlay - only visible on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
                      pointerEvents: 'none',
                      borderRadius: '10px',
                    }}
                  />
                  
                  {/* Active/Clicked overlay - only visible when active */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-100 ${isPrimaryPressed ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 72, 128, 0.3) 0%, rgba(50, 48, 155, 0.3) 100%)',
                      pointerEvents: 'none',
                      borderRadius: '10px',
                    }}
                  />
                  
                  <div className="relative z-10 flex items-center gap-2">
                    Continue
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            /* OTP Verification Section */
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={verificationState + "heading"}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[28px] font-semibold leading-tight"
                    >
                      {getHeadingText()}
                    </motion.h3>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={verificationState + "subtitle"}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-base text-gray-500"
                    >
                      {getSubtitleText()}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <motion.div
                  className="flex gap-2"
                  animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {otpValues.map((value, index) => (
                    <motion.div
                      key={index}
                      className={`flex-1 h-16 rounded-lg ${index === 0 ? "rounded-l-3xl" : ""} ${index === 3 ? "rounded-r-3xl" : ""}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <input
                        ref={inputRefs[index]}
                        type="text"
                        inputMode="numeric"
                        value={verificationState === "verifying" ? "2" : value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        className={`w-full h-full text-center text-lg font-medium bg-white rounded-lg ${index === 0 ? "rounded-l-3xl" : ""} ${index === 3 ? "rounded-r-3xl" : ""} 
                          ${verificationState === "error" ? "border border-red-500" : inputRefs[index].current === document.activeElement ? "border border-blue-500 shadow-md shadow-blue-200" : "border border-gray-200"}
                          focus:outline-none focus:border-blue-500 focus:shadow-md focus:shadow-blue-200 transition-all duration-300`}
                        disabled={verificationState === "verifying"}
                        maxLength={1}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex flex-col gap-3">
                  <AnimatePresence mode="wait">
                    {verificationState === "error" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center gap-2 text-red-500 text-sm"
                      >
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✕</span>
                        </div>
                        <span>Incorrect OTP Code</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center gap-3">
                    {countdown > 0 && verificationState !== "verifying" ? (
                      <span className="text-sm">Resend code in{' '}
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={countdown}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="text-black inline-block"
                          >
                            {countdown}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-black">secs</span>
                      </span>
                    ) : (
                      <button
                        onClick={handleResend}
                        className={`${verificationState === "verifying" ? "" : "underline"} text-gray-500 text-sm`}
                        disabled={verificationState === "verifying"}
                      >
                        Resend
                      </button>
                    )}

                    <TertiaryButton className="ml-auto inline-flex items-center gap-1">
                      <span>Paste</span>
                    </TertiaryButton>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {/* Secondary Button (Go Back) */}
                <div 
                  className="flex flex-col items-start p-0.5 bg-white shadow-sm rounded-xl transition-all duration-200"
                  style={{
                    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <button
                    className={cn(
                      "flex flex-row justify-center items-center px-4 py-2 gap-2 rounded-lg transition-all duration-200",
                      isSecondaryPressed ? 'transform scale-95' : 'hover:bg-gray-50'
                    )}
                    style={{
                      background: isSecondaryPressed 
                        ? 'linear-gradient(180deg, rgba(200, 200, 200, 0.4) 0%, rgba(220, 220, 220, 0.2) 100%), #FFFFFF'
                        : 'linear-gradient(180deg, rgba(215, 215, 215, 0.25) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
                      boxShadow: isSecondaryPressed
                        ? 'inset 0px 0px 4px rgba(168, 168, 168, 0.4)'
                        : 'inset 0px 0px 2.5px rgba(168, 168, 168, 0.25)'
                    }}
                    onMouseDown={() => setIsSecondaryPressed(true)}
                    onMouseUp={() => setIsSecondaryPressed(false)}
                    onMouseLeave={() => setIsSecondaryPressed(false)}
                    onClick={handleGoBack}
                    disabled={verificationState === "verifying"}
                  >
                    <span 
                      className={`text-base font-medium text-center flex items-center transition-colors duration-200 ${
                        isSecondaryPressed ? 'text-gray-700' : 'text-gray-900'
                      }`}
                    >
                      Go back
                    </span>
                  </button>
                </div>
                
                {/* Primary Button (Verify) */}
                <button
                  onClick={verificationState === "verifying" ? () => {} : verifyOTP}
                  className={cn(
                    "relative inline-flex items-center justify-center whitespace-nowrap",
                    "px-4 py-2",
                    "text-white text-base font-semibold",
                    "rounded-lg",
                    "shadow-md transition duration-200",
                    "disabled:opacity-50 disabled:pointer-events-none",
                    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  )}
                  style={{
                    background: 'linear-gradient(135deg, #1F90FF 0%, #504CF6 100%)',
                    boxShadow: '0px 1px 2px rgba(30, 144, 255, 0.65)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  disabled={verificationState === "verifying" || !otpValues.every((val) => val !== "")}
                  onMouseDown={() => setIsPrimaryPressed(true)}
                  onMouseUp={() => setIsPrimaryPressed(false)}
                  onMouseLeave={() => setIsPrimaryPressed(false)}
                >
                  {/* Base overlay gradient with opacity */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-200"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)',
                      pointerEvents: 'none',
                      borderRadius: '10px',
                    }}
                  />
                  
                  {/* Hover overlay - only visible on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
                      pointerEvents: 'none',
                      borderRadius: '10px',
                    }}
                  />
                  
                  {/* Active/Clicked overlay - only visible when active */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-100 ${isPrimaryPressed ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 72, 128, 0.3) 0%, rgba(50, 48, 155, 0.3) 100%)',
                      pointerEvents: 'none',
                      borderRadius: '10px',
                    }}
                  />
                  
                  <div className="relative z-10 flex items-center gap-2">
                    {verificationState === "verifying" ? (
                      <div className="flex items-center gap-2">
                        <span>{getButtonText()}</span>
                        <div
                          className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-300 to-transparent animate-spin"
                          style={{ animationDuration: "1s" }}
                        ></div>
                      </div>
                    ) : (
                      getButtonText()
                    )}
                  </div>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 