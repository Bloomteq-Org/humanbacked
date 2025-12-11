import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://humanbacked.vercel.app"),
  title: {
    default:
      "HumanBacked – In a world filled with digital voices and faces, being human matters",
    template: "%s | HumanBacked",
  },
  description:
    "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
  keywords: [
    "HumanBacked",
    "Next.js landing page",
    "server side rendering",
    "Tailwind CSS",
    "Vercel",
    "lead capture",
  ],
  openGraph: {
    title: "HumanBacked | Trust Layer for Real Humans",
    description:
      "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
    url: "https://humanbacked.vercel.app",
    siteName: "HumanBacked",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HumanBacked | In a world filled with digital voices and faces, being human matters.",
    description:
      "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${poppins.variable} antialiased  h-full`}>
        {children}
      </body>
    </html>
  );
}
