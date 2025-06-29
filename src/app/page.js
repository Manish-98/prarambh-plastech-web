import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import ClientCatalog from "@/components/ClientCatalog";
import { products } from "@/lib/data/products";
import { clients } from "@/lib/data/clients";

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
  const sectorRepresentatives = Object.values(
    clients.reduce((groups, client) => {
      if (!groups[client.sector]) {
        groups[client.sector] = client;
      }
      return groups;
    }, {})
  ).slice(0, 4);

  return (
    <div>
      <Hero />
      <ProductCatalog
        title="Our Product Range"
        subtitle="Comprehensive packaging solutions for every industry"
        products={products.slice(0, 4)}
        ctaText="View All Products"
        ctaLink="/products"
        backgroundColor="bg-soft"
      />
      <ClientCatalog
        title="Our Clients"
        subtitle="Trusted by leading companies across diverse industries"
        clients={sectorRepresentatives}
        ctaText="View All Clients"
        ctaLink="/industries"
        backgroundColor="bg-white"
      />
    </div>
  );
}
