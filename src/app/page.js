import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import { products } from "@/app/lib/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Catalog
        title="Our Product Range"
        subtitle="Comprehensive packaging solutions for every industry"
        products={products.slice(0, 4)}
        ctaText="View All Products"
        ctaLink="/products"
        backgroundColor="bg-soft"
      />
    </div>
  );
}
