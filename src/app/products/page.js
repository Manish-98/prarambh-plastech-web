import { products } from '@/app/lib/products'
import ClientFilter from './client-filter'
import HeroBanner from '@/components/HeroBanner'

export const metadata = {
  title: 'Our Products',
  description: 'Explore eco-conscious plastic packaging that doesn’t compromise on strength or quality.',
  openGraph: {
    url: '/products',
    images: [
      {
        url: '/api/og?title=Our%20Products&subtitle=Eco%20with%20Strength&logo=/logo.png&bg=/banner-light.png',
        width: 1200,
        height: 630,
        alt: 'Products OG Image',
      },
    ],
  },
  twitter: {
    images: ['/api/og?title=Our%20Products&subtitle=Eco%20with%20Strength&logo=/logo.png&bg=/banner-light.png'],
  },
};

export default function ProductsPage() {
  return (
    <main className="w-full mx-auto text-white/80">
      <HeroBanner
        title="Our Products"
        description="Discover our comprehensive range of industrial packaging solutions designed for durability, sustainability, and efficiency."
        backgroundImage="/product-banner.jpeg"
      />
      <ClientFilter initialProducts={products} />
    </main>
  )
}
