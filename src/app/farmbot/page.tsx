"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Wallet,
  Swords,
  CalendarDays,
  Repeat,
  Users,
  Monitor,
  Smartphone,
  Ban,
  Bot as BotIcon,
} from "lucide-react";

type QA = { q: string; a: string };

const paymentMethods = ["Credit Card", "PayPal", "Discord Nitro", "CashApp"];

const pricingPlans = [
  { name: "Monthly", price: "$5", period: "/ month" },
  { name: "Yearly", price: "$50", period: "/ year" },
];

const capabilities = [
  {
    title: "Story Farm",
    description: "Completes all normal and hard story.",
    icon: <Swords className="w-6 h-6" />,
  },
  {
    title: "Event Farm",
    description: "Completes all events on normal, hard, and scream difficulty.",
    icon: <CalendarDays className="w-6 h-6" />,
  },
  {
    title: "Raid Farm",
    description: "Complete and loop the available raid using a battle bonus character for enhanced rewards.",
    icon: <Repeat className="w-6 h-6" />,
  },
  {
    title: "Multi-Account Farming",
    description: "Farm multiple accounts at once.",
    icon: <Users className="w-6 h-6" />,
  },
];

const generalQA: QA[] = [
  {
    q: "How can I pay?",
    a: "Credit Card, PayPal, Discord Nitro, or CashApp.",
  },
  {
    q: "Is there any account or device limit?",
    a: "There is no account limit.\n\nYou can only have 2 devices linked to your license. This means that upon login, the device will be registered and linked to your license. A third device slot is available for free, but you will need to ask to get it.",
  },
  {
    q: "How much does it cost?",
    a: "$5 for a month, or $50 for a year. Lifetime payment is not available.",
  },
  {
    q: "Where can I use the Farmbot?",
    a: "Windows, Linux, and Android are supported. iOS is not supported and never will be.",
  },
  {
    q: "Which accounts can the Farmbot farm?",
    a: "The Farmbot can farm both Android and iOS accounts.",
  },
  {
    q: "Is the Farmbot inside the game?",
    a: "No, the Farmbot is an external tool, which lets you farm in the background without having the game opened.",
  },
];

const faqItems: QA[] = [
  {
    q: "Android version interface looks cropped or not loading properly",
    a: "Just clear data and it should be back to normal.",
  },
  {
    q: "Is Raid or Co-op safe?",
    a: "Yes, it's safe because it has a built-in 15 second cooldown.",
  },
  {
    q: "Raid or Co-op doesn't work when I press on them",
    a: "Make sure you don't just press on the co-op or raid in the events tab and actually press on the | >_ | icon.\n\nYou need to clear parts of the story to unlock the raid or co-op.",
  },
  {
    q: "Claim does not work",
    a: "Claim option in the settings is just a placeholder for when it actually gets added.",
  },
  {
    q: "Instances are not all farming at the same speed",
    a: "Sometimes it can slow down because it got stuck in a check-alive loop. When this happens, the bot silently relogs — it's completely fine if they're not all on the same chapter or have the same farming speed.",
  },
  {
    q: "I can't login or download the data",
    a: "Download this app: one.one.one.one",
  },
];

export default function FarmbotPage() {
  const [isLoaded, setIsLoaded] = useState(false);

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
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-dbz-yellow/20 to-transparent opacity-50 blur-xl" />
            </motion.div>

            <motion.div
              className="text-center mb-14 max-w-3xl mx-auto"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <p className="section-label mb-3">Automate Your Grind</p>
              <h1 className="text-3xl md:text-4xl font-display font-bold gradient-heading mb-6">
                Farmbot
              </h1>
              <p className="text-white/60 text-lg">
                An external farming tool that plays Dragon Ball Legends for you — story, events, and raids,
                across multiple accounts, without ever opening the game.
              </p>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {capabilities.map((cap) => (
                <div key={cap.title} className="glass p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-dbz-yellow/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-4 text-dbz-yellow">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{cap.title}</h3>
                  <p className="text-white/55 text-sm">{cap.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Platform support */}
            <motion.div
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold mb-6 bg-gradient-to-r from-white to-dbz-yellow bg-clip-text text-transparent text-center">
                  Platform Support
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Monitor className="w-8 h-8 text-dbz-orange" />
                    <span className="text-white font-semibold">Windows</span>
                    <span className="text-white/50 text-sm">Supported</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Monitor className="w-8 h-8 text-dbz-orange" />
                    <span className="text-white font-semibold">Linux</span>
                    <span className="text-white/50 text-sm">Supported</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Smartphone className="w-8 h-8 text-dbz-orange" />
                    <span className="text-white font-semibold">Android</span>
                    <span className="text-white/50 text-sm">Supported</span>
                  </div>
                </div>
                <p className="text-white/50 text-sm text-center mt-6 flex items-center justify-center gap-2">
                  <Ban className="w-4 h-4 text-white/40" />
                  iOS is not supported to run the Farmbot, and never will be — but the Farmbot can still farm
                  Android and iOS accounts.
                </p>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              className="max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-display font-bold mb-6 text-center bg-gradient-to-r from-white to-dbz-yellow bg-clip-text text-transparent">
                Pricing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pricingPlans.map((plan) => (
                  <div key={plan.name} className="glass-card p-8 text-center">
                    <p className="text-white/50 text-sm uppercase tracking-widest mb-2">{plan.name}</p>
                    <p className="text-4xl font-display font-bold text-white mb-1">
                      {plan.price}
                      <span className="text-base text-white/50 font-normal">{plan.period}</span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm text-center mt-4">Lifetime payment is not available.</p>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2 text-sm text-white/70"
                  >
                    {method === "PayPal" || method === "CashApp" ? (
                      <Wallet className="w-4 h-4 text-dbz-yellow" />
                    ) : (
                      <CreditCard className="w-4 h-4 text-dbz-yellow" />
                    )}
                    {method}
                  </span>
                ))}
              </div>

              <div className="text-center mt-10">
                <a
                  href="https://discord.com/channels/1246530075885568050/1411385595548401755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary inline-flex items-center gap-2 px-8 py-3"
                >
                  <BotIcon size={18} />
                  Get the Farmbot
                </a>
              </div>
            </motion.div>

            {/* General Q&A */}
            <motion.div
              className="max-w-4xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold mb-6 bg-gradient-to-r from-white to-dbz-orange bg-clip-text text-transparent">
                  Farmbot Q&amp;A
                </h2>
                <div className="space-y-6">
                  {generalQA.map((entry) => (
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
            </motion.div>

            {/* FAQ / troubleshooting */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold mb-2 bg-gradient-to-r from-white to-dbz-blue bg-clip-text text-transparent">
                  Common Questions &amp; Issues — Farmbot 4.0
                </h2>
                <p className="text-white/50 text-sm mb-6">Troubleshooting tips for the current Farmbot version.</p>
                <div className="space-y-6">
                  {faqItems.map((entry) => (
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
            </motion.div>
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
                <Link href="/mod-menu" className="text-white/60 hover:text-white text-sm transition-colors">
                  Mod Menu
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
