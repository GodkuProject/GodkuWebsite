"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Youtube, Download, Menu as MenuIcon } from "lucide-react";

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

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
  { href: "/mod-menu", label: "Mod Menu" },
  { href: "/farmbot", label: "Farmbot" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-dark-main/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-dbz-orange/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/GodkuWebsite/images/logo.png"
                alt="Godku Logo"
                width={38}
                height={38}
                className="rounded-full relative ring-1 ring-white/10"
              />
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-white to-dbz-orange text-transparent bg-clip-text tracking-tight">
              Godku Project
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-dbz-orange to-dbz-yellow"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="https://ko-fi.com/darklaser38"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dbz-orange/90 hover:bg-dbz-orange text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-glow-orange hover:-translate-y-0.5 border border-white/10"
          >
            Donate
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white/[0.04] hover:bg-dbz-blue/20 border border-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all">
              Community
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-light/95 backdrop-blur-xl border border-white/10 text-white">
              <DropdownMenuLabel className="text-white/50 text-xs uppercase tracking-widest">Join Us</DropdownMenuLabel>
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

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-dbz-blue/20 transition-colors mr-1">
                <MenuIcon size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-dark-main/98 backdrop-blur-xl border-l border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-left font-display text-2xl bg-gradient-to-r from-white to-dbz-orange text-transparent bg-clip-text">
                  Godku Project
                </SheetTitle>
                <SheetDescription className="text-left text-white/50">
                  The Greatest Dragon Ball Legends Mod
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="p-3 rounded-lg hover:bg-white/[0.06] transition-colors flex items-center text-white/85"
                  >
                    {link.href === "/download" && <Download size={18} className="mr-3" />}
                    <span>{link.label}</span>
                  </Link>
                ))}

                <div className="h-px bg-white/10 my-2" />

                <a
                  href="https://ko-fi.com/darklaser38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dbz-orange hover:bg-dbz-orangeLight transition-colors flex justify-center font-semibold"
                >
                  Donate
                </a>

                <div className="h-px bg-white/10 my-2" />

                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em] px-1">Join Our Community</h3>

                <div className="flex justify-between space-x-3 mt-2">
                  <a
                    href="https://www.discord.gg/godkuproject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-dbz-blue/20 flex justify-center items-center transition-colors"
                  >
                    <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={22} height={22} />
                  </a>
                  <a
                    href="https://www.youtube.com/@GodkuProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-dbz-blue/20 flex justify-center items-center transition-colors"
                  >
                    <Youtube size={22} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@godkuprojectreborn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-dbz-blue/20 flex justify-center items-center transition-colors"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
