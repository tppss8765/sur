import Hero from "@/components/home/Hero";
import SignatureShakes from "@/components/home/SignatureShakes";
import JuicesShowcase from "@/components/home/JuicesShowcase";
import FreshArrivals from "@/components/home/FreshArrivals";
import VegetablesShowcase from "@/components/home/VegetablesShowcase";
import WhyUs from "@/components/home/WhyUs";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import CtaStrip from "@/components/home/CtaStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureShakes />
      <JuicesShowcase />
      <FreshArrivals />
      <VegetablesShowcase />
      <WhyUs />
      <ReviewsPreview />
      <CtaStrip />
    </>
  );
}
