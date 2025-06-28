import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import { products } from "@/app/lib/products";

export const metadata = {
  title: 'Home',
  description: 'Eco-friendly plastic packaging built for performance and sustainability.',
  openGraph: {
    url: '/',
    images: [
      {
        url: '/api/og?title=Prarambh%20Plastech&subtitle=Eco%20Packaging&logo=/logo.png&bg=/banner-light.png',
        width: 1200,
        height: 630,
        alt: 'Prarambh OG Image',
      },
    ],
  },
  twitter: {
    images: ['/api/og?title=Prarambh%20Plastech&subtitle=Eco%20Packaging&logo=/logo.png&bg=/banner-light.png'],
  },
};

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
