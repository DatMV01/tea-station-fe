import {
  Header,
  Footer,
  Sidebar,
  HeroSection,
  PartnerLogosSection,
  ProductsSection,
  SloganSection,
  FeaturesSection,
  BestSellersSection,
  StatsSection,
  StorySection,
  ContactSection,
} from "@/components";
import DemoAOS from "@/features/aos/components/DemoAOS";

export default function Main() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <PartnerLogosSection />
        <ProductsSection />
        <SloganSection />
        <FeaturesSection />
        <BestSellersSection />
        <StatsSection />
        <StorySection />
        <ContactSection />
        <DemoAOS />
      </main>

      <Footer />
    </>
  );
}
