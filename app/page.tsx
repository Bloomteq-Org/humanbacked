import type { Metadata } from "next";
import Header from "./components/Header";
import Divider from "./components/Divider";
import HeroCounterDescription from "./components/HeroCounterDescription";
import ImageMarquee from "./components/ImageMarquee";
import RealSection from "./components/RealSection";
import Logo from "./components/Logo";
import HumanBacked from "./components/HumaBacked";
import NewSection from "./components/NewSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "HumanBacked – In a world filled with digital voices and faces, being human matters",
  description:
    "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
  keywords: [
    "HumanBacked",
    "trust layer",
    "AI era",
    "verified creators",
    "identity verification",
    "content authenticity",
    "proof of personhood",
    "creator economy",
    "AI-generated content",
    "deepfake detection",
    "creator verification",
  ],
  alternates: {
    canonical: "/",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(118.69%_85.24%_at_50%_25.2%,_#FFF_0%,_#F4F4FF_58.08%,_#FFF_84.05%)]">
      <Header />
      <HeroCounterDescription />
      <ImageMarquee />
      <RealSection />
      <Divider />
      <Logo />
      <HumanBacked />
      <NewSection />
      <FormSection />
      <Footer />
    </main>
  );
}
