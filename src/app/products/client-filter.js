'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function ClientFilter({ initialProducts }) {
  const [query, setQuery] = useState('')

  const filtered = initialProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full mb-8 p-3 rounded border border-[--color-border] bg-[--color-soft] text-[--color-foreground]"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </>
  )
}
