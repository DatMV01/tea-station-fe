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
      </main>
      <Footer />
    </>
  );
}
