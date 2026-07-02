"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Apple } from "lucide-react";

type ModItem = { title: string; desc?: string };
type ModCategory = { title: string; items: ModItem[] };
type QA = { q: string; a: string };

const androidCategories: ModCategory[] = [
  {
    title: "PVE Mods",
    items: [
      { title: "One Hit Ko" },
      { title: "God Mode" },
      { title: "Damage Multiplier" },
      { title: "Defense Multiplier" },
      { title: "Infinite Rush", desc: "Let you use your rush an unlimited amount of time." },
      { title: "Fast Rush", desc: "Will give a dragon ball on the first 7 cards." },
      { title: "Instant Button", desc: "Let you instantly and an unlimited amount of time use the unique action button (fusion, special beam cannon, death beam, sword of hope...)." },
      { title: "Red Artboost", desc: "Will make all your attacks have the red artboost damage boost." },
      { title: "Instant Win" },
      { title: "Mission Farm", desc: "Let you complete any missions like KO 100 characters, KO 100 purple characters, KO 100 Goku characters, use 100 strike cards, etc. in one match. (Doesn't work for PVP missions, will make you lose your match.)" },
      { title: "All Challenge" },
      { title: "Stupid AI" },
      { title: "Always Crits" },
      { title: "Freeze Time" },
      { title: "Infinite Vanish" },
      { title: "Infinite Swap" },
      { title: "Infinite Ki" },
      { title: "Infinite Card" },
    ],
  },
  {
    title: "PVP & Visual Mods",
    items: [
      { title: "Auto Clash Win", desc: "Will always make you win your strike or blue card clashes. Wait for your opponent to declare their score and the mod will return a higher score. Click first and the mod will return a score of 999." },
      { title: "Only Bot", desc: "Make you only face bots. (Doesn't work above rank 60.)" },
      { title: "Only Players", desc: "Opposite of Only Bot." },
      { title: "Raid Mode", desc: "Put your equipment limit at 10,000 and your friend rematch limit at 1,000 for longer raid or co-op farm sessions." },
      { title: "Animation Level", desc: "Give you higher rarity animations in your summons (does not affect your luck)." },
      { title: "Dark Character", desc: "Give your characters different levels or dark ki auras." },
      { title: "Premium Pass", desc: "Make your account look like it has the premium pass." },
      { title: "View Card", desc: "Let you see what the next card you will draw is." },
      { title: "Zenkai Sleeve", desc: "Give you all zenkai character sleeves." },
      { title: "All Shallot", desc: "Make all characters look like Shallot." },
      { title: "FOV", desc: "Change the game camera field of view." },
      { title: "God Rank", desc: "Make your account look like it's in godly rank." },
      { title: "God Stars" },
    ],
  },
  {
    title: "Misc Mods",
    items: [
      { title: "Speedhack" },
      { title: "Remove HUD", desc: "Remove the battle HUD." },
      { title: "Display FPS" },
      { title: "Change Costume", desc: "Let you change Shallot's costume to an unobtainable costume." },
      { title: "Change Form", desc: "Let you use forms you haven't unlocked yet." },
      { title: "Change Stage", desc: "Choose which stages you will have in battle." },
    ],
  },
  {
    title: "Character Mods",
    items: [
      { title: "14 Stars" },
      { title: "Zenkai 7" },
      { title: "Artboost 99" },
      { title: "Level 9999" },
      { title: "Godly Equip", desc: "Make all your equipment godly (usable in PVP)." },
      { title: "Ultimate Equip", desc: "Make all your equipment insanely broken." },
      { title: "Team Limit", desc: "Let you bring all your characters into a battle." },
      { title: "Unique Gauge", desc: "Infinite unique gauge filling." },
      { title: "Supporter Lv99" },
      { title: "All Character", desc: "Unlock all characters. (Works only in PVE and friendly.)" },
      { title: "Equipment", desc: "Give yourself any equipment you want. (Works in PVP.)" },
    ],
  },
  {
    title: "Other Mods",
    items: [
      { title: "Skip Tutorial", desc: "Will skip the tutorial on both client and server. No toggles needed." },
    ],
  },
  {
    title: "Other Features",
    items: [
      { title: "Integrated Updates", desc: "No need for an APK update (unless the game update or changes to the APK were made). Everything will be done inside the game — just restart after download and the mod is updated." },
      { title: "No Overlay Permissions Needed" },
    ],
  },
];

const androidQA: QA[] = [
  {
    q: "What's the difference between Classic and Clone?",
    a: "Classic: needs to uninstall the original game to install, but will have access to the shop.\n\nClone: can be installed without uninstalling the original game, but will not have access to the shop.",
  },
  {
    q: "Character customization mods are missing, where are they?",
    a: "3.0 is currently in an alpha state. Some planned features are not done yet and will be released later in future updates.",
  },
  {
    q: "What mods can I use in PVP?",
    a: "Every mod in the PVP section can be used. Godly Equip and the equipment unlocker can also be used in PVP.",
  },
];

