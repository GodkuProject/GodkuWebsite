import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godku Project — Revamped",
  description: "A calm cyan-accented landing page inspired by Godku Project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased dark">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/8 border-b border-white/10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link className="font-semibold tracking-tight text-white" href="/">Godku Project</Link>
            <nav className="hidden md:flex items-center gap-6 text-white/80">
              <Link className="hover:text-white transition-colors" href="/">Home</Link>
              <a className="hover:text-white transition-colors" href="#download">Download</a>
              <a className="hover:text-white transition-colors" href="#documentation">Documentation</a>
              <a className="hover:text-white transition-colors" target="_blank" rel="noreferrer" href="https://discord.gg/godkuproject">Community</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#download">
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-black" style={{ backgroundColor: "#00FFFF", boxShadow: "0 0 18px rgba(0,255,255,0.35)" }}>Download</button>
              </a>
            </div>
            {/* Mobile menu button */}
            <input type="checkbox" id="mobile-menu-toggle" className="peer md:hidden hidden" />
            <label htmlFor="mobile-menu-toggle" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white/90 hover:text-white hover:bg-white/10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 5.25c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 5.25c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </label>
          </div>
          {/* Mobile panel */}
          <div className="md:hidden max-h-0 overflow-hidden peer-checked:max-h-96 transition-[max-height] duration-300 ease-in-out">
            <div className="px-4 pb-4 pt-2 border-t border-white/10 bg-white/5">
              <div className="flex flex-col gap-3 text-white/90">
                <Link className="hover:text-white transition-colors" href="/">Home</Link>
                <a className="hover:text-white transition-colors" href="#download">Download</a>
                <a className="hover:text-white transition-colors" href="#documentation">Documentation</a>
                <a className="hover:text-white transition-colors" target="_blank" rel="noreferrer" href="https://discord.gg/godkuproject">Community</a>
                <a href="#download" className="pt-1">
                  <button className="w-full px-4 py-2 rounded-lg text-sm font-medium text-black" style={{ backgroundColor: "#00FFFF", boxShadow: "0 0 16px rgba(0,255,255,0.3)" }}>Download</button>
                </a>
              </div>
            </div>
          </div>
        </header>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
