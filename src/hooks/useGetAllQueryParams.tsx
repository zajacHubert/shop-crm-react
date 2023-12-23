import { useLocation } from 'react-router-dom';

const useGetAllQueryParams = <T extends Record<string, any>>(): T => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const params: Partial<T> = {};

  queryParams.forEach((value, key) => {
    params[key as keyof T] = value as T[keyof T];
  });

  return params as T;
};

export default useGetAllQueryParams;
