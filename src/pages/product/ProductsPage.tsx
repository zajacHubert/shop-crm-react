import React from 'react';
import useGetAllQueryParams from '../../hooks/useGetAllQueryParams';
import { Endpoint, GetProductsByPageParams } from '../../types/request';
import { useQuery } from '@tanstack/react-query';
import { getAllRecords, getRecordsByPage } from '../../api/shopApi';
import SearchInput from '../../components/ui/SearchInput';

const ProductsPage = () => {
  const queryParams = useGetAllQueryParams<GetProductsByPageParams>();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllRecords(Endpoint.Categories),
  });
  const { data: productsByPageData } = useQuery({
    queryKey: ['products'],
    queryFn: () => getRecordsByPage(Endpoint.Products, queryParams),
  });

  return (
    <>
      <SearchInput endpoint={Endpoint.Products} />
    </>
  );
};

export default ProductsPage;