const iosCategories: ModCategory[] = [
  {
    title: "Base Version",
    items: [
      { title: "File Sharing Enabled", desc: "You can access the files needed by Godku in order to do injection." },
    ],
  },
  {
    title: "Injection Version",
    items: [
      { title: "Base Version Features" },
      { title: "14 Stars, Zenkai 7, and All Challenge Complete" },
    ],
  },
  {
    title: "Instant Win Version",
    items: [
      { title: "Base Version Features" },
      { title: "Instant Win and All Challenge Complete" },
    ],
  },
];

const iosQA: QA[] = [
  {
    q: "Is there a mod menu for iOS?",
    a: "There was a Godku mod menu before, but it was discontinued as we weren't able to make it work properly. Godku will only provide the 3 IPAs and the Discord bot for iOS modding from now on.",
  },
  {
    q: "How do I install the IPA?",
    a: "You can find how to install an IPA in the tutorials channel on Discord.",
  },
  {
    q: "How do I use @Godku on iOS?",
    a: "Same as installing the IPA — you can find a video walkthrough in the tutorials channel on Discord.",
  },
];

export default function ModMenuPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [platform, setPlatform] = useState<"android" | "ios">("android");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categories = platform === "android" ? androidCategories : iosCategories;
  const qa = platform === "android" ? androidQA : iosQA;

  return (
    <>
      <Header />

      <main className="pt-20 relative">
        <div className="grid-pattern absolute inset-0 w-full h-full pointer-events-none" />

        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-dbz-blue/20 to-transparent opacity-50 blur-xl pointer-events-none" />
            </motion.div>

            <motion.div
              className="text-center mb-10 max-w-3xl mx-auto"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <p className="section-label mb-3">What's Inside</p>
              <h1 className="text-3xl md:text-4xl font-display font-bold gradient-heading mb-6">
                Mod Menu Features
              </h1>
              <p className="text-white/60 text-lg">
                Everything the Godku Project mod menu can do, broken down by platform.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <button
                onClick={() => setPlatform("android")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all border ${
                  platform === "android"
                    ? "bg-dbz-orange/90 border-white/10 text-white shadow-glow-orange"
                    : "bg-white/[0.04] border-white/10 text-white/60 hover:text-white hover:bg-dbz-blue/20"
                }`}
              >
                <Smartphone size={16} />
                Android
              </button>
              <button
                onClick={() => setPlatform("ios")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all border ${
                  platform === "ios"
                    ? "bg-dbz-blue/90 border-white/10 text-white shadow-glow-blue"
                    : "bg-white/[0.04] border-white/10 text-white/60 hover:text-white hover:bg-dbz-blue/20"
                }`}
              >
                <Apple size={16} />
                iOS
              </button>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={platform}
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {platform === "ios" && (
                  <div className="glass p-6 md:p-8 mb-8 text-center border border-dbz-blue/30">
                    <p className="text-white/80 mb-4">
                      Want a full mod menu experience on iOS? Godku's mod menu for iOS is discontinued, but
                      our partner server still supports iOS modding.
                    </p>
                    <a
                      href="https://discord.gg/kxr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary inline-flex items-center gap-2"
                    >
                      Join KXR Server
                    </a>
                  </div>
                )}

                <div className="space-y-6">
                  {categories.map((category) => (
                    <div key={category.title} className="glass p-6 md:p-8">
                      <h2 className="text-2xl font-display font-bold mb-5 bg-gradient-to-r from-white to-dbz-orange bg-clip-text text-transparent">
                        {category.title}
                      </h2>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                        {category.items.map((mod) => (
                          <li key={mod.title} className="text-white/75">
                            <span className="font-semibold text-white">{mod.title}</span>
                            {mod.desc && <p className="text-white/55 text-sm mt-1 leading-relaxed">{mod.desc}</p>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="glass p-6 md:p-8 mt-6">
                  <h2 className="text-2xl font-display font-bold mb-5 bg-gradient-to-r from-white to-dbz-yellow bg-clip-text text-transparent">
                    Q&amp;A
                  </h2>
                  <div className="space-y-6">
                    {qa.map((entry) => (
                      <div key={entry.q}>
                        <h3 className="text-white font-semibold mb-1">{entry.q}</h3>
                        {entry.a.split("\n\n").map((paragraph) => (
                          <p key={paragraph} className="text-white/60 text-sm leading-relaxed mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-10">
                  <Link href="/download">
                    <button className="button-primary px-8 py-3">Download Now</button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <footer className="py-12 bg-dark-dark border-t border-white/[0.06] mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <Image
                  src="/GodkuWebsite/images/logo.png"
                  alt="Godku Logo"
                  width={30}
                  height={30}
                  className="mr-2 rounded-full"
                />
                <span className="font-display text-lg font-semibold text-white">Godku Project</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
                <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
                  Home
                </Link>
                <Link href="/download" className="text-white/60 hover:text-white text-sm transition-colors">
                  Download
                </Link>
                <Link href="/farmbot" className="text-white/60 hover:text-white text-sm transition-colors">
                  Farmbot
                </Link>
                <Link href="/documentation" className="text-white/60 hover:text-white text-sm transition-colors">
                  Godku Policy
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://www.discord.gg/godkuproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={24} height={24} />
                </a>
                <a
                  href="https://www.youtube.com/@GodkuProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@godkuprojectreborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="divider-fade mt-10 mb-8" />
            <p className="text-center text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Godku Project. Created by Darklaser38 and TheOnlyJon (With some help of Rez). All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
