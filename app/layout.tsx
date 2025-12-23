import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["Inter", "system-ui", "sans-serif"],
  src: [
    { path: "./fonts/poppins/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins/poppins-700.woff2", weight: "700", style: "normal" },
  ],
});

const roboto = Roboto({
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  fallback: ["Inter", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://humanbacked.vercel.app"),
  title: {
    default: "HumanBacked – In a world filled with digital voices and faces, being human matters",
    template: "%s | HumanBacked",
  },
  description:
    "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
  keywords: [
    "HumanBacked",
    "trust layer",
    "AI era",
    "verified creators",
    "identity",
    "content authenticity",
    "waitlist",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "HumanBacked | Trust Layer for Real Humans",
    description:
      "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
    url: "https://humanbacked.vercel.app",
    siteName: "HumanBacked",
    type: "website",
    images: [
      {
        url: "/LogoV2.svg",
        width: 1200,
        height: 630,
        alt: "HumanBacked | Trust Layer for Real Humans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HumanBacked | In a world filled with digital voices and faces, being human matters.",
    description:
      "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
    images: ["/LogoV2.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[radial-gradient(118.69%_85.24%_at_50%_25.2%,_#F4F4FF_0%,_#FFF_58.08%,_#F4F4FF_84.05%)]"
    >
      <body className={`${poppins.variable} ${roboto.variable} antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}
