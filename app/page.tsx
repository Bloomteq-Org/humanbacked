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
