'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, FileText, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

// Particle component for floating bats and sparkles
function ParticleEffect() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, duration: number, type: 'bat' | 'sparkle'}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      type: Math.random() > 0.5 ? 'bat' : 'sparkle' as 'bat' | 'sparkle'
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.type === 'bat' ? (
            <svg className="w-6 h-6 text-purple-500/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-1.5 0-2.5 1.5-2.5 3 0 .5.1 1 .3 1.4-1.5.3-2.8 1.5-2.8 3.1 0 .8.3 1.5.8 2-.5.5-.8 1.2-.8 2 0 1.7 1.4 3 3 3h4c1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2 .5-.5.8-1.2.8-2 0-1.6-1.3-2.8-2.8-3.1.2-.4.3-.9.3-1.4 0-1.5-1-3-2.5-3z"/>
            </svg>
          ) : (
            <div className="w-2 h-2 bg-orange-400/40 rounded-full animate-pulse"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      text: "I've tried many mods before, but Godku Project is by far the most stable and feature-rich. Highly recommended for people who are looking for fun and appreciate how compatible it is with all Android phones.",
      author: "Jon",
    },
    {
      text: "Godku Project was the best thing I've come across. It makes everything much easier while also being safe and offering lots of customer support. In my opinion, Godku Project is the best Dragon Ball Legends mod out there. With so many features already included and many more coming in the future, this is the best mod for Dragon Ball Legends.",
      author: "OMChillz",
    },
    {
      text: "Darklaser is my pookie.",
      author: "Keso",
    },
    {
      text: "THE BEST mod menu I have seen in any online game.",
      author: "Zack",
    },
    {
      text: "I love Darklaser, he is my sunshine.",
      author: "Sed",
    },
    {
      text: "Ion even use the godku mod menu all that much bro but it is goated like yeat.",
      author: "Rez",
    },
    {
      text: "Godku Project is by far the best Dragon Ball Legends Mod I've ever used, and what makes it even better is that it's completely free. 10/10 would recommend",
      author: "Rayquaza",
    },
    {
      text: "Godku project is the mod application that I have ever used it makes the grind so much easier and the experience so much enjoyable definitely the best mod",
      author: "Shinzashi",
    },
    {
      text: "Godku Overpowered as hell. 10/10 recommend using it over regular Dragon Ball Legends",
      author: "DarkSaviour",
    },
    {
      text: "The godku mod menu is goated icl lowkey the best ever",
      author: "Deeoon",
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3));
  };

  const visibleTestimonials = testimonials.slice(currentTestimonial, currentTestimonial + 3);

  return (
    <div className="background relative">
      {/* Particle Effects */}
      <ParticleEffect />

      {/* Corner Decorations */}
      <div className="fixed top-0 left-0 z-10 pointer-events-none">
        <img
          src="https://static.vecteezy.com/system/resources/previews/069/332/145/non_2x/cute-ghost-peeking-out-from-carved-pumpkin-halloween-illustration-adorable-spooky-character-festive-autumn-holiday-clipart-seasonal-decoration-for-cards-and-party-free-png.png"
          alt="Pumpkin decoration"
          className="w-24 h-24 md:w-32 md:h-32 opacity-20 animate-float"
        />
      </div>
      <div className="fixed top-0 right-0 z-10 pointer-events-none">
        <img
          src="https://png.pngtree.com/png-clipart/20250731/original/pngtree-watercolor-halloween-character-collection-with-ghosts-pumpkin-and-witch-designs-png-image_21329623.png"
          alt="Witch hat decoration"
          className="w-24 h-24 md:w-32 md:h-32 opacity-15 animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <div className="fixed bottom-0 left-0 z-10 pointer-events-none">
        <img
          src="https://png.pngtree.com/png-clipart/20250101/original/pngtree-halloween-cartoon-ghost-character-smiling-with-scary-pumpkin-png-image_18562026.png"
          alt="Ghost decoration"
          className="w-20 h-20 md:w-28 md:h-28 opacity-15 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5 backdrop-blur-md bg-gradient-to-r from-purple-900/10 via-orange-900/10 to-purple-900/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link className="flex items-center space-x-3" href="/">
              <img src="https://ext.same-assets.com/3227001127/1859705974.png" alt="Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-orange-400 to-purple-400 text-transparent bg-clip-text">Godku Project</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link className="text-white/80 hover:text-orange-400 transition-colors" href="/">Home</Link>
              <a className="text-white/80 hover:text-orange-400 transition-colors" href="#download">Download</a>
              <a className="text-white/80 hover:text-orange-400 transition-colors" href="#documentation">Documentation</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.6)] hover:-translate-y-0.5">
              Donate
            </button>
            <button className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 hover:from-purple-800/40 hover:to-purple-700/40 text-white px-4 py-2 rounded-lg transition-all border border-purple-500/30">
              Community
            </button>
          </div>
          <button
            className="md:hidden text-white p-2 rounded-lg bg-purple-900/20 hover:bg-purple-900/30 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden pt-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-900/30 via-orange-900/10 to-transparent blur-3xl"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="hero-title">
                Godku Project<br />
                The Best <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 text-transparent bg-clip-text">Legends Mod</span>
              </h1>
              <p className="hero-subtitle">
                Experience Dragon Ball Legends like never before with better gameplay, Custom Movesets, and advanced Model Swapping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-purple-600">
                  <Download className="w-5 h-5" />
                  <span>Download Now</span>
                </button>
                <button className="button-secondary flex items-center gap-2 w-full sm:w-auto justify-center bg-gradient-to-r from-purple-900/20 to-orange-900/20 hover:from-purple-800/30 hover:to-orange-800/30">
                  <span>View Documentation</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center relative">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <img
                  alt="Dragon Ball Character"
                  className="object-contain animate-float"
                  style={{ width: '100%', height: '100%' }}
                  src="https://ext.same-assets.com/3227001127/1859705974.png"
                />
                <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-purple-500/10 to-transparent rounded-full blur-2xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black/20 via-purple-900/10 to-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">Powerful Features</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Discover what makes the Godku Project the most comprehensive Dragon Ball Legends mod available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card border-gradient">
              <div className="mb-4">
                <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Character Customization</h3>
              <p className="text-white/70">
                Access modifications to Characters such as Movesets Swap and Model Swapping.
              </p>
            </div>

            <div className="feature-card border-gradient">
              <div className="mb-4">
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Better Gameplay</h3>
              <p className="text-white/70">
                Experience a better gameplay experience with the full version of the mod.
              </p>
            </div>

            <div className="feature-card border-gradient">
              <div className="mb-4">
                <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Advanced Settings</h3>
              <p className="text-white/70">
                Fine-tune your game with advanced settings and customizations for the perfect experience.
              </p>
            </div>

            <div className="feature-card border-gradient">
              <div className="mb-4">
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Safe & Reliable</h3>
              <p className="text-white/70">
                We make our mods 90% safe and will not get you banned. We also try to update the mod every time a new update comes out as fast as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">Mod Menu Showcase</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Get a preview of our intuitive mod menu and game improvements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-gradient-animated bg-gradient-to-br from-purple-900/20 via-orange-900/20 to-purple-900/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500/30 to-purple-500/30 rounded-full flex items-center justify-center border-2 border-gradient-animated">
                    <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-white/60">Godku Project Version 6.11.0 Showcase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black/20 via-purple-900/10 to-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">What Users Are Saying</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Hear from our community about their experience with the Godku Project.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={currentTestimonial + index} className="glass-card p-6 flex flex-col h-full border-gradient">
                  <div className="text-orange-500 mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-white/80 mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>

            {testimonials.length > 3 && (
              <>
                <button
                  onClick={prevTestimonial}
                  disabled={currentTestimonial === 0}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-900/50 to-orange-900/50 hover:from-purple-900/70 hover:to-orange-900/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  disabled={currentTestimonial + 3 >= testimonials.length}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-900/50 to-purple-900/50 hover:from-orange-900/70 hover:to-purple-900/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-orange-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <img
                alt="Vegeta"
                className="mx-auto w-32 h-32 drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                src="https://ext.same-assets.com/3227001127/205127474.png"
              />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your<br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 text-transparent bg-clip-text">Dragon Ball Legends Experience?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Download the Godku Project mod now and unlock the full potential of Dragon Ball Legends.
            </p>
            <button className="button-primary text-lg px-8 py-4 animate-pulse bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600 hover:from-orange-600 hover:via-purple-600 hover:to-orange-600">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black border-t border-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="https://ext.same-assets.com/3227001127/1859705974.png" alt="Logo" className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold text-white">Godku Project</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
              <Link className="text-white/70 hover:text-orange-400 transition-colors" href="/">Home</Link>
              <a className="text-white/70 hover:text-orange-400 transition-colors" href="#download">Download</a>
              <a className="text-white/70 hover:text-orange-400 transition-colors" href="#documentation">Documentation</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.discord.gg/godkuproject" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@GodkuProject" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@godkuprojectreborn" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            <p>© 2025 Godku Project. Created by Darklaser38 and TheOnlyJon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
