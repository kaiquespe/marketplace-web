import { useQuery } from '@tanstack/react-query';
import { getProductsSold } from '../api/products-sold';
import { getProductsAdvertised } from '../api/products-advertised';
import { getViews } from '../api/views';
import { getViewsPerDay } from '../api/views-per-day';

export function useMetrics() {
  const { data: productsSold, isFetching: isProductsSoldLoading } = useQuery({
    queryKey: ['metrics', 'products-sold'],
    queryFn: getProductsSold,
  });

  const { data: productsAdvertised, isFetching: isProductsAdvertisedLoading } = useQuery({
    queryKey: ['metrics', 'products-advertised'],
    queryFn: getProductsAdvertised,
  });

  const { data: views, isFetching: isViewsLoading } = useQuery({
    queryKey: ['metrics', 'views'],
    queryFn: getViews,
  });

  const { data: viewsPerDay, isFetching: isViewsPerDayLoading } = useQuery({
    queryKey: ['metrics', 'views-per-day'],
    queryFn: getViewsPerDay,
  });

  const isLoading = 
    isProductsSoldLoading || 
    isProductsAdvertisedLoading || 
    isViewsLoading || 
    isViewsPerDayLoading;

  return {
    productsSold: productsSold?.data,
    productsAdvertised: productsAdvertised?.data,
    views: views?.data,
    viewsPerDay: viewsPerDay?.data,
    isLoading,
  };
} 