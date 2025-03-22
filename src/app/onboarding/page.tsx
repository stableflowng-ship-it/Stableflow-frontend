'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import logo from '../../assests/image1.png';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { TertiaryButton } from '@/components/tertiary-button';
import { cn } from '@/lib/utils';
import Head from 'next/head';

// Animation variants for reuse
const fadeInOut = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 }
};

const errorAnimation = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
  transition: { duration: 0.3 }
};

// SEO configuration
const SEO = {
  title: 'Flow - Get Started with Crypto Payments',
  description: 'Verify your email and start accepting cryptocurrency payments for your business. Secure, fast, and easy onboarding process.',
  canonical: 'https://flow.com/onboarding',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flow.com/onboarding',
    site_name: 'Flow Payments',
    title: 'Flow - Crypto Payment Gateway',
    description: 'Accept cryptocurrency payments for your business with our simple, secure platform. Onboard in minutes.',
    images: [
      {
        url: 'https://flow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flow Payment Platform',
      },
    ],
  },
  twitter: {
    handle: '@flowpayments',
    site: '@flowpayments',
    cardType: 'summary_large_image',
  },
};

export default function AuthPage() {
  // States
  const [email, setEmail] = useState('');
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
  
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
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
  }, [email, inputRefs]);
  
  const handleGoBack = useCallback(() => {
    if (authState === 'otp') {
      setAuthState('email');
      setVerificationState('initial');
      setOtpValues(['', '', '', '']);
    } else {
      console.log('Go back clicked');
      router.push('/');
    }
  }, [authState, router]);
  
  const handleChange = useCallback((index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      if (value && index < 3 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current?.focus();
      }
    }
  }, [otpValues, inputRefs]);
  
  const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0 && inputRefs[index - 1].current) {
      inputRefs[index - 1].current?.focus();
    }
  }, [otpValues, inputRefs]);
  
  const handlePaste = useCallback((e: React.ClipboardEvent) => {
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
  }, [otpValues, inputRefs]);

  // Verify OTP
  const verifyOTP = useCallback(() => {
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
  }, [otpValues, router]);

  // Handle resend
  const handleResend = useCallback(() => {
    setCountdown(10);
    setOtpValues(['', '', '', '']);
    setVerificationState('initial');
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, [inputRefs]);

  // Text values memoized for performance
  const headingText = useMemo(() => {
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
  }, [verificationState]);

  const subtitleText = useMemo(() => {
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
  }, [verificationState, email]);

  const buttonText = useMemo(() => {
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
  }, [verificationState]);

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SEO.title,
    description: SEO.description,
    url: SEO.canonical,
    potentialAction: {
      '@type': 'RegisterAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://flow.com/onboarding',
        actionPlatform: 'https://schema.org/DesktopWebPlatform',
      },
      result: {
        '@type': 'BusinessRegistration',
        serviceOutput: {
          '@type': 'Service',
          serviceType: 'Cryptocurrency Payment Processing',
        },
      },
    },
  };

  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SEO.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={SEO.openGraph.type} />
        <meta property="og:url" content={SEO.openGraph.url} />
        <meta property="og:title" content={SEO.openGraph.title} />
        <meta property="og:description" content={SEO.openGraph.description} />
        <meta property="og:site_name" content={SEO.openGraph.site_name} />
        <meta property="og:image" content={SEO.openGraph.images[0].url} />
        <meta property="og:image:width" content={SEO.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={SEO.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={SEO.openGraph.images[0].alt} />
        <meta property="og:locale" content={SEO.openGraph.locale} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={SEO.twitter.cardType} />
        <meta name="twitter:site" content={SEO.twitter.site} />
        <meta name="twitter:creator" content={SEO.twitter.handle} />
        <meta name="twitter:title" content={SEO.openGraph.title} />
        <meta name="twitter:description" content={SEO.openGraph.description} />
        <meta name="twitter:image" content={SEO.openGraph.images[0].url} />
        
        {/* Additional SEO */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      
      <div 
        className="min-h-screen flex items-center justify-center p-4 bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/image3.svg')",
          backgroundColor: "#f7f7f7",
          backgroundSize: "1016px 465px" 
        }}
        role="main"
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
                alt="Flow logo"
                width={135}
                height={26}
                className="w-[135px] h-[26px]"
                priority
                loading="eager"
                sizes="135px"
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
                    <label htmlFor="email-input" className="text-sm font-medium text-gray-600 mb-2 block">Email address</label>
                    <div className="relative w-full mb-4">
                      <input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email address"
                        className="w-full h-12 px-4 rounded-md bg-white border border-gray-200 focus:border-blue-500 focus:outline-none"
                        required
                        aria-required="true"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className={cn(
                        "w-full flex justify-center items-center rounded-md px-4 py-3 transition-all",
                        email.trim() ? "bg-[#7579FF] text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      )}
                      disabled={!email.trim()}
                      aria-disabled={!email.trim()}
                    >
                      <span className="text-base font-medium">Continue</span>
                    </button>
                  </form>
                </div>
                
                {/* Footer Text */}
                <p className="text-sm text-gray-500 w-full text-center">
                  By continuing, you agree to our 
                  <button 
                    className="text-blue-600 ml-1 focus:outline-none focus:underline"
                    aria-label="View terms"
                  >
                    Terms
                  </button>
                </p>
              </div>
            ) : (
              /* OTP Verification Section */
              <motion.div 
                variants={fadeInOut}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-6 w-full"
              >
                <motion.button
                  onClick={handleGoBack}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Go back to previous step"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                
                <div className="flex flex-col gap-4 w-full">
                  <motion.h1 
                    key={`heading-${verificationState}`}
                    variants={fadeInOut}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-[28px] font-semibold leading-tight"
                  >
                    {headingText}
                  </motion.h1>
                  
                  <motion.p 
                    key={`subtitle-${verificationState}`}
                    variants={fadeInOut}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.1 }}
                    className="text-gray-500"
                  >
                    {subtitleText}
                  </motion.p>
                </div>
                
                {/* OTP Input */}
                <div className="w-full">
                  <div className="flex gap-3 mb-4">
                    {otpValues.map((value, index) => (
                      <div 
                        key={index} 
                        className={`relative flex-1 ${shake ? 'animate-shake' : ''}`}
                      >
                        <input
                          ref={inputRefs[index]}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={value}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          onPaste={index === 0 ? handlePaste : undefined}
                          className={cn(
                            "w-full aspect-square rounded-md text-center text-xl border bg-white",
                            verificationState === "error" 
                              ? "border-red-500 text-red-500" 
                              : "border-gray-200 focus:border-blue-500",
                            "outline-none"
                          )}
                          aria-label={`OTP digit ${index + 1}`}
                          aria-required="true"
                          aria-invalid={verificationState === "error" ? "true" : "false"}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {verificationState === "error" && (
                    <motion.div 
                      variants={errorAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col mb-4"
                      role="alert"
                      aria-live="assertive"
                    >
                      <div className="text-red-500 mb-3">Incorrect OTP code</div>
                      <div className="flex gap-3">
                        <button 
                          onClick={handleResend}
                          className="text-blue-500 font-medium"
                          disabled={countdown > 0}
                          aria-disabled={countdown > 0}
                        >
                          {countdown > 0 ? `Resend in ${countdown}s` : "Resend"}
                        </button>
                        
                        <TertiaryButton
                          className="ml-auto"
                          aria-label="Paste OTP code"
                          onClick={() => {
                            navigator.clipboard.readText().then(
                              (text) => {
                                const e = {
                                  preventDefault: () => {},
                                  clipboardData: {
                                    getData: () => text
                                  }
                                } as unknown as React.ClipboardEvent;
                                handlePaste(e);
                              }
                            );
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                            </svg>
                            <span>Paste</span>
                          </div>
                        </TertiaryButton>
                      </div>
                    </motion.div>
                  )}
                  
                  <button
                    onClick={verifyOTP}
                    disabled={!otpValues.every(Boolean) || verificationState === "verifying"}
                    className={cn(
                      "w-full flex justify-center items-center rounded-md px-4 py-3 transition-all",
                      !otpValues.every(Boolean) || verificationState === "verifying" 
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                        : "bg-[#7579FF] text-white"
                    )}
                    aria-disabled={!otpValues.every(Boolean) || verificationState === "verifying"}
                  >
                    {verificationState === "verifying" && (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    <span className="text-base font-medium">{buttonText}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
} 