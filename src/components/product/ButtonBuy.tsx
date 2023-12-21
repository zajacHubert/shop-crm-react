import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToOrder } from '../../store/slices/createOrderSlice';
import { Product } from '../../types/product';
import { StyledBtn } from './ButtonBuy.css';

interface ButtonBuyProps {
  product: Product;
}

const ButtonBuy = ({ product }: ButtonBuyProps) => {
  const dispatch = useDispatch();

  return (
    <StyledBtn onClick={() => dispatch(addProductToOrder(product))}>
      Add to cart
    </StyledBtn>
  );
};

export default ButtonBuy;
