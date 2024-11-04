import HeaderDeslogada from "./components/header-deslogada/header";
import HeroSection from "./components/hero-section/hero";
import SectionPlans from "./components/section-plans/planos";
import SectionSobre from "./components/section-sobre/sobre";

export default function Home() {
  return (
    <>
      <HeaderDeslogada />
      <HeroSection />
      <SectionSobre />
      <SectionPlans />
    </>
  );
}
