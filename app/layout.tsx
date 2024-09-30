import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Syne, Poppins } from "next/font/google";
import { ToastProvider } from '@/components/ui/toast';
import { ThemeProvider } from 'next-themes';
import { SolanaWalletProvider } from '@/components/providers/solana-wallet-provider';
import { InfoBar } from '@/components/ui/layout/info-bar';
import "./styles/globals.css";
import './styles/fonts.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "BARK BLINKS",
  description: "Solana Actions & Blinks dApp",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${syne.variable} ${poppins.variable} antialiased font-sans bg-gradient-to-b from-sand-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-sm min-h-screen flex flex-col">
            <SolanaWalletProvider>
              <ToastProvider>
                <InfoBar />
                <main className="flex-grow">{children}</main>
                <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} BARK Protocol. All rights reserved.
                </footer>
              </ToastProvider>
            </SolanaWalletProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}