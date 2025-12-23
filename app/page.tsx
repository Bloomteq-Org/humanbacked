import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import HeroCounterDescription from "./components/HeroCounterDescription";

// Lazy load below-the-fold components to reduce initial bundle size
const ImageMarquee = dynamic(() => import("./components/ImageMarquee"), {
  loading: () => <div className="h-[400px] w-full" />, // Placeholder to prevent layout shift
});

const RealSection = dynamic(() => import("./components/RealSection"), {
  loading: () => <div className="h-[500px] w-full" />,
});

const Divider = dynamic(() => import("./components/Divider"));

const Logo = dynamic(() => import("./components/Logo"));

const HumanBacked = dynamic(() => import("./components/HumaBacked"), {
  loading: () => <div className="h-[400px] w-full" />,
});

const NewSection = dynamic(() => import("./components/NewSection"), {
  loading: () => <div className="h-[500px] w-full" />,
});

const FormSection = dynamic(() => import("./components/FormSection"), {
  loading: () => <div className="h-[300px] w-full" />,
});

const Footer = dynamic(() => import("./components/Footer"));

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
    url: "https://www.humanbacked.com",
    siteName: "HumanBacked",
    type: "website",
    images: [
      {
        url: "/Artist2.png",
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
    images: ["/Artist2.png"],
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
