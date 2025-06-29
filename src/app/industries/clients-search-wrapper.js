'use client'

import { useState, useMemo } from 'react';
import SearchFilter from '@/components/SearchFilter'
import Card from '@/components/Card'
import Chips from '@/components/Chips'
import { mapClientToCard } from '@/lib/mappers/cardMappers'

export default function ClientsSearchWrapper({ clients }) {
  const [selectedSector, setSelectedSector] = useState(null);
  const sectors = useMemo(() => Array.from(new Set(clients.map(c => c.sector))), [clients]);
  const filteredClients = selectedSector ? clients.filter(c => c.sector === selectedSector) : clients;

  const filterCriteria = [
    { field: 'sector' },
    { field: 'companyName' }
  ];

  const renderClient = (client) => <Card {...mapClientToCard(client)} />;

  return (
    <SearchFilter
      data={filteredClients}
      filterCriteria={filterCriteria}
      renderItem={renderClient}
      searchPlaceholder="Search by sector or client name..."
      searchBarClassName='py-6 flex flex-col justify-center items-center'
      noResultsMessage="No clients found."
      searchBarExtras={
        <Chips 
          options={sectors} 
          selectedOption={selectedSector} 
          onSelect={setSelectedSector} 
        />
      }
      groupBy={'sector'}
    />
  );
} 