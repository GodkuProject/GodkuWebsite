"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DownloadIcon, ChevronLeft, Shield, Smartphone, Zap } from "lucide-react";

export default function DownloadPage() {
  const [showAndroidButtons, setShowAndroidButtons] = useState(false);
  const [showIosButtons, setShowIosButtons] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleAndroidClick = () => {
    setShowAndroidButtons(true);
    setShowIosButtons(false);
  };

  const handleIosClick = () => {
    setShowIosButtons(true);
    setShowAndroidButtons(false);
  };

  const goBack = () => {
    setShowAndroidButtons(false);
    setShowIosButtons(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const benefits = [
    {
      title: "High Performance",
      description: "Optimized for smooth gameplay without lag or performance issues.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Easy Installation",
      description: "Simple installation process with clear step-by-step instructions.",
      icon: <DownloadIcon className="w-6 h-6" />,
    },
    {
      title: "Device Compatible",
      description: "Works on a wide range of devices with different specifications.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Safe & Secure",
      description: "Regular updates and secure implementation to protect your device.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-20 relative">
        {/* Grid Pattern Background */}
        <div className="grid-pattern absolute inset-0 w-full h-full pointer-events-none" />

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
              className="text-center mb-16 max-w-3xl mx-auto"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h1 className={`text-3xl md:text-4xl font-bold gradient-heading mb-6 ${showAndroidButtons || showIosButtons ? 'hidden' : ''}`}>
                Download Godku Project
              </h1>
              <p className={`text-white/70 text-lg mb-8 ${showAndroidButtons || showIosButtons ? 'hidden' : ''}`}>
                Choose your operating system to download the Godku Project mod and experience Dragon Ball Legends like never before.
              </p>
            </motion.div>

            <motion.h1
              className={`text-3xl md:text-4xl font-bold gradient-heading mb-6 text-center ${!showAndroidButtons ? 'hidden' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showAndroidButtons ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Android Downloads
            </motion.h1>

            <motion.h1
              className={`text-3xl md:text-4xl font-bold gradient-heading mb-6 text-center ${!showIosButtons ? 'hidden' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showIosButtons ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              iOS Downloads
            </motion.h1>

            <motion.div
              className={`flex flex-wrap justify-center gap-8 ${showAndroidButtons || showIosButtons ? 'hidden' : ''}`}
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <motion.div
                className="download-card group relative"
                variants={item}
                onClick={handleAndroidClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Image
                    src="/GodkuWebsite/images/android-icon.png"
                    alt="Android"
                    width={80}
                    height={80}
                    className="mb-6 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-dbz-orange text-transparent bg-clip-text">Android</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-dbz-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>

              <motion.div
                className="download-card group relative"
                variants={item}
                onClick={handleIosClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Image
                    src="/GodkuWebsite/images/ios-icon.png"
                    alt="iOS"
                    width={80}
                    height={80}
                    className="mb-6 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-dbz-blue text-transparent bg-clip-text">iOS</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-dbz-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            </motion.div>

            {/* Android Download Options */}
            <motion.div
              className={`max-w-xl mx-auto ${!showAndroidButtons ? 'hidden' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showAndroidButtons ? 1 : 0, y: showAndroidButtons ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Full_Version_6.14.0.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-orange/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-orange/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Full Version</h3>
                      <p className="text-white/60 text-sm">Complete mod with all features</p>
                    </div>
                  </div>
                  <span className="text-dbz-orange">Download</span>
                </a>

                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Full_Version_Japan_6.14.0.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-orange/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-orange/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Japan Full Version</h3>
                      <p className="text-white/60 text-sm">Full version optimized for Japanese region</p>
                    </div>
                  </div>
                  <span className="text-dbz-orange">Download</span>
                </a>

                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Essential_6.14.0.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-orange/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-orange/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Essential</h3>
                      <p className="text-white/60 text-sm">Lightweight version with core features</p>
                    </div>
                  </div>
                  <span className="text-dbz-orange">Download</span>
                </a>

                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Essential_Japan_6.14.0.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-orange/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-orange/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Japan Essential</h3>
                      <p className="text-white/60 text-sm">Essential version for Japanese region</p>
                    </div>
                  </div>
                  <span className="text-dbz-orange">Download</span>
                </a>

                <button
                  className="flex items-center gap-2 text-white/80 hover:text-white mt-6 mx-auto transition-colors"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
                  onClick={goBack}
                >
                  <ChevronLeft size={18} />
                  <span>Go Back</span>
                </button>
              </div>
            </motion.div>

            {/* iOS Download Options */}
            <motion.div
              className={`max-w-xl mx-auto ${!showIosButtons ? 'hidden' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showIosButtons ? 1 : 0, y: showIosButtons ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Base_6.14.0.ipa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-blue/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-blue/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">iOS Base IPA</h3>
                      <p className="text-white/60 text-sm">Base IPA with file sharing and custom music</p>
                    </div>
                  </div>
                  <span className="text-dbz-blue">Download</span>
                </a>

                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Injection_6.14.0.ipa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-blue/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-blue/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">iOS Injection IPA</h3>
                      <p className="text-white/60 text-sm">Base IPA features + injection mods</p>
                    </div>
                  </div>
                  <span className="text-dbz-blue">Download</span>
                </a>

                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Instant_Win_6.14.0.ipa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-blue/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-blue/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">iOS Instant Win IPA</h3>
                      <p className="text-white/60 text-sm">Base IPA features + Instant win mods</p>
                    </div>
                  </div>
                  <span className="text-dbz-blue">Download</span>
                </a>

                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Mod_Menu_6.14.0.ipa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-blue/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-blue/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">iOS Mod Menu IPA</h3>
                      <p className="text-white/60 text-sm">Base IPA features + Mod Menu</p>
                    </div>
                  </div>
                  <span className="text-dbz-blue">Download</span>
                </a>

                <a
                  href="https://github.com/GodkuProject/GodkuWebsite/releases/download/6.14.0/Godku_Project_Mod_Menu_6.14.0.deb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:border-dbz-blue/50 p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-dbz-blue/20 to-transparent rounded-lg flex items-center justify-center mr-4">
                      <DownloadIcon className="w-6 h-6 text-dbz-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">iOS Mod Menu DEB</h3>
                      <p className="text-white/60 text-sm">Deb file for Mod Menu</p>
                    </div>
                  </div>
                  <span className="text-dbz-blue">Download</span>
                </a>

                <button
                  className="flex items-center gap-2 text-white/80 hover:text-white mt-6 mx-auto transition-colors"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
                  onClick={goBack}
                >
                  <ChevronLeft size={18} />
                  <span>Go Back</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-dark-light/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold gradient-heading mb-4">
                Why Choose Godku Project?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Our mod offers a superior Dragon Ball Legends experience with these benefits:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  className="glass p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-dbz-orange/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Instructions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold gradient-heading mb-4">
                Installation Instructions
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Follow these simple steps to install the Godku Project mod:
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="glass p-8">
                <motion.div
                  className="relative pl-8 border-l border-dbz-orange/30"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-12">
                    <div className="relative">
                      <div className="absolute -left-11 w-8 h-8 bg-dbz-orange/20 rounded-full flex items-center justify-center text-dbz-orange font-bold border border-dbz-orange/30">1</div>
                      <h3 className="text-xl font-semibold mb-2">Download the APK</h3>
                      <p className="text-white/70">Choose the appropriate version above and download the APK file to your device.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-11 w-8 h-8 bg-dbz-orange/20 rounded-full flex items-center justify-center text-dbz-orange font-bold border border-dbz-orange/30">2</div>
                      <h3 className="text-xl font-semibold mb-2">Enable Unknown Sources</h3>
                      <p className="text-white/70">Go to Settings {'->'} Security {'->'} Enable "Unknown Sources" to allow installation of apps from sources other than the Play Store.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-11 w-8 h-8 bg-dbz-orange/20 rounded-full flex items-center justify-center text-dbz-orange font-bold border border-dbz-orange/30">3</div>
                      <h3 className="text-xl font-semibold mb-2">Install the APK</h3>
                      <p className="text-white/70">Open the downloaded APK file and follow the on-screen instructions to install.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-11 w-8 h-8 bg-dbz-orange/20 rounded-full flex items-center justify-center text-dbz-orange font-bold border border-dbz-orange/30">4</div>
                      <h3 className="text-xl font-semibold mb-2">Launch the Mod</h3>
                      <p className="text-white/70">Open the installed app and enjoy the enhanced Dragon Ball Legends experience!</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-dark-dark">
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
                <span className="text-lg font-semibold text-white">Godku Project</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
                <a href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
                <a href="/download" className="text-white/70 hover:text-white transition-colors">
                  Download
                </a>
                <a href="/documentation" className="text-white/70 hover:text-white transition-colors">
                  Documentation
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://www.discord.gg/godkuproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={24} height={24} />
                </a>
                <a
                  href="https://www.youtube.com/@GodkuProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
              <p>&copy; {new Date().getFullYear()} Godku Project. Created by Darklaser38. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
