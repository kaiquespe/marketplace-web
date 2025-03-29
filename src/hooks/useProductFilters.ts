import { useState } from 'react';
import { PRODUCT_STATUS } from '../config';

interface ProductFilters {
  search: string;
  status: string;
}

export function useProductFilters() {
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    status: PRODUCT_STATUS.ALL,
  });

  const handleSearchChange = (value: string) => {
    setFilters(prev => ({ ...prev, search: value }));
  };

  const handleStatusChange = (value: string) => {
    setFilters(prev => ({ ...prev, status: value }));
  };

  const handleApplyFilters = () => {
    // Implementar lógica de aplicação dos filtros
    console.log('Applying filters:', filters);
  };

  return {
    filters,
    handleSearchChange,
    handleStatusChange,
    handleApplyFilters,
  };
} 