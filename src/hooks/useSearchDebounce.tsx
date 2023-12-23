import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getRecordsByPage } from '../api/shopApi';
import { EndpointDataByPageMap } from '../types/request';

type ValidEndpoints = keyof EndpointDataByPageMap;

const useSearchRecordsDebounce = (
  endpoint: ValidEndpoints,
  searchTerm: string,
  delay: number,
  isSearchEdited: boolean
) => {
  const [debouncedSearchValue, setDebouncedSearchValue] =
    useState<string>(searchTerm);
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['search', endpoint, debouncedSearchValue] as const,
    queryFn: () =>
      getRecordsByPage(endpoint, {
        page: 1,
        search: debouncedSearchValue ?? '',
      }),
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchTerm);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, delay]);

  if (error) {
    throw new Error('Failed to fetch reacords');
  }

  if (!searchTerm) {
    return {
      isLoading: false,
      data: '',
    };
  }

  if (searchTerm.length < 3) {
    return {
      isLoading: false,
      data: isSearchEdited ? 'Type at least 3 characters' : '',
    };
  }

  return {
    isLoading: isLoading || isFetching,
    data: Array.isArray(data) && data.length ? data : 'No records found',
  };
};

export default useSearchRecordsDebounce;
