"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, DownloadCloud, Settings, Zap, Shield, Users } from "lucide-react";

import { Header } from "@/components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const features = [
    {
      title: "Character Customization",
      description: "Access modifications To Characters Such as Movesets Swap And Model Swapping.",
      icon: <Users className="w-8 h-8 text-dbz-orange" />
    },
    {
      title: "Better Gameplay",
      description: "Experience A Better Gameplay Experience With The Full Version Of The Mod.",
      icon: <Zap className="w-8 h-8 text-dbz-blue" />
    },
    {
      title: "Advanced Settings",
      description: "Fine-tune your game with advanced settings and customizations for the perfect experience.",
      icon: <Settings className="w-8 h-8 text-dbz-yellow" />
    },
    {
      title: "Safe & Reliable",
      description: "We Make Are Mods 90% Safe And Will Not Get You Banned, We Also Try To Update The Mod Everytime A New Update Comes Out As Fast AS Possible.",
      icon: <Shield className="w-8 h-8 text-dbz-orange" />
    }
  ];
  
  const testimonials = [
    {
      name: "Jon",
      text: "I've tried many mods before, but Godku Project is by far the most stable and feature-rich. Highly recommended for people who are looking for fun and appreciate how compatible it is with all Android phones.",
      avatar: "/GodkuWebsite/images/ui/jon.png",
    },
    {
      name: "OMChillz",
      text: "Godku Project was the best thing I've come across. It makes everything much easier while also being safe and offering lots of customer support. In my opinion, Godku Project is the best Dragon Ball Legends mod out there. With so many features already included and many more coming in the future, this is the best mod for Dragon Ball Legends.",
      avatar: "/GodkuWebsite/images/ui/chillz.gif",
    },
    {
      name: "Keso",
      text: "Darklaser is my pookie.",
      avatar: "/GodkuWebsite/images/ui/queso.png",
    },
    {
      name: "Zack",
      text: "THE BEST mod menu I have seen in any online game.",
      avatar: "/GodkuWebsite/images/ui/zack.png",
    },
    {
      name: "Sed",
      text: "I love Darklaser, he is my sunshine.",
      avatar: "/GodkuWebsite/images/ui/sed.png",
    },
    {
      name: "Rez",
      text: "Ion even use the godku mod menu all that much bro 😭 but it is goated like yeat.",
      avatar: "/GodkuWebsite/images/ui/rez.gif",
    },
    {
      name: "Rayquaza",
      text: "Godku Project is by far the best Dragon Ball Legends Mod I've ever used, and what makes it even better is that it's completely free. 10/10 would recommend",
      avatar: "/GodkuWebsite/images/ui/ray.png",
    },
    {
      name: "Shinzashi",
      text: "Godku project is the mod application that I have ever used it makes the grind so much easier and the experience so much enjoyable definitely the best mod",
      avatar: "/GodkuWebsite/images/ui/shin.png",
    },
    {
      name: "DarkSaviour",
      text: "Godku Overpowered as hell. 10/10 recommend using it over regular Dragon Ball Legends",
      avatar: "/GodkuWebsite/images/ui/darkd.png",
    },
    {
      name: "Deeoon",
      text: "The godku mod menu is goated icl lowkey the best ever",
      avatar: "/GodkuWebsite/images/ui/deeoon.png",
    },
  ];  

  return (
    <>
      <Header />

      <main className="pt-20 relative overflow-x-hidden">
        {/* Grid Pattern Background */}
        <div className="grid-pattern absolute inset-0 w-full h-full pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-dbz-blue/20 to-transparent opacity-50 blur-xl"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="flex-1"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                <h1 className="hero-title">
                  Godku Project <br />
                  The Best <span className="text-dbz-orange">Legends Mod</span>
                </h1>
                <p className="hero-subtitle">
                  Experience Dragon Ball Legends like never before with better gameplay, Custome Movesets, and advanced Model Swapping.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link href="/download">
                    <button className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                      <DownloadCloud size={20} />
                      <span>Download Now</span>
                    </button>
                  </Link>
                  <Link href="/documentation">
                    <button className="button-secondary flex items-center gap-2 w-full sm:w-auto justify-center" style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}>
                      <span>View Documentation</span>
                      <ChevronRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image
                    src="/GodkuWebsite/images/characters/goku-ultra-instinct.png"
                    alt="Dragon Ball Character"
                    fill
                    className="object-contain animate-float"
                  />
                  <div className="absolute inset-0 bg-gradient-radial from-dbz-orange/10 to-transparent rounded-full blur-2xl -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Powerful Features
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Discover what makes the Godku Project the most comprehensive Dragon Ball Legends mod available.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={item}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Screenshot Showcase */}
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
                Mod Menu Showcase
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Get a preview of our intuitive mod menu and game improvements.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden gradient-border">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/MmkLfiXxUzU"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
                What Users Are Saying
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Hear from our community about their experience with the Godku Project.
              </p>
            </motion.div>

            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="glass-card h-full p-6 flex flex-col">
                      <div className="mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 7L8 11L11 13L7 17H15L17 13L14 11L18 7H10Z" fill="#FF5900" />
                        </svg>
                      </div>
                      <p className="text-white/80 mb-6 flex-grow">{testimonial.text}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                          <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="mr-2" />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full bg-gradient-radial from-dbz-orange/20 to-transparent opacity-50 blur-xl"></div>
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/GodkuWebsite/images/characters/vegeta.png"
                  alt="Vegeta"
                  width={150}
                  height={150}
                  className="mx-auto mb-6"
                />
              </motion.div>

              <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to Transform Your <br />
                <span className="gradient-heading">Dragon Ball Legends Experience?</span>
              </motion.h2>

              <motion.p
                className="text-xl text-white/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Download the Godku Project mod now and unlock the full potential of Dragon Ball Legends.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/download">
                  <button className="button-primary text-lg px-8 py-4 animate-pulse">
                    Get Started Now
                  </button>
                </Link>
              </motion.div>
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
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/download" className="text-white/70 hover:text-white transition-colors">
                  Download
                </Link>
                <Link href="/documentation" className="text-white/70 hover:text-white transition-colors">
                  Documentation
                </Link>
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
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@godkuprojectreborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
              <p>&copy; {new Date().getFullYear()} Godku Project. Created by Darklaser38 And TheOnlyJon. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
