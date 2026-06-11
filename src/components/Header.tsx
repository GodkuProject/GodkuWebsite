"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Youtube, Download, Menu as MenuIcon } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-dark-main/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Desktop Navigation */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/GodkuWebsite/images/logo.png"
              alt="Godku Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-dbz-orange text-transparent bg-clip-text">
              Godku Project
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/download" className="text-white/80 hover:text-white transition-colors">
              Download
            </Link>
            <Link href="/documentation" className="text-white/80 hover:text-white transition-colors">
              Godku Policy
            </Link>
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://ko-fi.com/darklaser38"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dbz-orange hover:bg-dbz-orangeLight text-white px-4 py-2 rounded-lg transition-all hover:shadow-[0_0_15px_rgba(255,89,0,0.5)] hover:-translate-y-0.5"
          >
            Donate
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="bg-dark-light hover:bg-dbz-blue/20 text-white px-4 py-2 rounded-lg transition-all">
              Community
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-light border border-white/10 text-white">
              <DropdownMenuLabel>Join Us</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem className="hover:bg-dbz-blue/20 cursor-pointer">
                <a
                  href="https://www.discord.gg/godkuproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 w-full"
                >
                  <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={20} height={20} />
                  <span>Discord Server</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-dbz-blue/20 cursor-pointer">
                <a
                  href="https://www.youtube.com/@GodkuProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 w-full"
                >
                  <Youtube size={18} />
                  <span>YouTube</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-dbz-blue/20 cursor-pointer">
                <a
                  href="https://www.tiktok.com/@godkuprojectreborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 w-full"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
                  </svg>
                  <span>TikTok</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2 rounded-lg bg-dark-light hover:bg-dbz-blue/20 transition-colors mr-1">
                <MenuIcon size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-dark-main border-l border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl bg-gradient-to-r from-white to-dbz-orange text-transparent bg-clip-text">
                  Godku Project
                </SheetTitle>
                <SheetDescription className="text-left text-white/60">
                  The Greatest Dragon Ball Legends Mod
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-4">
                <Link
                  href="/"
                  className="p-3 rounded-lg hover:bg-dark-light transition-colors flex items-center"
                >
                  <span>Home</span>
                </Link>
                <Link
                  href="/download"
                  className="p-3 rounded-lg hover:bg-dark-light transition-colors flex items-center"
                >
                  <Download size={18} className="mr-3" />
                  <span>Download</span>
                </Link>
                <Link
                  href="/documentation"
                  className="p-3 rounded-lg hover:bg-dark-light transition-colors flex items-center"
                >
                  <span>Godku Policy</span>
                </Link>

                <div className="h-px bg-white/10 my-2"></div>

                <a
                  href="https://ko-fi.com/darklaser38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dbz-orange hover:bg-dbz-orangeLight transition-colors flex justify-center"
                >
                  Donate
                </a>

                <div className="h-px bg-white/10 my-2"></div>

                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Join Our Community</h3>

                <div className="flex justify-between space-x-3 mt-2">
                  <a
                    href="https://www.discord.gg/godkuproject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-dark-light hover:bg-dbz-blue/20 flex justify-center items-center transition-colors"
                  >
                    <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={24} height={24} />
                  </a>
                  <a
                    href="https://www.youtube.com/@GodkuProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-dark-light hover:bg-dbz-blue/20 flex justify-center items-center transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@godkuprojectreborn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-dark-light hover:bg-dbz-blue/20 flex justify-center items-center transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
