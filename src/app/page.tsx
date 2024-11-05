import HeaderDeslogada from "./components/header-deslogada/header";
import HeroSection from "./components/hero-section/hero";
import SectionReviews from "./components/reviews-section/reviews";
import SectionFaq from "./components/section-faq/faq";
import SectionFooter from "./components/section-footer/footer";
import SectionPlans from "./components/section-plans/planos";
import SectionSobre from "./components/section-sobre/sobre";

export default function Home() {
  return (
    <>
      <HeaderDeslogada />
      <HeroSection />
      <SectionSobre />
      <SectionPlans />
      <SectionFaq />
      <SectionReviews />
      <SectionFooter />
    </>
  );
}
