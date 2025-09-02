export default function Home() {
  return (
    <main className="pt-20 relative overflow-x-hidden bg-[hsl(222,28%,7%)] min-h-screen text-white">
      {/* Header spacer handled by fixed header in layout if added later */}
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,_rgba(34,197,221,0.14),_transparent_60%)] opacity-60 blur-3xl" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                The Best <span style={{ color: '#00FFFF' }}>Legends Mod</span>
              </h1>
              <p className="mt-4 text-white/80 max-w-xl">
                Experience Dragon Ball Legends like never before with better gameplay, Custome Movesets, and advanced Model Swapping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#download" className="w-full sm:w-auto">
                  <button className="text-black px-5 py-3 rounded-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto" style={{ backgroundColor: '#00FFFF', boxShadow: '0 0 20px rgba(0,255,255,0.45)' }}>
                    Download Now
                  </button>
                </a>
                <a href="#documentation" className="w-full sm:w-auto">
                  <button className="bg-white/10 hover:bg-white/15 text-white/90 px-5 py-3 rounded-lg transition-all w-full sm:w-auto">
                    View Documentation
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center relative">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <img
                  src="https://ext.same-assets.com/3227001127/475759110.png"
                  alt="Dragon Ball Character"
                  className="object-contain animate-float-slow w-full h-full"
                />
                <div className="absolute inset-0 rounded-full blur-2xl -z-10" style={{ background: "radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 60%)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/5" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Powerful Features</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Discover what makes the Godku Project the most comprehensive Dragon Ball Legends mod available.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "Character Customization",
                d: "Access modifications To Characters Such as Movesets Swap And Model Swapping.",
              },
              { t: "Better Gameplay", d: "Experience A Better Gameplay Experience With The Full Version Of The Mod." },
              { t: "Advanced Settings", d: "Fine-tune your game with advanced settings and customizations for the perfect experience." },
              { t: "Safe & Reliable", d: "We Make Are Mods 90% Safe And Will Not Get You Banned, We Also Try To Update The Mod Everytime A New Update Comes Out As Fast AS Possible." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur">
                <h3 className="text-xl font-semibold mb-2 text-white">{f.t}</h3>
                <p className="text-white/70">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">What Users Are Saying</h2>
            <p className="text-white/70 max-w-xl mx-auto">Hear from our community about their experience with the Godku Project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { n: "Jon", m: "I've tried many mods before, but Godku Project is by far the most stable and feature-rich." },
              { n: "OMChillz", m: "Best Dragon Ball Legends mod out there. Many features and more coming." },
              { n: "Zack", m: "THE BEST mod menu I have seen in any online game." },
            ].map((t) => (
              <div key={t.n} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-white/80 mb-4">{t.m}</p>
                <p className="font-semibold">{t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden" id="cta">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <img
            src="https://ext.same-assets.com/3227001127/2703999992.png"
            alt="Vegeta"
            className="mx-auto mb-6 w-[150px] h-auto animate-float-slow"
          />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">Dragon Ball Legends Experience?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Download the Godku Project mod now and unlock the full potential of Dragon Ball Legends.
          </p>
          <a href="#download">
            <button className="text-black px-8 py-4 rounded-lg text-lg" style={{ backgroundColor: '#00FFFF', boxShadow: '0 0 30px rgba(0,255,255,0.35)' }}>Get Started Now</button>
          </a>
        </div>
      </section>
    </main>
  );
}
