'use client'

import SearchFilter from '@/components/SearchFilter'
import Card from '@/components/Card'
import { mapProductToCard } from '@/lib/mappers/cardMappers'

export default function ProductsSearchWrapper({ products }) {
  const filterCriteria = [
    { field: 'name' },
    { field: 'description' }
  ]

  const renderProduct = (product) => <Card {...mapProductToCard(product)} />

  return (
    <SearchFilter
      data={products}
      filterCriteria={filterCriteria}
      renderItem={renderProduct}
      searchPlaceholder="Search Products..."
      searchBarClassName='py-6 flex flex-col justify-center items-center'
      noResultsMessage="No products found."
    />
  )
} 