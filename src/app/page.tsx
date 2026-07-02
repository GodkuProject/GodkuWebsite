"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DownloadCloud, Settings, Zap, Shield, Users, Sparkles, ArrowRight } from "lucide-react";

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
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { value: "15K+", label: "Active Users" },
    { value: "90%", label: "Ban-Safe Rating" },
    { value: "24/7", label: "Community Support" },
    { value: "30+", label: "Mod Menu Features" },
  ];

  const features = [
    {
      title: "Character Customization",
      description: "Access modifications to characters such as full model swapping, costume changes, and stat overrides.",
      icon: <Users className="w-7 h-7" />,
    },
    {
      title: "Better Gameplay",
      description: "Experience a smoother, more responsive gameplay loop with the full version of the mod.",
      icon: <Zap className="w-7 h-7" />,
    },
    {
      title: "Advanced Settings",
      description: "Fine-tune your game with granular controls built for the perfect setup.",
      icon: <Settings className="w-7 h-7" />,
    },
    {
      title: "Safe & Reliable",
      description: "Built with a 90% ban-safe rating, and updated fast whenever the game patches.",
      icon: <Shield className="w-7 h-7" />,
    },
  ];

  const testimonials = [
    {
      name: "Jon",
      text: "I've tried many mods before, but Godku Project is by far the most stable and feature-rich. Highly recommended for people who appreciate compatibility across Android devices.",
      avatar: "/GodkuWebsite/images/ui/jon.png",
    },
    {
      name: "OMChillz",
      text: "Godku Project was the best thing I've come across. It makes everything much easier while staying safe, with lots of support behind it.",
      avatar: "/GodkuWebsite/images/ui/chillz.gif",
    },
    {
      name: "Keso",
      text: "Darklaser is my pookie.",
      avatar: "/GodkuWebsite/images/ui/queso.png",
    },
    {
      name: "Zack",
      text: "The best mod menu I have seen in any online game.",
      avatar: "/GodkuWebsite/images/ui/zack.png",
    },
    {
      name: "Sed",
      text: "I love Darklaser, he is my sunshine.",
      avatar: "/GodkuWebsite/images/ui/sed.png",
    },
    {
      name: "Rez",
      text: "I don't even use the Godku mod menu all that much, but it's goated.",
      avatar: "/GodkuWebsite/images/ui/rez.gif",
    },
    {
      name: "Rayquaza",
      text: "Godku Project is by far the best Dragon Ball Legends mod I've ever used, and it's completely free. 10/10 would recommend.",
      avatar: "/GodkuWebsite/images/ui/ray.png",
    },
    {
      name: "Shinzashi",
      text: "The mod application I've used the most. It makes the grind so much easier and the experience so much more enjoyable.",
      avatar: "/GodkuWebsite/images/ui/shin.png",
    },
    {
      name: "DarkSaviour",
      text: "Godku is overpowered as hell. 10/10 recommend using it over regular Dragon Ball Legends.",
      avatar: "/GodkuWebsite/images/ui/darkd.png",
    },
    {
      name: "Deeoon",
      text: "The Godku mod menu is goated, lowkey the best one out there.",
      avatar: "/GodkuWebsite/images/ui/deeoon.png",
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-20 relative overflow-x-hidden">
        <div className="grid-pattern absolute inset-0 w-full h-full pointer-events-none" />

        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
            >
              <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-dbz-blue/20 opacity-40 blur-[100px] animate-[auroraShift_18s_ease-in-out_infinite]" />
              <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-dbz-orange/15 opacity-40 blur-[100px] animate-[auroraShift_22s_ease-in-out_infinite_reverse]" />
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <motion.div
                className="flex-1"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                <div className="eyebrow mb-6">
                  <span className="eyebrow-dot" />
                  not updated yet
                </div>

                <h1 className="hero-title font-display">
                  Godku Project
                  <br />
                  The Best <span className="text-dbz-orange">Legends Mod</span>
                </h1>

                <p className="hero-subtitle">
                  Experience Dragon Ball Legends like never before, with a powerful mod menu,
                  an automated farmbot, and advanced model swapping built by players, for players.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-9">
                  <Link href="/download">
                    <button className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                      <DownloadCloud size={20} />
                      <span>Download Now</span>
                    </button>
                  </Link>
                  <Link href="/mod-menu">
                    <button className="button-secondary flex items-center gap-2 w-full sm:w-auto justify-center">
                      <span>See What's Inside</span>
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-lg">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="stat-number">{stat.value}</div>
                      <div className="text-xs text-white/50 mt-1 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <div className="relative w-[300px] h-[300px] md:w-[440px] md:h-[440px]">
                  <div className="aura-ring" />
                  <div className="absolute inset-0 bg-gradient-radial from-dbz-orange/15 to-transparent rounded-full blur-2xl -z-10" />
                  <Image
                    src="/images/characters/goku-ultra-instinct.jpg"
                    alt="Dragon Ball Character"
                    fill
                    className="object-contain animate-float drop-shadow-[0_25px_45px_rgba(168,85,247,0.35)]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="marquee-wrap py-8 border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
          <div className="marquee-track gap-16 text-white/30 font-display font-bold text-2xl uppercase tracking-widest whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                <span className="flex items-center gap-3"><Sparkles size={18} className="text-dbz-orange" />Powerful Mod Menu</span>
                <span className="flex items-center gap-3"><Sparkles size={18} className="text-dbz-blue" />Model Swapping</span>
                <span className="flex items-center gap-3"><Sparkles size={18} className="text-dbz-yellow" />Automated Farmbot</span>
                <span className="flex items-center gap-3"><Sparkles size={18} className="text-dbz-orange" />Ban-Safe Design</span>
                <span className="flex items-center gap-3"><Sparkles size={18} className="text-dbz-blue" />Active Community</span>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="py-24 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-3">What You Get</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-heading mb-4">
                Powerful Features
              </h2>
              <p className="text-white/60">
                Everything that makes Godku Project the most comprehensive Dragon Ball Legends mod available.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div key={index} className="feature-card" variants={item}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-white/[0.015]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-3">In Action</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-heading mb-4">
                Mod Menu Showcase
              </h2>
              <p className="text-white/60">
                Get a preview of our intuitive mod menu and in-game improvements.
              </p>
            </motion.div>

            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden gradient-border shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/DkZ98nNCN8s"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/mod-menu">
                <button className="button-secondary inline-flex items-center gap-2">
                  <span>See Full Mod Menu Details</span>
                  <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-3">In Action</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-heading mb-4">
                Farmbot Showcase
              </h2>
              <p className="text-white/60">
                Get a preview of our automated farmbot handling story, events, and raids for you.
              </p>
            </motion.div>

            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden gradient-border shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/i5yqPX1DfLM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/farmbot">
                <button className="button-secondary inline-flex items-center gap-2">
                  <span>See Full Farmbot Details</span>
                  <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-3">Community</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-heading mb-4">
                What Users Are Saying
              </h2>
              <p className="text-white/60">
                Real feedback from the community that keeps this project alive.
              </p>
            </motion.div>

            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="glass-card h-full p-6 flex flex-col">
                      <div className="mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 7L8 11L11 13L7 17H15L17 13L14 11L18 7H10Z" fill="#A855F7" />
                        </svg>
                      </div>
                      <p className="text-white/75 mb-6 flex-grow leading-relaxed text-sm">{testimonial.text}</p>
                      <div className="flex items-center mt-auto pt-4 border-t border-white/[0.06]">
                        <div className="w-9 h-9 rounded-full overflow-hidden mr-3 ring-1 ring-white/10">
                          <Image src={testimonial.avatar} alt={testimonial.name} width={36} height={36} />
                        </div>
                        <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="mr-2 static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        <section className="py-24 md:py-28 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] rounded-full bg-gradient-radial from-dbz-orange/15 to-transparent opacity-60 blur-[90px]" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center glass p-12 md:p-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/public/images/characters/goku.jpg"
                  alt="Goku"
                  width={130}
                  height={130}
                  className="mx-auto mb-8 drop-shadow-[0_15px_30px_rgba(124,58,237,0.35)]"
                />
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-display font-bold mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Ready to Transform Your
                <br />
                <span className="gradient-heading">Dragon Ball Legends Experience?</span>
              </motion.h2>

              <motion.p
                className="text-lg text-white/60 mb-9"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Download Godku Project now and unlock the full potential of the game.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Link href="/download">
                  <button className="button-primary text-lg px-9 py-4">
                    Get Started Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-dark-dark border-t border-white/[0.06]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <Image
                  src="/GodkuWebsite/images/logo.png"
                  alt="Godku Logo"
                  width={28}
                  height={28}
                  className="mr-2 rounded-full"
                />
                <span className="font-display text-lg font-semibold text-white">Godku Project</span>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
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
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={22} height={22} />
                </a>
                <a
                  href="https://www.youtube.com/@GodkuProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@godkuprojectreborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
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
