import React from 'react';
import useGetAllQueryParams from '../../hooks/useGetAllQueryParams';
import {
  Endpoint,
  GetProductsByPageParams,
  SortDirection,
  SortParamProduct,
} from '../../types/request';
import { useQuery } from '@tanstack/react-query';
import { getAllRecords, getRecordsByPage } from '../../api/shopApi';
import SearchInput from '../../components/ui/SearchInput';
import {
  StyledBoxFilters,
  StyledBoxProducts,
  StyledContainer,
  StyledLink,
  StyledSection,
  StyledTitleFilters,
} from './ProductsPage.css';
import ButtonAddNew from '../../components/ui/ButtonAddNew';
import { getHref } from '../../utils/getHref';
import { CategoryName } from '../../types/product';
import { checkFilterActivity } from '../../utils/checkFilterActivity';
import { FilterType } from '../../types/filter';
import ProductCard from '../../components/product/ProductCard';

const ProductsPage = () => {
  const queryParams = useGetAllQueryParams<GetProductsByPageParams>();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllRecords(Endpoint.Categories),
  });
  const { data: productsByPage } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => getRecordsByPage(Endpoint.Products, queryParams),
  });

  return (
    <StyledSection>
      <SearchInput endpoint={Endpoint.Products} />
      <StyledContainer>
        <StyledBoxFilters>
          <ButtonAddNew endpoint={Endpoint.Products} />
          <StyledTitleFilters>Category</StyledTitleFilters>
          <StyledLink
            to={getHref(Endpoint.Products, {
              ...queryParams,
              category: CategoryName.All,
            })}
            isActive={!queryParams.category}
          >
            All
          </StyledLink>
          {categories?.map((category) => (
            <StyledLink
              to={getHref(Endpoint.Products, {
                ...queryParams,
                category: category.name,
              })}
              isActive={checkFilterActivity(
                {
                  type: FilterType.Category,
                  name: category.name,
                },
                queryParams
              )}
            >
              {category.name}
            </StyledLink>
          ))}
          <StyledTitleFilters>Sort by</StyledTitleFilters>
          <StyledLink
            to={getHref(Endpoint.Products, {
              ...queryParams,
              sortParam: SortParamProduct.Price,
              sortDirection: SortDirection.Ascending,
            })}
            isActive={checkFilterActivity(
              {
                type: FilterType.Filter,
                sortParam: SortParamProduct.Price,
                sortDirection: SortDirection.Ascending,
              },
              queryParams
            )}
          >
            Price ascending
          </StyledLink>
          <StyledLink
            to={getHref(Endpoint.Products, {
              ...queryParams,
              sortParam: SortParamProduct.Price,
              sortDirection: SortDirection.Descending,
            })}
            isActive={checkFilterActivity(
              {
                type: FilterType.Filter,
                sortParam: SortParamProduct.Price,
                sortDirection: SortDirection.Descending,
              },
              queryParams
            )}
          >
            Price descending
          </StyledLink>
          <StyledLink
            to={getHref(Endpoint.Products, {
              ...queryParams,
              sortParam: SortParamProduct.Name,
              sortDirection: SortDirection.Ascending,
            })}
            isActive={checkFilterActivity(
              {
                type: FilterType.Filter,
                sortParam: SortParamProduct.Name,
                sortDirection: SortDirection.Ascending,
              },
              queryParams
            )}
          >
            Product name ascending
          </StyledLink>
          <StyledLink
            to={getHref(Endpoint.Products, {
              ...queryParams,
              sortParam: SortParamProduct.Name,
              sortDirection: SortDirection.Descending,
            })}
            isActive={checkFilterActivity(
              {
                type: FilterType.Filter,
                sortParam: SortParamProduct.Name,
                sortDirection: SortDirection.Descending,
              },
              queryParams
            )}
          >
            Product name descending
          </StyledLink>
        </StyledBoxFilters>
        <StyledBoxProducts>
          {productsByPage?.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StyledBoxProducts>
      </StyledContainer>
    </StyledSection>
  );
};

export default ProductsPage;
