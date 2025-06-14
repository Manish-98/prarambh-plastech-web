'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import IconGenerator from '@/components/IconGenerator'

export default function ClientFilter({ initialProducts }) {
  const [query, setQuery] = useState('')

  const filtered = initialProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <div className="py-6 px-[10%]">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <IconGenerator type="search" className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
          />
        </div>
      </div>
      <hr className="border-gray-200" />

      <div className="py-12 px-[10%] bg-soft">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

          {filtered.length === 0 && (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </>
  )
}
