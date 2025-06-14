import { products } from '@/app/lib/products'
import ClientFilter from './client-filter'

export const metadata = {
  title: 'Products | Prarambh Plastech',
}

export default function ProductsPage() {
  return (
    <main className="w-full mx-auto">
      <div className="bg-soft py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover our comprehensive range of industrial packaging solutions designed 
            for durability, sustainability, and efficiency.
          </p>
        </div>
      </div>
      <ClientFilter initialProducts={products} />
    </main>
  )
}
