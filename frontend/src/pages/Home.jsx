import Hero from "../components/Hero";
import Enjeux from "../components/Enjeux";
import ServicesSection from "../components/ServicesSection";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Enjeux />
      <ServicesSection preview />
      <WhyUs />
    </>
  );
}
