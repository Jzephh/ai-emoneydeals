import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next"
import GaProvider from "./ga-provider";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import LoadingScreen from "@/components/LoadingScreen";
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "VIP Free Trial – eMoney Reselling",
  description: "Start your free trial. Cancel anytime.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} min-h-dvh bg-white text-gray-900 antialiased font-sans`}>
        {/* Header with logo */}
        <header className="bg-[var(--color-brand-purple)]  px-4 py-3">
        <nav className="sticky">
            <div className="max-w-[1470px] mx-auto flex items-center justify-between">
                <Link href="/" className="cursor-pointer flex items-center gap-3">
                    <Image 
                        src="/logo.jpeg" 
                        alt="EMONEY Free Trial Logo" 
                        width={40} 
                        height={40} 
                        className="rounded-lg"
                    />
                    <span className="font-heading font-bold tracking-wide text-white text-lg">EMONEY Free Trial</span>
                </Link>
                
            </div>
        </nav>
        </header>
        
        <Suspense fallback={<LoadingScreen />}>
          {children}
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Z4EJZTQJCT'} /> 
          <GaProvider />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
