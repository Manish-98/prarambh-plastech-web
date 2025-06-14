import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";

const productData = [
  {
    id: 1,
    title: "Corrugated Boxes",
    description: "Durable, customizable shipping solutions",
    image: "/logo.png",
    alt: "Stack of corrugated shipping boxes"
  },
  {
    id: 2,
    title: "Food Packaging",
    description: "Safe, sustainable food-grade containers",
    image: "/logo.png",
    alt: "Various food packaging containers"
  },
  {
    id: 3,
    title: "Protective Packaging",
    description: "Advanced cushioning and protection",
    image: "/logo.png",
    alt: "Protective packaging materials and foam"
  },
  {
    id: 4,
    title: "Custom Solutions",
    description: "Tailored designs for your brand",
    image: "/logo.png",
    alt: "Custom branded packaging boxes"
  }
];


export default function Home() {
  return (
    <div>
      <Hero />
      <Catalog
        title="Our Product Range"
        subtitle="Comprehensive packaging solutions for every industry"
        products={productData}
        ctaText="View All Products"
        ctaLink="/products"
        backgroundColor="bg-soft"
      />
    </div>
  );
}
