"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const policySections = [
  {
    title: "Data Used",
    content:
      "Godku may process your Discord user ID, username, command messages, command attachments, and server membership or role information when you use the bot.",
  },
  {
    title: "Why Data Is Used",
    content:
      "This data is used to run requested bot commands, process uploaded save files, verify access to Godku Project features, and log command usage for moderation and support.",
  },
  {
    title: "Uploaded Files",
    content:
      "Uploaded files are processed only for the requested command. Do not send files to the bot if you do not want them processed.",
  },
  {
    title: "Message Content",
    content:
      "Godku uses message content only to detect and run prefix commands, read command arguments, and process attachments sent with commands.",
  },
  {
    title: "Storage",
    content:
      "Godku does not use message content or uploaded files to train machine learning or AI models.\n\nCommand usage logs may include your Discord user ID, username, and the command used. These logs are used for moderation, support, and abuse prevention.",
  },
  {
    title: "Opt-Out",
    content:
      "You can avoid message content processing by not sending commands or attachments to the bot. You can also remove the bot from a server or leave servers where the bot is installed.",
  },
  {
    title: "Contact",
    content:
      "For privacy questions, contact the Godku Project staff in the official Discord server.",
  },
];

export default function GodkuPolicyPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Header />

      <main className="pt-20 relative">
        <motion.div className="text-center mb-12 max-w-3xl mx-auto relative z-10" />

        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-dbz-blue/20 to-transparent opacity-50 blur-xl" />
            </motion.div>

            <motion.div
              className="text-center mb-12 max-w-3xl mx-auto"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold gradient-heading mb-6">
                Godku Privacy Policy
              </h1>
              <p className="text-white/60 text-lg">
                Godku processes only the information needed to provide its Discord bot features.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="glass p-6 md:p-8 mb-10">
                <div className="space-y-8">
                  {policySections.map((section) => (
                    <section key={section.title}>
                      <h2 className="text-2xl font-display font-bold mb-3 bg-gradient-to-r from-white to-dbz-yellow bg-clip-text text-transparent">
                        {section.title}
                      </h2>
                      {section.content.split("\n\n").map((paragraph) => (
                        <p key={paragraph} className="text-white/60 leading-relaxed mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </section>
                  ))}
                </div>
              </div>

              <Link
                href="/GodkuWebsite/documentation"
                className="flex items-center gap-2 text-white/80 hover:text-white mx-auto transition-colors w-fit"
              >
                <ChevronLeft size={18} />
                <span>Go Back</span>
              </Link>
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
            <p className="text-center text-white/40 text-sm">&copy; {new Date().getFullYear()} Godku Project. Created by Darklaser38 and TheOnlyJon (With some help of Rez). All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
