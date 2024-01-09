import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getRecordById } from '../../api/shopApi';
import { Endpoint } from '../../types/request';

const SingleProductPage = () => {
  const { id } = useParams();
  const { data: product } = useQuery({
    queryKey: ['products', id],
    queryFn: () => getRecordById(Endpoint.Products, id!),
  });

  console.log(product);
  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
