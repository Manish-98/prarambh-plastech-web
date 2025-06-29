'use client'

import { useState } from 'react'
import IconGenerator from '@/components/IconGenerator'

export default function SearchFilter({ 
  data, 
  filterCriteria, 
  renderItem, 
  searchPlaceholder = "Search...",
  containerClassName = "py-12 px-[10%] bg-soft",
  gridClassName = "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
  noResultsMessage = "No items found.",
  showSearchBar = true,
  searchBarClassName = "py-6 px-[10%]",
  searchBarExtras = null,
  groupBy = null,
  groupClassName = ""
}) {
  const [query, setQuery] = useState('')

  const filtered = data.filter(item => {
    if (!query.trim()) return true
    
    return filterCriteria.some(criteria => {
      const fieldValue = criteria.field.split('.').reduce((obj, key) => obj?.[key], item)
      if (fieldValue === undefined || fieldValue === null) return false
      
      const searchValue = query.toLowerCase()
      const itemValue = String(fieldValue).toLowerCase()
      
      return itemValue.includes(searchValue)
    })
  })

  let grouped = null
  if (groupBy) {
    grouped = filtered.reduce((acc, item) => {
      const groupKey = item[groupBy] || 'Other';
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(item);
      return acc;
    }, {});
  }

  return (
    <>
      {showSearchBar && (
        <>
          <div className={searchBarClassName}>
            <div className="relative w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IconGenerator type="search" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-soft border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all duration-200"
              />
            </div>
            {searchBarExtras && (
              <div className="mt-4">
                {searchBarExtras}
              </div>
            )}
          </div>
          <hr className="border-border" />
        </>
      )}

      <div className={containerClassName}>
        <div className={groupBy ? groupClassName : gridClassName}>
          {groupBy && grouped ? (
            Object.entries(grouped).map(([group, items]) => (
              <div key={group} className="w-full">
                <h3 className="text-xl font-bold mb-4 mt-8">{group}</h3>
                <div className={gridClassName}>
                  {items.map((item, index) => (
                    <div key={item.id || index}>
                      {renderItem(item)}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            filtered.map((item, index) => (
              <div key={item.id || index}>
                {renderItem(item)}
              </div>
            ))
          )}

          {filtered.length === 0 && (
            <p className="text-foreground">{noResultsMessage}</p>
          )}
        </div>
      </div>
    </>
  )
} 