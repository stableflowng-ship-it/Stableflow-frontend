import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ClientWrapper from './provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://flow.com'),
  title: {
    default: 'Flow - Cryptocurrency Payment Platform',
    template: '%s | Flow Payments'
  },
  description: 'Accept cryptocurrency payments for your business with our simple, secure platform. Easy integration, low fees, and instant settlements.',
  keywords: ['cryptocurrency', 'payments', 'crypto payments', 'blockchain', 'payment gateway', 'fintech'],
  authors: [{ name: 'Flow Payments' }],
  creator: 'Flow Payments',
  publisher: 'Flow Payments',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Social sharing metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flow.com',
    siteName: 'Flow Payments',
    title: 'Flow - Cryptocurrency Payment Platform',
    description: 'Accept cryptocurrency payments for your business with our simple, secure platform. Easy integration, low fees, and instant settlements.',
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
    card: 'summary_large_image',
    site: '@flowpayments',
    creator: '@flowpayments',
    title: 'Flow - Cryptocurrency Payment Platform',
    description: 'Accept cryptocurrency payments for your business with our simple, secure platform.',
    images: ['https://flow.com/twitter-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://flow.com',
    languages: {
      'en-US': 'https://flow.com',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
