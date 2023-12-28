import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getRecordsByPage } from '../api/shopApi';
import ButtonBuy from '../components/product/ButtonBuy';
import { CategoryName } from '../types/product';
import { Endpoint } from '../types/request';
import { getImageSrc } from '../utils/getImageSrc';
import {
  StyledBoxActions,
  StyledBoxCategory,
  StyledBoxImg,
  StyledBoxProduct,
  StyledBoxProducts,
  StyledBoxProductText,
  StyledBoxProductTitle,
  StyledContainer,
  StyledPCategory,
  StyledPDesc,
  StyledSection,
  StyledSubtitle,
  StyledTextPrice,
  StyledTitle,
  StyledTitleProduct,
} from './HomePage.css';

const HomePage = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['newest'],
    queryFn: () =>
      getRecordsByPage(Endpoint.Products, {
        page: 1,
        category: CategoryName.Newest,
      }),
  });

  return (
    <StyledSection>
      <StyledTitle>Thank You for Shopping With us!</StyledTitle>
      <StyledContainer>
        <StyledSubtitle>Check our newest products</StyledSubtitle>
        <StyledBoxProducts>
          {products?.data.slice(0, 3).map((product) => (
            <StyledBoxProduct key={product.id}>
              <StyledBoxImg>
                <img src={getImageSrc(product.image)} alt={product.title} />
              </StyledBoxImg>
              <StyledBoxProductText>
                <StyledBoxProductTitle>
                  <StyledTitleProduct>{product.title}</StyledTitleProduct>
                  <StyledBoxCategory>
                    <StyledPCategory>{product.category.name}</StyledPCategory>
                  </StyledBoxCategory>
                </StyledBoxProductTitle>
                <StyledPDesc>{product.description}</StyledPDesc>
                <StyledBoxActions>
                  <StyledTextPrice>
                    {product.price.toFixed(2)} €
                  </StyledTextPrice>
                  <ButtonBuy product={product} />
                </StyledBoxActions>
              </StyledBoxProductText>
            </StyledBoxProduct>
          ))}
        </StyledBoxProducts>
      </StyledContainer>
    </StyledSection>
  );
};

export default HomePage;
