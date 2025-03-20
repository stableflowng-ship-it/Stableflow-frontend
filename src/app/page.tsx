'use client'
import React from "react";
import Image from "next/image";
import logo from '../assests/image1.png'
import twit from '../assests/x-logo.png'
import git from '../assests/warpcast-logo.svg'
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { useRouter } from "next/navigation";
import Head from "next/head";

// Structured data for the homepage
const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Flow Payments',
  url: 'https://flow.com',
  potentialAction: {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': 'https://flow.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  sameAs: [
    'https://twitter.com/flowpayments',
    'https://warpcast.com/flowpayments',
  ],
};

// Business information structured data
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Flow Payments',
  description: 'Cryptocurrency payment processing service with instant cash settlements',
  url: 'https://flow.com',
  logo: 'https://flow.com/logo.png',
  serviceType: 'Cryptocurrency Payment Processing',
  slogan: 'Crypto accepted. Cash delivered. Everyone smiles.',
  areaServed: 'Worldwide',
  offers: {
    '@type': 'Offer',
    name: 'Cryptocurrency Payment Processing',
    description: 'Accept cryptocurrency payments and receive cash settlements instantly',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Payment Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instant Settlements',
          description: 'Receive cash instantly when customers pay with cryptocurrency',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Payment Kit',
          description: 'Complete solution for accepting and managing cryptocurrency payments',
        }
      }
    ]
  }
};

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/onboarding");
  };
  return (
    <>
      <Head>
        <title>Flow - Accept Crypto, Get Cash Instantly</title>
        <meta name="description" content="Unlock crypto liquidity for your business effortlessly and receive cash instantly. No waiting time. No reconciliation." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flow.com" />
        <meta property="og:title" content="Flow - Accept Crypto, Get Cash Instantly" />
        <meta property="og:description" content="Unlock crypto liquidity for your business effortlessly and receive cash instantly. No waiting time. No reconciliation." />
        <meta property="og:image" content="https://flow.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flow - Accept Crypto, Get Cash Instantly" />
        <meta name="twitter:description" content="Unlock crypto liquidity for your business effortlessly and receive cash instantly. No waiting time. No reconciliation." />
        <meta name="twitter:image" content="https://flow.com/twitter-image.jpg" />
        
        {/* Add custom structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </Head>
      
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
      <div 
        className="grid pt-[10%] overflow-hidden justify-center gap-[4rem] items-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/image3.svg')", backgroundPosition: "center" }}
        role="main"
        aria-labelledby="main-heading"
      >
        <div className="flex justify-between px-[2rem] lg:px-0 items-center">
          <Image 
            src={logo}
            alt="Flow logo"
            width={175}
            height={38}
            className="lg:w-[175px] lg:h-[38px] w-[120px] h-[25px]"
            priority
            loading="eager"
            sizes="(max-width: 640px) 120px, 175px"
          />
          <div className="flex flex-row gap-[1rem]">
            <Image
              src={git}
              alt="Warpcast social media"
              width={24}
              height={24}
              className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] cursor-pointer"
            />
            <Image
              src={twit}
              alt="X (Twitter) social media"
              width={24}
              height={24}
              className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-baseline gap-[1rem]">
          <h1 id="main-heading" className="lg:text-[37px] text-[25px] font-[600]">
            Crypto <span className="bg-gradient-to-r from-[#4FA6FF] to-[#5553F6] bg-clip-text text-transparent glow-text">accepted.</span> Cash delivered.<span className="text-[#909090]"> <br></br> Everyone </span> <span className="text-[#FFB767]">{';)'}</span> <span className="text-[#909090]">smiles.</span>
          </h1>
          <h2 className="font-[400] text-center lg:px-0 px-[0.5rem] lg:text-start text-[15px] lg:text-[18px] text-[#24292E]">
            Unlock crypto liquidity for your business effortlessly and receive<br></br> cash instantly. No waiting time. No reconciliation.
          </h2>
        </div>
        <div className="flex flex-col gap-[16px] w-full items-left justify-left">
          <div className="flex flex-row items-center gap-[12px]">
            <PrimaryButton className="cursor-pointer" onClick={handleClick} aria-label="Start accepting crypto payments">
              <h3 className="text-[#FFFFFF] font-[600] mr-[0.5rem] text-[16px]">Start accepting</h3>
            </PrimaryButton>
            <SecondaryButton className="cursor-pointer" aria-label="Apply for payments kit">
              <h3 className="text-black font-[600] mr-[0.5rem] text-[14px] lg:text-[16px]">Apply for payments kit</h3>
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