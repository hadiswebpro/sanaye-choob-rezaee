import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import StorySection from "../components/StorySection";
import OrderSteps from "../components/OrderSteps";
import OrderSection from "../components/OrderSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <StorySection />
      <OrderSteps />
      <OrderSection />
    </>
  );
}