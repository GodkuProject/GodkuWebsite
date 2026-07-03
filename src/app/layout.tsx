import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import { SpotlightCursor } from "@/components/SpotlightCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Godku Project",
  description: "A powerful mod menu, an automated farmbot, and a smoother Dragon Ball Legends experience, built and maintained by a real community.",
  icons: {
    icon: "/GodkuWebsite/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0612" />
        <meta property="og:title" content="Godku Project" />
        <meta property="og:description" content="The best Dragon Ball Legends mods!" />
        <meta property="og:image" content="https://i.imgur.com/mXqFPE3.jpeg" />
      </head>
      <body className={`${poppins.variable} ${sora.variable} font-body background`}>
        <SpotlightCursor />
        <div className="spotlight" />
        {children}
      </body>
    </html>
  );
}
