import { products } from '@/app/lib/products'
import ClientFilter from './client-filter'

export const metadata = {
  title: 'Products | Prarambh Plastech',
}

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ClientFilter initialProducts={products} />
    </main>
  )
}
