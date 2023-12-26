import React from 'react';
import { Product } from '../../types/product';
import { Endpoint } from '../../types/request';
import { getCategoryBgColor } from '../../utils/getCategoryBgColor';
import { getImageSrc } from '../../utils/getImageSrc';
import RecordAction from '../ui/RecordAction';
import ButtonBuy from './ButtonBuy';
import {
  StyledBoxActions,
  StyledBoxButtons,
  StyledBoxCategory,
  StyledBoxImg,
  StyledBoxText,
  StyledContainerProduct,
  StyledLink,
  StyledPCategory,
  StyledTextPrice,
  StyledTitle,
} from './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <StyledContainerProduct>
      <StyledBoxImg>
        <img src={getImageSrc(product.image)} alt={product.title} />
      </StyledBoxImg>
      <StyledBoxText>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledBoxActions>
          <StyledBoxCategory
            bgColor={getCategoryBgColor(product.category.name)}
          >
            <StyledPCategory>{product.category.name}</StyledPCategory>
          </StyledBoxCategory>
          <RecordAction endpoint={Endpoint.Products} id={product.id} />
        </StyledBoxActions>
        <StyledTextPrice>${product.price.toFixed(2)}</StyledTextPrice>
        <StyledBoxButtons>
          <StyledLink to={`/${Endpoint.Products}/${product.id}`}>
            View details
          </StyledLink>
          <ButtonBuy product={product} />
        </StyledBoxButtons>
      </StyledBoxText>
    </StyledContainerProduct>
  );
};

export default ProductCard;
