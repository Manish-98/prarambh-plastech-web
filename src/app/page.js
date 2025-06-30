import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Card from "@/components/Card";
import { products } from "@/lib/data/products";
import { clients } from "@/lib/data/clients";
import { mapProductToCard } from "@/lib/mappers/cardMappers";
import { mapClientToCard } from "@/lib/mappers/cardMappers";

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
  // Get one client from each sector for the catalog
  const sectorRepresentatives = Object.values(
    clients.reduce((groups, client) => {
      if (!groups[client.sector]) {
        groups[client.sector] = client;
      }
      return groups;
    }, {})
  ).slice(0, 4); // Take first 4 sectors

  return (
    <div>
      <Hero />
      <Catalog
        title="Our Product Range"
        subtitle="Comprehensive packaging solutions for every industry"
        items={products.slice(0, 4)}
        renderItem={(product) => <Card key={product.id} {...mapProductToCard(product)} />}
        ctaText="View All Products"
        ctaLink="/products"
        backgroundColor="bg-soft"
      />
      <Catalog
        title="Our Clients"
        subtitle="Trusted by leading companies across diverse industries"
        items={sectorRepresentatives}
        renderItem={(client) => <Card key={client.id} {...mapClientToCard(client)} />}
        ctaText="View All Clients"
        ctaLink="/industries"
        backgroundColor="bg-white"
      />
    </div>
  );
}
