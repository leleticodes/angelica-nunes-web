import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <Features />
      <FeaturedProducts />
    </div>
  );
}