import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import ProductsSection from "../components/ProductsSection";
import ExportProcess from "../components/ExportProcess";
// import GlobalReach from "../components/GlobalReach";
import AboutSection from "../components/AboutSection";
import ProductGallery from "../components/ProductGallery";
import TradeMap from "../components/TradeMap";
// import ClientsSection from "../components/ClientsSection";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ExportProcess />
      <StatsSection />
      <ProductsSection />
      {/* <GlobalReach /> */}
      <ProductGallery />
      {/* <TradeMap /> */}
      {/* <ClientsSection /> */}
      
     

    </>
  );
}