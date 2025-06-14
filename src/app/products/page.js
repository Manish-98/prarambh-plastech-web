import { products } from '@/app/lib/products'
import ClientFilter from './client-filter'
import HeroBanner from '@/components/HeroBanner'

export const metadata = {
  title: 'Products | Prarambh Plastech',
}

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
