import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="px-6 pt-20 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0 w-full h-full pointer-events-none" />
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative z-10">
          <Image
            src="/GodkuWebsite/images/logo.png"
            alt="Godku Logo"
            width={64}
            height={64}
            className="rounded-full mb-8 opacity-80"
          />
          <p className="section-label mb-3">Error 404</p>
          <h1 className="hero-title font-display text-5xl md:text-6xl mb-4">
            Lost In The Timeline
          </h1>
          <p className="text-white/60 mb-10 text-lg max-w-md">
            The page you're looking for doesn't exist, or it's been sent to another dimension.
          </p>
          <Link href="/">
            <button className="button-primary text-lg px-8 py-4">
              Return Home
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
