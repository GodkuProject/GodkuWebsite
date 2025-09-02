import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Godku Project",
  description: "The best Dragon Ball Legends mods !",
  icons: {
    icon: '/GodkuWebsite/images/logo.png',
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
        <meta name="theme-color" content="#1E90FF" />
        <meta property="og:title" content="Godku Project" />
        <meta property="og:description" content="The best Dragon Ball Legends mods !" />
        <meta property="og:image" content="https://i.imgur.com/i5t0JV2.png" />
      </head>
      <body className={`${poppins.className} background`}>{children}</body>
    </html>
  );
}
